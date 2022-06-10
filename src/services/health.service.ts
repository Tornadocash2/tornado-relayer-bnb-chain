import { autoInjectable, container } from 'tsyringe';
import { ConfigService } from './config.service';
import { RedisStore } from '../modules/redis';
import { formatEther } from 'ethers/lib/utils';

class RelayerError extends Error {
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }

  code: string;
}

@autoInjectable()
export class HealthService {

  constructor(private config: ConfigService, private store: RedisStore) {
  }

  async clearErrors() {
    await this.store.client.del('errors:log', 'errors:code');
  }

  private async _getErrors(): Promise<{ errorsLog: { message: string, score: number }[], errorsCode: Record<string, number> }> {
    const logSet = await this.store.client.zrevrange('errors:log', 0, -1, 'WITHSCORES');
    const codeSet = await this.store.client.zrevrange('errors:code', 0, -1, 'WITHSCORES');

    return { errorsLog: HealthService._parseSet(logSet), errorsCode: HealthService._parseSet(codeSet, 'object') };
  }

  private async _getStatus() {
    return this.store.client.hgetall('health:status');
  }

  private static _parseSet(log, to = 'array', keys = ['message', 'score']) {
    let out;
    if (to === 'array') {
      out = [];
      while (log.length) {
        const [a, b] = log.splice(0, 2);
        out.push({ [keys[0]]: a, [keys[1]]: b });
      }
    } else {
      out = {};
      while (log.length) {
        const [a, b] = log.splice(0, 2);
        out[a] = Number(b);
      }
    }

    return out;
  }

  async setStatus(status: { status: boolean; error: string; }) {
    await this.store.client.hset('health:status', status);
  }

  async getStatus() {
    const heathStatus = await this._getStatus();
    const { errorsLog, errorsCode } = await this._getErrors();

    return {
      ...heathStatus,
      errorsLog,
      errorsCode,
    };
  }

  async saveError(e) {
    await this.store.client.zadd('errors:code', 'INCR', 1, e?.code || 'RUNTIME_ERROR');
    await this.store.client.zadd('errors:log', 'INCR', 1, e.message);
  }

  private async _checkBalance(value, currency: 'MAIN' | 'TORN') {
    let level = 'OK';
    const type = 'BALANCE';
    const key = 'alerts:list';
    const time = new Date().getTime();
    if (value.lt(this.config.balances[currency].critical)) {
      level = 'CRITICAL';
    } else if (value.lt(this.config.balances[currency].warn)) {
      level = 'WARN';
    }

    const alert = {
      type: `${type}_${currency}_${level}`,
      message: `Insufficient balance ${formatEther(value)} ${currency === 'MAIN' ? this.config.nativeCurrency : 'torn'}`,
      level,
      time,
    };
    await this.store.client.rpush(key, JSON.stringify(alert));

    return alert;
  }

  async check() {
    await this.config.checkNetwork();
    const mainBalance = await this.config.wallet.getBalance();
    const tornBalance = await this.config.tokenContract.balanceOf(this.config.wallet.address);
    // const mainBalance = BigNumber.from(`${1e18}`).add(1);
    // const tornBalance = BigNumber.from(`${45e18}`);
    const mainStatus = await this._checkBalance(mainBalance, 'MAIN');
    const tornStatus = await this._checkBalance(tornBalance, 'TORN');
    if (mainStatus.level === 'CRITICAL') {
      throw new RelayerError(mainStatus.message, 'INSUFFICIENT_MAIN_BALANCE');
    }
    if (tornStatus.level === 'CRITICAL') {
      throw new RelayerError(tornStatus.message, 'INSUFFICIENT_TORN_BALANCE');
    }
  }

}

type HealthData = {
  status: boolean,
  error: string,
  errorsLog: { message: string, score: number }[]
}

export default () => container.resolve(HealthService);
