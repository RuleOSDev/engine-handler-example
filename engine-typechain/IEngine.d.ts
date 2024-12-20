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

interface IEngineInterface extends ethers.utils.Interface {
  functions: {
    "claim(address,uint32,bytes,uint16[])": FunctionFragment;
    "claimAddress(address,uint32,bytes,address,uint16[])": FunctionFragment;
    "cname()": FunctionFragment;
    "execute(address,uint32,bytes,uint16[])": FunctionFragment;
    "executeClaim(address,uint32,bytes,uint16[])": FunctionFragment;
    "getPoolFee()": FunctionFragment;
    "getPoolTokenInput()": FunctionFragment;
    "input(address,uint32,uint16,uint16,uint8,address,uint32,uint32,tuple[],bytes)": FunctionFragment;
    "pause(uint8,bool)": FunctionFragment;
    "revoke(address,uint32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish, BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAddress",
    values: [string, BigNumberish, BytesLike, string, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "cname", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeClaim",
    values: [string, BigNumberish, BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokenInput",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "input",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pause",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cname", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPoolFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokenInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "EventTask(address,address,uint32,address,uint32,uint8,uint16,uint16,bytes)": EventFragment;
    "Receive(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EventTask"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Receive"): EventFragment;
}

export type EventTaskEvent = TypedEvent<
  [string, string, number, string, number, number, number, number, string] & {
    caller: string;
    clusterArea: string;
    clusterId: number;
    stateCounter: string;
    taskId: number;
    taskState: number;
    round: number;
    ioBranch: number;
    args: string;
  }
>;

export type ReceiveEvent = TypedEvent<
  [string, BigNumber] & { from: string; value: BigNumber }
>;

export class IEngine extends BaseContract {
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

  interface: IEngineInterface;

  functions: {
    claim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAddress(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      outAddress: string,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cname(overrides?: CallOverrides): Promise<[string]>;

    execute(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeClaim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPoolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPoolTokenInput(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    input(
      clusterArea: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      groupInputBranch: BigNumberish,
      stateCounter: string,
      taskId: BigNumberish,
      multiple: BigNumberish,
      inTokenList: {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[],
      args: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      channel: BigNumberish,
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      stateCounter: string,
      taskId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  claim(
    stateCounter: string,
    taskId: BigNumberish,
    args: BytesLike,
    roundList: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAddress(
    stateCounter: string,
    taskId: BigNumberish,
    args: BytesLike,
    outAddress: string,
    roundList: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cname(overrides?: CallOverrides): Promise<string>;

  execute(
    stateCounter: string,
    taskId: BigNumberish,
    args: BytesLike,
    roundList: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeClaim(
    stateCounter: string,
    taskId: BigNumberish,
    args: BytesLike,
    roundList: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPoolFee(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPoolTokenInput(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  input(
    clusterArea: string,
    clusterId: BigNumberish,
    ruleSlotIndexInput: BigNumberish,
    ruleSlotIndexOutput: BigNumberish,
    groupInputBranch: BigNumberish,
    stateCounter: string,
    taskId: BigNumberish,
    multiple: BigNumberish,
    inTokenList: {
      erc: BigNumberish;
      token: string;
      id: BigNumberish;
      amount: BigNumberish;
      attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
    }[],
    args: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    channel: BigNumberish,
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    stateCounter: string,
    taskId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    claim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimAddress(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      outAddress: string,
      roundList: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    cname(overrides?: CallOverrides): Promise<string>;

    execute(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeClaim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getPoolFee(overrides?: CallOverrides): Promise<string>;

    getPoolTokenInput(overrides?: CallOverrides): Promise<string>;

    input(
      clusterArea: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      groupInputBranch: BigNumberish,
      stateCounter: string,
      taskId: BigNumberish,
      multiple: BigNumberish,
      inTokenList: {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[],
      args: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(
      channel: BigNumberish,
      _paused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    revoke(
      stateCounter: string,
      taskId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "EventTask(address,address,uint32,address,uint32,uint8,uint16,uint16,bytes)"(
      caller?: string | null,
      clusterArea?: null,
      clusterId?: BigNumberish | null,
      stateCounter?: null,
      taskId?: null,
      taskState?: null,
      round?: null,
      ioBranch?: null,
      args?: null
    ): TypedEventFilter<
      [string, string, number, string, number, number, number, number, string],
      {
        caller: string;
        clusterArea: string;
        clusterId: number;
        stateCounter: string;
        taskId: number;
        taskState: number;
        round: number;
        ioBranch: number;
        args: string;
      }
    >;

    EventTask(
      caller?: string | null,
      clusterArea?: null,
      clusterId?: BigNumberish | null,
      stateCounter?: null,
      taskId?: null,
      taskState?: null,
      round?: null,
      ioBranch?: null,
      args?: null
    ): TypedEventFilter<
      [string, string, number, string, number, number, number, number, string],
      {
        caller: string;
        clusterArea: string;
        clusterId: number;
        stateCounter: string;
        taskId: number;
        taskState: number;
        round: number;
        ioBranch: number;
        args: string;
      }
    >;

    "Receive(address,uint256)"(
      from?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; value: BigNumber }
    >;

    Receive(
      from?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { from: string; value: BigNumber }
    >;
  };

  estimateGas: {
    claim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAddress(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      outAddress: string,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cname(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeClaim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPoolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPoolTokenInput(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    input(
      clusterArea: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      groupInputBranch: BigNumberish,
      stateCounter: string,
      taskId: BigNumberish,
      multiple: BigNumberish,
      inTokenList: {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[],
      args: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      channel: BigNumberish,
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      stateCounter: string,
      taskId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAddress(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      outAddress: string,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cname(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeClaim(
      stateCounter: string,
      taskId: BigNumberish,
      args: BytesLike,
      roundList: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPoolFee(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPoolTokenInput(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    input(
      clusterArea: string,
      clusterId: BigNumberish,
      ruleSlotIndexInput: BigNumberish,
      ruleSlotIndexOutput: BigNumberish,
      groupInputBranch: BigNumberish,
      stateCounter: string,
      taskId: BigNumberish,
      multiple: BigNumberish,
      inTokenList: {
        erc: BigNumberish;
        token: string;
        id: BigNumberish;
        amount: BigNumberish;
        attrInList: { attrId: BigNumberish; attrAmount: BigNumberish }[];
      }[],
      args: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      channel: BigNumberish,
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      stateCounter: string,
      taskId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
