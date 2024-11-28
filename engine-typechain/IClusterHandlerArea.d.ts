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

interface IClusterHandlerAreaInterface extends ethers.utils.Interface {
  functions: {
    "add(string,string,address)": FunctionFragment;
    "cname()": FunctionFragment;
    "deployerTransfer(address,address)": FunctionFragment;
    "get(address)": FunctionFragment;
    "isAvailable(address)": FunctionFragment;
    "updateState(address,uint8)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "cname", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deployerTransfer",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "get", values: [string]): string;
  encodeFunctionData(functionFragment: "isAvailable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateState",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cname", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployerTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "DeployerTransfer(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployerTransfer"): EventFragment;
}

export type DeployerTransferEvent = TypedEvent<
  [string, string] & { deployer: string; newDeployer: string }
>;

export class IClusterHandlerArea extends BaseContract {
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

  interface: IClusterHandlerAreaInterface;

  functions: {
    add(
      name: string,
      description: string,
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cname(overrides?: CallOverrides): Promise<[string]>;

    deployerTransfer(
      handler: string,
      newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get(
      handler: string,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        [number, string, string, string, string, number, BigNumber] & {
          id: number;
          name: string;
          description: string;
          handler: string;
          deployer: string;
          state: number;
          callCount: BigNumber;
        }
      ]
    >;

    isAvailable(
      handler: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exist: boolean }>;

    updateState(
      handler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  add(
    name: string,
    description: string,
    handler: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cname(overrides?: CallOverrides): Promise<string>;

  deployerTransfer(
    handler: string,
    newDeployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get(
    handler: string,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      [number, string, string, string, string, number, BigNumber] & {
        id: number;
        name: string;
        description: string;
        handler: string;
        deployer: string;
        state: number;
        callCount: BigNumber;
      }
    ]
  >;

  isAvailable(handler: string, overrides?: CallOverrides): Promise<boolean>;

  updateState(
    handler: string,
    state: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    add(
      name: string,
      description: string,
      handler: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cname(overrides?: CallOverrides): Promise<string>;

    deployerTransfer(
      handler: string,
      newDeployer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    get(
      handler: string,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        [number, string, string, string, string, number, BigNumber] & {
          id: number;
          name: string;
          description: string;
          handler: string;
          deployer: string;
          state: number;
          callCount: BigNumber;
        }
      ]
    >;

    isAvailable(handler: string, overrides?: CallOverrides): Promise<boolean>;

    updateState(
      handler: string,
      state: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "DeployerTransfer(address,address)"(
      deployer?: string | null,
      newDeployer?: string | null
    ): TypedEventFilter<
      [string, string],
      { deployer: string; newDeployer: string }
    >;

    DeployerTransfer(
      deployer?: string | null,
      newDeployer?: string | null
    ): TypedEventFilter<
      [string, string],
      { deployer: string; newDeployer: string }
    >;
  };

  estimateGas: {
    add(
      name: string,
      description: string,
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cname(overrides?: CallOverrides): Promise<BigNumber>;

    deployerTransfer(
      handler: string,
      newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get(handler: string, overrides?: CallOverrides): Promise<BigNumber>;

    isAvailable(handler: string, overrides?: CallOverrides): Promise<BigNumber>;

    updateState(
      handler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      name: string,
      description: string,
      handler: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cname(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployerTransfer(
      handler: string,
      newDeployer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get(
      handler: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAvailable(
      handler: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateState(
      handler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}