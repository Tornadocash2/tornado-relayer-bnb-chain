/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface TornadoABIInterface extends utils.Interface {
  contractName: 'TornadoABI';

  functions: {
    'changeOperator(address)': FunctionFragment;
    'nullifierHashes(bytes32)': FunctionFragment;
    'withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)': FunctionFragment;
    'verifier()': FunctionFragment;
    'hashLeftRight(bytes32,bytes32)': FunctionFragment;
    'FIELD_SIZE()': FunctionFragment;
    'levels()': FunctionFragment;
    'operator()': FunctionFragment;
    'isKnownRoot(bytes32)': FunctionFragment;
    'commitments(bytes32)': FunctionFragment;
    'denomination()': FunctionFragment;
    'currentRootIndex()': FunctionFragment;
    'updateVerifier(address)': FunctionFragment;
    'deposit(bytes32)': FunctionFragment;
    'getLastRoot()': FunctionFragment;
    'roots(uint256)': FunctionFragment;
    'ROOT_HISTORY_SIZE()': FunctionFragment;
    'isSpent(bytes32)': FunctionFragment;
    'zeros(uint256)': FunctionFragment;
    'ZERO_VALUE()': FunctionFragment;
    'filledSubtrees(uint256)': FunctionFragment;
    'nextIndex()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'changeOperator'
      | 'nullifierHashes'
      | 'withdraw'
      | 'verifier'
      | 'hashLeftRight'
      | 'FIELD_SIZE'
      | 'levels'
      | 'operator'
      | 'isKnownRoot'
      | 'commitments'
      | 'denomination'
      | 'currentRootIndex'
      | 'updateVerifier'
      | 'deposit'
      | 'getLastRoot'
      | 'roots'
      | 'ROOT_HISTORY_SIZE'
      | 'isSpent'
      | 'zeros'
      | 'ZERO_VALUE'
      | 'filledSubtrees'
      | 'nextIndex',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'changeOperator', values: [string]): string;
  encodeFunctionData(functionFragment: 'nullifierHashes', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BytesLike, BytesLike, BytesLike, string, string, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'verifier', values?: undefined): string;
  encodeFunctionData(functionFragment: 'hashLeftRight', values: [BytesLike, BytesLike]): string;
  encodeFunctionData(functionFragment: 'FIELD_SIZE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'levels', values?: undefined): string;
  encodeFunctionData(functionFragment: 'operator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isKnownRoot', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'commitments', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'denomination', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentRootIndex', values?: undefined): string;
  encodeFunctionData(functionFragment: 'updateVerifier', values: [string]): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'getLastRoot', values?: undefined): string;
  encodeFunctionData(functionFragment: 'roots', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'ROOT_HISTORY_SIZE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isSpent', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'zeros', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'ZERO_VALUE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'filledSubtrees', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'nextIndex', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'changeOperator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nullifierHashes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hashLeftRight', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'FIELD_SIZE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'levels', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isKnownRoot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'commitments', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'denomination', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentRootIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateVerifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLastRoot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'roots', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ROOT_HISTORY_SIZE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isSpent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'zeros', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ZERO_VALUE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'filledSubtrees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nextIndex', data: BytesLike): Result;

  events: {
    'Deposit(bytes32,uint32,uint256)': EventFragment;
    'Withdrawal(address,bytes32,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawal'): EventFragment;
}

export interface DepositEventObject {
  commitment: string;
  leafIndex: number;
  timestamp: BigNumber;
}
export type DepositEvent = TypedEvent<[string, number, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface WithdrawalEventObject {
  to: string;
  nullifierHash: string;
  relayer: string;
  fee: BigNumber;
}
export type WithdrawalEvent = TypedEvent<[string, string, string, BigNumber], WithdrawalEventObject>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface TornadoABI extends BaseContract {
  contractName: 'TornadoABI';

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TornadoABIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    hashLeftRight(_left: BytesLike, _right: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    denomination(overrides?: CallOverrides): Promise<[BigNumber]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    updateVerifier(
      _newVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _commitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    isSpent(_nullifierHash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    filledSubtrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;
  };

  changeOperator(_newOperator: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    _proof: BytesLike,
    _root: BytesLike,
    _nullifierHash: BytesLike,
    _recipient: string,
    _relayer: string,
    _fee: BigNumberish,
    _refund: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  verifier(overrides?: CallOverrides): Promise<string>;

  hashLeftRight(_left: BytesLike, _right: BytesLike, overrides?: CallOverrides): Promise<string>;

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  levels(overrides?: CallOverrides): Promise<number>;

  operator(overrides?: CallOverrides): Promise<string>;

  isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  denomination(overrides?: CallOverrides): Promise<BigNumber>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  updateVerifier(_newVerifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  deposit(
    _commitment: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  isSpent(_nullifierHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  filledSubtrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    changeOperator(_newOperator: string, overrides?: CallOverrides): Promise<void>;

    nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    verifier(overrides?: CallOverrides): Promise<string>;

    hashLeftRight(_left: BytesLike, _right: BytesLike, overrides?: CallOverrides): Promise<string>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<number>;

    operator(overrides?: CallOverrides): Promise<string>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    updateVerifier(_newVerifier: string, overrides?: CallOverrides): Promise<void>;

    deposit(_commitment: BytesLike, overrides?: CallOverrides): Promise<void>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    isSpent(_nullifierHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    nextIndex(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    'Deposit(bytes32,uint32,uint256)'(commitment?: BytesLike | null, leafIndex?: null, timestamp?: null): DepositEventFilter;
    Deposit(commitment?: BytesLike | null, leafIndex?: null, timestamp?: null): DepositEventFilter;

    'Withdrawal(address,bytes32,address,uint256)'(
      to?: null,
      nullifierHash?: null,
      relayer?: string | null,
      fee?: null,
    ): WithdrawalEventFilter;
    Withdrawal(to?: null, nullifierHash?: null, relayer?: string | null, fee?: null): WithdrawalEventFilter;
  };

  estimateGas: {
    changeOperator(_newOperator: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    hashLeftRight(_left: BytesLike, _right: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    updateVerifier(_newVerifier: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    deposit(_commitment: BytesLike, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    isSpent(_nullifierHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    changeOperator(
      _newOperator: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashLeftRight(_left: BytesLike, _right: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    denomination(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateVerifier(
      _newVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _commitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSpent(_nullifierHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filledSubtrees(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}