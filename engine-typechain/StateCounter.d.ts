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

interface StateCounterInterface extends ethers.utils.Interface {
  functions: {
    "add((address,address,address,address,uint256,uint256,uint32,uint32,uint32,uint8,tuple[],bytes))": FunctionFragment;
    "cname()": FunctionFragment;
    "get(uint32)": FunctionFragment;
    "getCurrentTaskId()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "process(uint32,address,uint8)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "taskMap(uint32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateExecuteDelayTime(uint32,int32)": FunctionFragment;
    "updateTime(uint32,uint32,uint32,uint32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [
      {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumberish;
        value: BigNumberish;
        taskId: BigNumberish;
        parentTaskId: BigNumberish;
        clusterId: BigNumberish;
        state: BigNumberish;
        inTokenList: {
          erc: BigNumberish;
          token: string;
          id: BigNumberish;
          amount: BigNumberish;
          attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
        }[];
        args: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "cname", values?: undefined): string;
  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getCurrentTaskId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "process",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taskMap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateExecuteDelayTime",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTime",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cname", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTaskId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taskMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateExecuteDelayTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateTime", data: BytesLike): Result;
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

export class StateCounter extends BaseContract {
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

  interface: StateCounterInterface;

  functions: {
    add(
      task: {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumberish;
        value: BigNumberish;
        taskId: BigNumberish;
        parentTaskId: BigNumberish;
        clusterId: BigNumberish;
        state: BigNumberish;
        inTokenList: {
          erc: BigNumberish;
          token: string;
          id: BigNumberish;
          amount: BigNumberish;
          attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
        }[];
        args: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cname(overrides?: CallOverrides): Promise<[string]>;

    get(
      taskId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          number,
          number,
          number,
          number,
          ([
            number,
            string,
            BigNumber,
            BigNumber,
            ([number, number] & { attrId: number; attrAmount: number })[]
          ] & {
            erc: number;
            token: string;
            id: BigNumber;
            amount: BigNumber;
            attrInList: ([number, number] & {
              attrId: number;
              attrAmount: number;
            })[];
          })[],
          string
        ] & {
          caller: string;
          clusterArea: string;
          lastHandler: string;
          snippet: string;
          valueTime: BigNumber;
          value: BigNumber;
          taskId: number;
          parentTaskId: number;
          clusterId: number;
          state: number;
          inTokenList: ([
            number,
            string,
            BigNumber,
            BigNumber,
            ([number, number] & { attrId: number; attrAmount: number })[]
          ] & {
            erc: number;
            token: string;
            id: BigNumber;
            amount: BigNumber;
            attrInList: ([number, number] & {
              attrId: number;
              attrAmount: number;
            })[];
          })[];
          args: string;
        }
      ]
    >;

    getCurrentTaskId(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    process(
      taskId: BigNumberish,
      lastHandler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taskMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        string
      ] & {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumber;
        value: BigNumber;
        taskId: number;
        parentTaskId: number;
        clusterId: number;
        state: number;
        args: string;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateExecuteDelayTime(
      taskId: BigNumberish,
      delayTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTime(
      taskId: BigNumberish,
      state: BigNumberish,
      timestamp: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  add(
    task: {
      caller: string;
      clusterArea: string;
      lastHandler: string;
      snippet: string;
      valueTime: BigNumberish;
      value: BigNumberish;
      taskId: BigNumberish;
      parentTaskId: BigNumberish;
      clusterId: BigNumberish;
      state: BigNumberish;
      inTokenList: {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[];
      args: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cname(overrides?: CallOverrides): Promise<string>;

  get(
    taskId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      number,
      number,
      number,
      number,
      ([
        number,
        string,
        BigNumber,
        BigNumber,
        ([number, number] & { attrId: number; attrAmount: number })[]
      ] & {
        erc: number;
        token: string;
        id: BigNumber;
        amount: BigNumber;
        attrInList: ([number, number] & {
          attrId: number;
          attrAmount: number;
        })[];
      })[],
      string
    ] & {
      caller: string;
      clusterArea: string;
      lastHandler: string;
      snippet: string;
      valueTime: BigNumber;
      value: BigNumber;
      taskId: number;
      parentTaskId: number;
      clusterId: number;
      state: number;
      inTokenList: ([
        number,
        string,
        BigNumber,
        BigNumber,
        ([number, number] & { attrId: number; attrAmount: number })[]
      ] & {
        erc: number;
        token: string;
        id: BigNumber;
        amount: BigNumber;
        attrInList: ([number, number] & {
          attrId: number;
          attrAmount: number;
        })[];
      })[];
      args: string;
    }
  >;

  getCurrentTaskId(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    engine_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  process(
    taskId: BigNumberish,
    lastHandler: string,
    state: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taskMap(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      number,
      number,
      number,
      number,
      string
    ] & {
      caller: string;
      clusterArea: string;
      lastHandler: string;
      snippet: string;
      valueTime: BigNumber;
      value: BigNumber;
      taskId: number;
      parentTaskId: number;
      clusterId: number;
      state: number;
      args: string;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateExecuteDelayTime(
    taskId: BigNumberish,
    delayTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTime(
    taskId: BigNumberish,
    state: BigNumberish,
    timestamp: BigNumberish,
    blockNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    add(
      task: {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumberish;
        value: BigNumberish;
        taskId: BigNumberish;
        parentTaskId: BigNumberish;
        clusterId: BigNumberish;
        state: BigNumberish;
        inTokenList: {
          erc: BigNumberish;
          token: string;
          id: BigNumberish;
          amount: BigNumberish;
          attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
        }[];
        args: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<number>;

    cname(overrides?: CallOverrides): Promise<string>;

    get(
      taskId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        ([
          number,
          string,
          BigNumber,
          BigNumber,
          ([number, number] & { attrId: number; attrAmount: number })[]
        ] & {
          erc: number;
          token: string;
          id: BigNumber;
          amount: BigNumber;
          attrInList: ([number, number] & {
            attrId: number;
            attrAmount: number;
          })[];
        })[],
        string
      ] & {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumber;
        value: BigNumber;
        taskId: number;
        parentTaskId: number;
        clusterId: number;
        state: number;
        inTokenList: ([
          number,
          string,
          BigNumber,
          BigNumber,
          ([number, number] & { attrId: number; attrAmount: number })[]
        ] & {
          erc: number;
          token: string;
          id: BigNumber;
          amount: BigNumber;
          attrInList: ([number, number] & {
            attrId: number;
            attrAmount: number;
          })[];
        })[];
        args: string;
      }
    >;

    getCurrentTaskId(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(engine_: string, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    process(
      taskId: BigNumberish,
      lastHandler: string,
      state: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    taskMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number,
        string
      ] & {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumber;
        value: BigNumber;
        taskId: number;
        parentTaskId: number;
        clusterId: number;
        state: number;
        args: string;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateExecuteDelayTime(
      taskId: BigNumberish,
      delayTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    updateTime(
      taskId: BigNumberish,
      state: BigNumberish,
      timestamp: BigNumberish,
      blockNumber: BigNumberish,
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
    add(
      task: {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumberish;
        value: BigNumberish;
        taskId: BigNumberish;
        parentTaskId: BigNumberish;
        clusterId: BigNumberish;
        state: BigNumberish;
        inTokenList: {
          erc: BigNumberish;
          token: string;
          id: BigNumberish;
          amount: BigNumberish;
          attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
        }[];
        args: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cname(overrides?: CallOverrides): Promise<BigNumber>;

    get(taskId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentTaskId(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    process(
      taskId: BigNumberish,
      lastHandler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taskMap(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateExecuteDelayTime(
      taskId: BigNumberish,
      delayTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTime(
      taskId: BigNumberish,
      state: BigNumberish,
      timestamp: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      task: {
        caller: string;
        clusterArea: string;
        lastHandler: string;
        snippet: string;
        valueTime: BigNumberish;
        value: BigNumberish;
        taskId: BigNumberish;
        parentTaskId: BigNumberish;
        clusterId: BigNumberish;
        state: BigNumberish;
        inTokenList: {
          erc: BigNumberish;
          token: string;
          id: BigNumberish;
          amount: BigNumberish;
          attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
        }[];
        args: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cname(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      taskId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentTaskId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      engine_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    process(
      taskId: BigNumberish,
      lastHandler: string,
      state: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taskMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateExecuteDelayTime(
      taskId: BigNumberish,
      delayTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTime(
      taskId: BigNumberish,
      state: BigNumberish,
      timestamp: BigNumberish,
      blockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}