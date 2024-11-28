/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Snippet, SnippetInterface } from "../Snippet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "stateCounter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "clusterArea_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "inBranch",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "inTokenSlotIndex",
            type: "uint32",
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
            internalType: "struct Token.Token",
            name: "inToken",
            type: "tuple",
          },
        ],
        internalType: "struct ISnippet.PreInputTokenParams",
        name: "preInputToken",
        type: "tuple",
      },
    ],
    name: "preInputToken",
    outputs: [
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
            name: "tokenId",
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
                internalType: "uint8",
                name: "attrOpt",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "attrType",
                type: "uint8",
              },
              {
                internalType: "int40",
                name: "attrAmount",
                type: "int40",
              },
              {
                internalType: "string",
                name: "attrText",
                type: "string",
              },
              {
                internalType: "uint32",
                name: "parentAttrId",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "attrState",
                type: "uint8",
              },
              {
                internalType: "bytes4",
                name: "attrFormula",
                type: "bytes4",
              },
            ],
            internalType: "struct Attribute.AttributeOpt[]",
            name: "attributeOptList",
            type: "tuple[]",
          },
        ],
        internalType: "struct ISnippet.TokenSnippet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "inBranch",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "inRound",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
        ],
        internalType: "struct ISnippet.ExecuteDelayParams",
        name: "executeDelay",
        type: "tuple",
      },
    ],
    name: "processExecuteDelayTime",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "inBranch",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "inRound",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "ruleDurationType",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "ruleDelayTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "ruleDelayBlockNumber",
            type: "uint32",
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
        ],
        internalType: "struct ISnippet.InitDelayParams",
        name: "initDelay",
        type: "tuple",
      },
    ],
    name: "processInitDelayTime",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "outBranch",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "inTokenSlotIndex",
            type: "uint32",
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
            internalType: "struct Token.Token",
            name: "inToken",
            type: "tuple",
          },
        ],
        internalType: "struct ISnippet.InputTokenParams",
        name: "inputToken",
        type: "tuple",
      },
    ],
    name: "processInputToken",
    outputs: [
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
            name: "tokenId",
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
                internalType: "uint8",
                name: "attrOpt",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "attrType",
                type: "uint8",
              },
              {
                internalType: "int40",
                name: "attrAmount",
                type: "int40",
              },
              {
                internalType: "string",
                name: "attrText",
                type: "string",
              },
              {
                internalType: "uint32",
                name: "parentAttrId",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "attrState",
                type: "uint8",
              },
              {
                internalType: "bytes4",
                name: "attrFormula",
                type: "bytes4",
              },
            ],
            internalType: "struct Attribute.AttributeOpt[]",
            name: "attributeOptList",
            type: "tuple[]",
          },
        ],
        internalType: "struct ISnippet.TokenSnippet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "outBranch",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "random",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "tokenSlotIndex",
            type: "uint8",
          },
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
        ],
        internalType: "struct ISnippet.TokenSlotDelayParams",
        name: "tokenSlotDelay",
        type: "tuple",
      },
    ],
    name: "processInputTokenSlotDelayTime",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "outBranch",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "random",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "outTokenSlotIndex",
            type: "uint32",
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
            internalType: "struct Token.Token",
            name: "outToken",
            type: "tuple",
          },
        ],
        internalType: "struct ISnippet.OutputTokenParams",
        name: "outputToken",
        type: "tuple",
      },
    ],
    name: "processOutputToken",
    outputs: [
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
            name: "tokenId",
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
                internalType: "uint8",
                name: "attrOpt",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "attrType",
                type: "uint8",
              },
              {
                internalType: "int40",
                name: "attrAmount",
                type: "int40",
              },
              {
                internalType: "string",
                name: "attrText",
                type: "string",
              },
              {
                internalType: "uint32",
                name: "parentAttrId",
                type: "uint32",
              },
              {
                internalType: "uint8",
                name: "attrState",
                type: "uint8",
              },
              {
                internalType: "bytes4",
                name: "attrFormula",
                type: "bytes4",
              },
            ],
            internalType: "struct Attribute.AttributeOpt[]",
            name: "attributeOptList",
            type: "tuple[]",
          },
        ],
        internalType: "struct ISnippet.TokenSnippet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
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
            internalType: "uint32",
            name: "clusterId",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "outBranch",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "taskId",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "random",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "tokenSlotIndex",
            type: "uint8",
          },
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
        ],
        internalType: "struct ISnippet.TokenSlotDelayParams",
        name: "tokenSlotDelay",
        type: "tuple",
      },
    ],
    name: "processOutputTokenSlotDelayTime",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610e9a380380610e9a83398101604081905261002f9161007c565b600180546001600160a01b039384166001600160a01b031991821617909155600080549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610ddc806100be6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c806324d56ffe146100725780635de70a0d1461009b5780636557196a146100c1578063814645dc146100d45780638cb665ff146100e75780639090fa45146100fa578063b6ee96de1461010d575b600080fd5b61008561008036600461063e565b610120565b6040516100929190610756565b60405180910390f35b6100ae6100a9366004610880565b61017f565b60405160039190910b8152602001610092565b6100ae6100cf3660046109c7565b6101b5565b6100ae6100e2366004610880565b6101e3565b6100856100f5366004610b8b565b610211565b610085610108366004610b8b565b610297565b6100ae61011b366004610bc7565b6102e5565b6101286103ba565b6101716040518060400160405280601f81526020017f2d2d2d2d2d2d2d2d2d2d2d2d2070726f636573734f7574707574546f6b656e00815250836020015163ffffffff1661030f565b6101796103ba565b92915050565b60006101ad6040518060600160405280602b8152602001610cc2602b9139836020015163ffffffff1661030f565b506000919050565b60006101ad604051806060016040528060218152602001610d3660219139836020015163ffffffff1661030f565b60006101ad6040518060600160405280602c8152602001610d7b602c9139836020015163ffffffff1661030f565b6102196103ba565b610243604051806060016040528060248152602001610ced602491398360a0015160200151610358565b61026d604051806060016040528060218152602001610ca1602191398360a001516040015161030f565b610171604051806060016040528060258152602001610d11602591398360a001516060015161030f565b61029f6103ba565b6101716040518060400160405280601a81526020017916969696969696969696969690383932a4b7383aba2a37b5b2b760311b815250836020015163ffffffff1661030f565b60006101ad604051806060016040528060248152602001610d5760249139836020015163ffffffff165b6103548282604051602401610325929190610c54565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610399565b5050565b610354828260405160240161036e929190610c76565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6040518060a00160405280600060ff16815260200160006001600160a01b031681526020016000815260200160008152602001606081525090565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171561042d5761042d6103f5565b60405290565b604080519081016001600160401b038111828210171561042d5761042d6103f5565b60405160e081016001600160401b038111828210171561042d5761042d6103f5565b60405161014081016001600160401b038111828210171561042d5761042d6103f5565b604051601f8201601f191681016001600160401b03811182821017156104c2576104c26103f5565b604052919050565b80356001600160a01b03811681146104e157600080fd5b919050565b803563ffffffff811681146104e157600080fd5b803560ff811681146104e157600080fd5b60006001600160401b03821115610524576105246103f5565b5060051b60200190565b600060a0828403121561054057600080fd5b61054861040b565b9050610553826104fa565b815260206105628184016104ca565b81830152604080840135818401526060840135606084015260808401356001600160401b0381111561059357600080fd5b8401601f810186136105a457600080fd5b80356105b76105b28261050b565b61049a565b81815260069190911b820184019084810190888311156105d657600080fd5b928501925b8284101561062d5784848a0312156105f35760008081fd5b6105fb610433565b610604856104e6565b8152868501358060040b811461061a5760008081fd5b81880152825292840192908501906105db565b608087015250939695505050505050565b60006020828403121561065057600080fd5b81356001600160401b038082111561066757600080fd5b9083019060e0828603121561067b57600080fd5b610683610455565b61068c836104ca565b815261069a602084016104e6565b60208201526106ab604084016104fa565b60408201526106bc606084016104e6565b6060820152608083013560808201526106d760a084016104e6565b60a082015260c0830135828111156106ee57600080fd5b6106fa8782860161052e565b60c08301525095945050505050565b6000815180845260005b8181101561072f57602081850181015186830182015201610713565b81811115610741576000602083870101525b50601f01601f19169290920160200192915050565b6000602080835260c080840160ff808751168487015283870151604060018060a01b03821681890152808901519150606082818a0152808a01519250608083818b0152808b0151935060a080818c015286855180895260e09850888d019150888160051b8e01018b8801975060005b8281101561086d578e820360df190184528851805163ffffffff1683528d8101518b168e8401528881015160ff16898401528781015160040b88840152868101516101008885018190529061081c82860182610709565b915050868201516108348886018263ffffffff169052565b508d8201516108478f86018260ff169052565b50908c01516001600160e01b031916928c0192909252978c0197928c01926001016107c5565b509e9d5050505050505050505050505050565b600061010080838503121561089457600080fd5b604051908101906001600160401b03821181831017156108b6576108b66103f5565b816040526108c3846104ca565b81526108d1602085016104e6565b60208201526108e2604085016104fa565b60408201526108f3606085016104e6565b60608201526080840135608082015261090e60a085016104fa565b60a082015261091f60c085016104fa565b60c082015261093060e085016104ca565b60e0820152949350505050565b600082601f83011261094e57600080fd5b8135602061095e6105b28361050b565b82815260059290921b8401810191818101908684111561097d57600080fd5b8286015b848110156109bc5780356001600160401b038111156109a05760008081fd5b6109ae8986838b010161052e565b845250918301918301610981565b509695505050505050565b6000602082840312156109d957600080fd5b81356001600160401b03808211156109f057600080fd5b908301906101408286031215610a0557600080fd5b610a0d610477565b610a16836104ca565b8152610a24602084016104e6565b6020820152610a35604084016104fa565b6040820152610a46606084016104fa565b6060820152610a57608084016104fa565b6080820152610a6860a084016104e6565b60a0820152610a7960c084016104e6565b60c0820152610a8a60e084016104e6565b60e0820152610100610a9d8185016104e6565b908201526101208381013583811115610ab557600080fd5b610ac18882870161093d565b918301919091525095945050505050565b600060c08284031215610ae457600080fd5b60405160c081016001600160401b038282108183111715610b0757610b076103f5565b81604052829350610b17856104ca565b8352610b25602086016104e6565b6020840152610b36604086016104fa565b6040840152610b47606086016104e6565b6060840152610b58608086016104e6565b608084015260a0850135915080821115610b7157600080fd5b50610b7e8582860161052e565b60a0830152505092915050565b600060208284031215610b9d57600080fd5b81356001600160401b03811115610bb357600080fd5b610bbf84828501610ad2565b949350505050565b600060a08284031215610bd957600080fd5b60405160a081018181106001600160401b0382111715610bfb57610bfb6103f5565b604052610c07836104ca565b8152610c15602084016104e6565b6020820152610c26604084016104fa565b6040820152610c37606084016104fa565b6060820152610c48608084016104e6565b60808201529392505050565b604081526000610c676040830185610709565b90508260208301529392505050565b604081526000610c896040830185610709565b905060018060a01b0383166020830152939250505056fe2d2d2d2d2d2d2d2d2d2d2d2d2070726f63657373496e707574546f6b656e2069642d2d2d2d2d2d2d2d2d2d2d2d2070726f63657373496e707574546f6b656e536c6f7444656c617954696d652d2d2d2d2d2d2d2d2d2d2d2d2070726f63657373496e707574546f6b656e20746f6b656e2d2d2d2d2d2d2d2d2d2d2d2d2070726f63657373496e707574546f6b656e20616d6f756e742d2d2d2d2d2d2d2d2d2d2d2d2070726f63657373496e697444656c617954696d652d2d2d2d2d2d2d2d2d2d2d2d2070726f636573734578656375746544656c617954696d652d2d2d2d2d2d2d2d2d2d2d2d2070726f636573734f7574707574546f6b656e536c6f7444656c617954696d65a2646970667358221220f2de4a0a372ea1c2e224c012b8c062c016c0050c446b7a649ac68590228c33db64736f6c63430008080033";

export class Snippet__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    stateCounter_: string,
    clusterArea_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Snippet> {
    return super.deploy(
      stateCounter_,
      clusterArea_,
      overrides || {}
    ) as Promise<Snippet>;
  }
  getDeployTransaction(
    stateCounter_: string,
    clusterArea_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      stateCounter_,
      clusterArea_,
      overrides || {}
    );
  }
  attach(address: string): Snippet {
    return super.attach(address) as Snippet;
  }
  connect(signer: Signer): Snippet__factory {
    return super.connect(signer) as Snippet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnippetInterface {
    return new utils.Interface(_abi) as SnippetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Snippet {
    return new Contract(address, _abi, signerOrProvider) as Snippet;
  }
}