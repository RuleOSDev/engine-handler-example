/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolFeeInterface extends ethers.utils.Interface {
  functions: {
    "BILL_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "bill(address,address,uint32,uint16,uint16,uint256)": FunctionFragment;
    "calFee(address,uint256)": FunctionFragment;
    "clusterAdminDeposit(address)": FunctionFragment;
    "cname()": FunctionFragment;
    "depositCluster(uint32)": FunctionFragment;
    "depositHandler(address,uint8,uint256)": FunctionFragment;
    "getHandlerFeeState(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "handlerDeployer(address)": FunctionFragment;
    "handlerEarning(address)": FunctionFragment;
    "handlerGasFeeRate(address)": FunctionFragment;
    "handlerMinGasFee(address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setClusterHandlerArea(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateHandler(address,uint256,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "withdrawClusterAdminDeposit(uint256)": FunctionFragment;
    "withdrawHandler(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BILL_ROLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bill",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "clusterAdminDeposit",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "cname", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositCluster",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositHandler",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHandlerFeeState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "handlerDeployer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handlerEarning",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handlerGasFeeRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "handlerMinGasFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setClusterHandlerArea",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateHandler",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawClusterAdminDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawHandler",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BILL_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clusterAdminDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cname", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositCluster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHandlerFeeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handlerDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handlerEarning",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handlerGasFeeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handlerMinGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClusterHandlerArea",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawClusterAdminDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawHandler",
    data: BytesLike
  ): Result;

  events: {
    "Bill(address,address,address,uint32,uint16,uint16,uint256,uint256)": EventFragment;
    "Deposit(address,uint32,uint256)": EventFragment;
    "DepositHandler(address,address,uint8,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "WithdrawClusterAdminDeposit(address,uint256)": EventFragment;
    "WithdrawHandler(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bill"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositHandler"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WithdrawClusterAdminDeposit"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawHandler"): EventFragment;
}

export type BillEvent = TypedEvent<
  [string, string, string, number, number, number, BigNumber, BigNumber] & {
    sender: string;
    handler: string;
    clusterAdmin: string;
    clusterId: number;
    ruleSlotIndexInput: number;
    ruleSlotIndexOutput: number;
    totalCallGas: BigNumber;
    weiValue: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, number, BigNumber] & {
    sender: string;
    clusterId: number;
    weiValue: BigNumber;
  }
>;

export type DepositHandlerEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber] & {
    sender: string;
    handler: string;
    channel: number;
    weiValue: BigNumber;
    totalCallGas: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type WithdrawClusterAdminDepositEvent = TypedEvent<
  [string, BigNumber] & { sender: string; weiValue: BigNumber }
>;

export type WithdrawHandlerEvent = TypedEvent<
  [string, string, BigNumber] & {
    sender: string;
    handler: string;
    weiValue: BigNumber;
  }
>;

export class PoolFee extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolFeeInterface;

  functions: {
    BILL_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    bill(
      handler: string,
      clusterAdmin: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calFee(
      handler: string,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clusterAdminDeposit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cname(overrides?: CallOverrides): Promise<[string]>;

    depositCluster(
      clusterId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositHandler(
      handler: string,
      channel: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getHandlerFeeState(
      handler: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          number,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          handler: string;
          name: string;
          description: string;
          state: number;
          callCount: BigNumber;
          deployer: string;
          minGasFee: BigNumber;
          gasFeeRate: BigNumber;
          earning: BigNumber;
        }
      ]
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    handlerDeployer(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    handlerEarning(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handlerGasFeeRate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    handlerMinGasFee(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      engine_: string,
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClusterHandlerArea(
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateHandler(
      handler: string,
      minGasFee: BigNumberish,
      gasFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawClusterAdminDeposit(
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawHandler(
      handler: string,
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BILL_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  bill(
    handler: string,
    clusterAdmin: string,
    clusterId: BigNumberish,
    ruleSlotIndexInput: BigNumberish,
    ruleSlotIndexOutput: BigNumberish,
    totalCallGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calFee(
    handler: string,
    totalCallGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clusterAdminDeposit(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cname(overrides?: CallOverrides): Promise<string>;

  depositCluster(
    clusterId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositHandler(
    handler: string,
    channel: BigNumberish,
    totalCallGas: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getHandlerFeeState(
    handler: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      number,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      handler: string;
      name: string;
      description: string;
      state: number;
      callCount: BigNumber;
      deployer: string;
      minGasFee: BigNumber;
      gasFeeRate: BigNumber;
      earning: BigNumber;
    }
  >;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  handlerDeployer(arg0: string, overrides?: CallOverrides): Promise<string>;

  handlerEarning(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  handlerGasFeeRate(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  handlerMinGasFee(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    engine_: string,
    clusterHandlerArea_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClusterHandlerArea(
    clusterHandlerArea_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateHandler(
    handler: string,
    minGasFee: BigNumberish,
    gasFeeRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawClusterAdminDeposit(
    weiValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawHandler(
    handler: string,
    weiValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BILL_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    bill(
      handler: string,
      clusterAdmin: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calFee(
      handler: string,
      totalCallGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clusterAdminDeposit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cname(overrides?: CallOverrides): Promise<string>;

    depositCluster(
      clusterId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositHandler(
      handler: string,
      channel: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHandlerFeeState(
      handler: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        number,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        handler: string;
        name: string;
        description: string;
        state: number;
        callCount: BigNumber;
        deployer: string;
        minGasFee: BigNumber;
        gasFeeRate: BigNumber;
        earning: BigNumber;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    handlerDeployer(arg0: string, overrides?: CallOverrides): Promise<string>;

    handlerEarning(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    handlerGasFeeRate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handlerMinGasFee(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      engine_: string,
      clusterHandlerArea_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setClusterHandlerArea(
      clusterHandlerArea_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateHandler(
      handler: string,
      minGasFee: BigNumberish,
      gasFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawClusterAdminDeposit(
      weiValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawHandler(
      handler: string,
      weiValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Bill(address,address,address,uint32,uint16,uint16,uint256,uint256)"(
      sender?: string | null,
      handler?: string | null,
      clusterAdmin?: string | null,
      clusterId?: null,
      ruleSlotIndexInput?: null,
      ruleSlotIndexOutput?: null,
      totalCallGas?: null,
      weiValue?: null
    ): TypedEventFilter<
      [string, string, string, number, number, number, BigNumber, BigNumber],
      {
        sender: string;
        handler: string;
        clusterAdmin: string;
        clusterId: number;
        ruleSlotIndexInput: number;
        ruleSlotIndexOutput: number;
        totalCallGas: BigNumber;
        weiValue: BigNumber;
      }
    >;

    Bill(
      sender?: string | null,
      handler?: string | null,
      clusterAdmin?: string | null,
      clusterId?: null,
      ruleSlotIndexInput?: null,
      ruleSlotIndexOutput?: null,
      totalCallGas?: null,
      weiValue?: null
    ): TypedEventFilter<
      [string, string, string, number, number, number, BigNumber, BigNumber],
      {
        sender: string;
        handler: string;
        clusterAdmin: string;
        clusterId: number;
        ruleSlotIndexInput: number;
        ruleSlotIndexOutput: number;
        totalCallGas: BigNumber;
        weiValue: BigNumber;
      }
    >;

    "Deposit(address,uint32,uint256)"(
      sender?: string | null,
      clusterId?: null,
      weiValue?: null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { sender: string; clusterId: number; weiValue: BigNumber }
    >;

    Deposit(
      sender?: string | null,
      clusterId?: null,
      weiValue?: null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { sender: string; clusterId: number; weiValue: BigNumber }
    >;

    "DepositHandler(address,address,uint8,uint256,uint256)"(
      sender?: string | null,
      handler?: string | null,
      channel?: null,
      weiValue?: null,
      totalCallGas?: null
    ): TypedEventFilter<
      [string, string, number, BigNumber, BigNumber],
      {
        sender: string;
        handler: string;
        channel: number;
        weiValue: BigNumber;
        totalCallGas: BigNumber;
      }
    >;

    DepositHandler(
      sender?: string | null,
      handler?: string | null,
      channel?: null,
      weiValue?: null,
      totalCallGas?: null
    ): TypedEventFilter<
      [string, string, number, BigNumber, BigNumber],
      {
        sender: string;
        handler: string;
        channel: number;
        weiValue: BigNumber;
        totalCallGas: BigNumber;
      }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "WithdrawClusterAdminDeposit(address,uint256)"(
      sender?: string | null,
      weiValue?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; weiValue: BigNumber }
    >;

    WithdrawClusterAdminDeposit(
      sender?: string | null,
      weiValue?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sender: string; weiValue: BigNumber }
    >;

    "WithdrawHandler(address,address,uint256)"(
      sender?: string | null,
      handler?: string | null,
      weiValue?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; handler: string; weiValue: BigNumber }
    >;

    WithdrawHandler(
      sender?: string | null,
      handler?: string | null,
      weiValue?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; handler: string; weiValue: BigNumber }
    >;
  };

  estimateGas: {
    BILL_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    bill(
      handler: string,
      clusterAdmin: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calFee(
      handler: string,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clusterAdminDeposit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cname(overrides?: CallOverrides): Promise<BigNumber>;

    depositCluster(
      clusterId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositHandler(
      handler: string,
      channel: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getHandlerFeeState(
      handler: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    handlerDeployer(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handlerEarning(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    handlerGasFeeRate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handlerMinGasFee(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      engine_: string,
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClusterHandlerArea(
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateHandler(
      handler: string,
      minGasFee: BigNumberish,
      gasFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawClusterAdminDeposit(
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawHandler(
      handler: string,
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BILL_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bill(
      handler: string,
      clusterAdmin: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calFee(
      handler: string,
      totalCallGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clusterAdminDeposit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cname(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositCluster(
      clusterId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositHandler(
      handler: string,
      channel: BigNumberish,
      totalCallGas: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getHandlerFeeState(
      handler: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    handlerDeployer(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handlerEarning(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handlerGasFeeRate(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handlerMinGasFee(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      engine_: string,
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClusterHandlerArea(
      clusterHandlerArea_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateHandler(
      handler: string,
      minGasFee: BigNumberish,
      gasFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawClusterAdminDeposit(
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawHandler(
      handler: string,
      weiValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
