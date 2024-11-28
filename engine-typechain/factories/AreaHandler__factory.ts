/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AreaHandler, AreaHandlerInterface } from "../AreaHandler";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "engine",
            type: "address",
          },
          {
            internalType: "address",
            name: "clusterArea",
            type: "address",
          },
          {
            internalType: "address",
            name: "stateCounter",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "io",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "round",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "branch",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "tokenSlotIndex",
            type: "uint8",
          },
        ],
        internalType: "struct IHandler.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "claimIOAddressBranchToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cname",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "engine",
            type: "address",
          },
          {
            internalType: "address",
            name: "clusterArea",
            type: "address",
          },
          {
            internalType: "address",
            name: "stateCounter",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "io",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "round",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "branch",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "tokenSlotIndex",
            type: "uint8",
          },
        ],
        internalType: "struct IHandler.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "getClaimIOAddressBranchToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "areaNameList",
        type: "string[]",
      },
    ],
    name: "getEngineAreaList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getIOBranches",
    outputs: [
      {
        components: [
          {
            internalType: "uint8[]",
            name: "inBranch",
            type: "uint8[]",
          },
          {
            internalType: "uint8[]",
            name: "outBranch",
            type: "uint8[]",
          },
        ],
        internalType: "struct IHandler.IOBranch[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "engine",
        type: "address",
      },
      {
        internalType: "address",
        name: "clusterArea",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "stateCounter",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "taskId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "round",
        type: "uint16",
      },
    ],
    name: "getInputAddressRound",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "engine",
        type: "address",
      },
      {
        internalType: "address",
        name: "clusterArea",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "stateCounter",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "taskId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "round",
        type: "uint16",
      },
    ],
    name: "getOutputAddressRound",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "ruleSlotIndex",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "branch",
        type: "uint8",
      },
    ],
    name: "getRuleGroupSlotArgs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "engine",
            type: "address",
          },
          {
            internalType: "address",
            name: "clusterArea",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "ruleSlotIndexInput",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "ruleSlotIndexOutput",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "branch",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "stateCounter",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "cmd",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Handler.StateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "getState",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "engine",
        type: "address",
      },
      {
        internalType: "address",
        name: "outAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "clusterArea",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "stateCounter",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "taskId",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
      {
        internalType: "uint16",
        name: "round",
        type: "uint16",
      },
    ],
    name: "getTokenBranch",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "valueList",
            type: "uint256[]",
          },
        ],
        internalType: "struct TokenHandler.TokenBranch",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "address",
            name: "stateCounter",
            type: "address",
          },
          {
            internalType: "address",
            name: "poolFee",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "caller",
                type: "address",
              },
              {
                internalType: "address",
                name: "clusterArea",
                type: "address",
              },
              {
                internalType: "address",
                name: "lastHandler",
                type: "address",
              },
              {
                internalType: "address",
                name: "snippet",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "valueTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint32",
                name: "taskId",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "parentTaskId",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "clusterId",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "state",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "uint8",
                    name: "erc",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    components: [
                      {
                        internalType: "uint32",
                        name: "attrId",
                        type: "uint32",
                      },
                      {
                        internalType: "int40",
                        name: "attrAmount",
                        type: "int40",
                      },
                    ],
                    internalType: "struct Attribute.AttributeIn[]",
                    name: "attrInList",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct Token.Token[]",
                name: "inTokenList",
                type: "tuple[]",
              },
              {
                internalType: "bytes",
                name: "args",
                type: "bytes",
              },
            ],
            internalType: "struct Task.Task",
            name: "task",
            type: "tuple",
          },
          {
            internalType: "uint8",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Handler.Process",
        name: "param",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "handler",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "code",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "msg",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Handler.Result",
        name: "preResult",
        type: "tuple",
      },
    ],
    name: "process",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "handler",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "code",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "msg",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "args",
            type: "bytes",
          },
        ],
        internalType: "struct Handler.Result",
        name: "res",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint8",
                        name: "erc",
                        type: "uint8",
                      },
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "uint256[]",
                        name: "valueList",
                        type: "uint256[]",
                      },
                    ],
                    internalType: "struct Token.TokenTemplate",
                    name: "tokenTemplate",
                    type: "tuple",
                  },
                  {
                    internalType: "uint8",
                    name: "rule",
                    type: "uint8",
                  },
                  {
                    internalType: "address[]",
                    name: "ioAddressList",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "valueList",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct Rule.TokenSlot[]",
                name: "tokenSlotList",
                type: "tuple[]",
              },
              {
                internalType: "uint8",
                name: "branch",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "poolToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "handlerList",
                type: "address[]",
              },
              {
                internalType: "bytes[]",
                name: "argsList",
                type: "bytes[]",
              },
            ],
            internalType: "struct Rule.GroupSlot[]",
            name: "groupSlotList",
            type: "tuple[]",
          },
          {
            internalType: "uint8[]",
            name: "ruleSlotBound",
            type: "uint8[]",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "ruleSlotIndexInput",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "ruleSlotIndexOutput",
                type: "uint16",
              },
              {
                internalType: "uint8",
                name: "state",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "totalCount",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "durationType",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "delayTimestamp",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "delayBlockNumber",
                type: "uint32",
              },
              {
                internalType: "uint64",
                name: "handlerCount",
                type: "uint64",
              },
              {
                internalType: "address[]",
                name: "handlerList",
                type: "address[]",
              },
              {
                internalType: "bytes[]",
                name: "handlerArgsList",
                type: "bytes[]",
              },
              {
                internalType: "address",
                name: "snippet",
                type: "address",
              },
            ],
            internalType: "struct Rule.Rule[]",
            name: "ruleList",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "attrId",
                type: "uint32",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
              {
                internalType: "uint8",
                name: "level",
                type: "uint8",
              },
            ],
            internalType: "struct Attribute.Attribute[]",
            name: "attrList",
            type: "tuple[]",
          },
          {
            internalType: "uint8[]",
            name: "attrStateList",
            type: "uint8[]",
          },
          {
            internalType: "address[]",
            name: "deployerList",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "adminList",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "delayTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "delayBlockNumber",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        internalType: "struct Cluster.Cluster",
        name: "cluster",
        type: "tuple",
      },
    ],
    name: "regRule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "ruleSlotIndex",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "branch",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "regRuleGroupSlotArgs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "engineAreaList",
        type: "address[]",
      },
    ],
    name: "setEngineAreaList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "clusterId",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "ruleSlotIndexInput",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "ruleSlotIndexOutput",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "cmd",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "args",
        type: "bytes",
      },
    ],
    name: "updateArgs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class AreaHandler__factory {
  static readonly abi = _abi;
  static createInterface(): AreaHandlerInterface {
    return new utils.Interface(_abi) as AreaHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AreaHandler {
    return new Contract(address, _abi, signerOrProvider) as AreaHandler;
  }
}