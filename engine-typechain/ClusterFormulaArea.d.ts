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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ClusterFormulaAreaInterface extends ethers.utils.Interface {
  functions: {
    "cname()": FunctionFragment;
    "formulaDescription(bytes4)": FunctionFragment;
    "formulaList(bytes4,uint256)": FunctionFragment;
    "formulaName(bytes4)": FunctionFragment;
    "formulaState(bytes32)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFormulaList(uint32,string[],string[],int256[][])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cname", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "formulaDescription",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "formulaList",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "formulaName",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "formulaState",
    values: [BytesLike]
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
    functionFragment: "setFormulaList",
    values: [BigNumberish, string[], string[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cname", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "formulaDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "formulaList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "formulaName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "formulaState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFormulaList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class ClusterFormulaArea extends BaseContract {
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

  interface: ClusterFormulaAreaInterface;

  functions: {
    cname(overrides?: CallOverrides): Promise<[string]>;

    formulaDescription(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    formulaList(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    formulaName(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    formulaState(arg0: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    initialize(
      clusterArea_: string,
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFormulaList(
      clusterId: BigNumberish,
      nameList: string[],
      descriptionList: string[],
      formulaItemList: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cname(overrides?: CallOverrides): Promise<string>;

  formulaDescription(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  formulaList(
    arg0: BytesLike,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  formulaName(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  formulaState(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

  initialize(
    clusterArea_: string,
    engine_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFormulaList(
    clusterId: BigNumberish,
    nameList: string[],
    descriptionList: string[],
    formulaItemList: BigNumberish[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cname(overrides?: CallOverrides): Promise<string>;

    formulaDescription(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    formulaList(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    formulaName(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    formulaState(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

    initialize(
      clusterArea_: string,
      engine_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFormulaList(
      clusterId: BigNumberish,
      nameList: string[],
      descriptionList: string[],
      formulaItemList: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
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
  };

  estimateGas: {
    cname(overrides?: CallOverrides): Promise<BigNumber>;

    formulaDescription(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    formulaList(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    formulaName(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    formulaState(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      clusterArea_: string,
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFormulaList(
      clusterId: BigNumberish,
      nameList: string[],
      descriptionList: string[],
      formulaItemList: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cname(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    formulaDescription(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    formulaList(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    formulaName(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    formulaState(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      clusterArea_: string,
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFormulaList(
      clusterId: BigNumberish,
      nameList: string[],
      descriptionList: string[],
      formulaItemList: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
