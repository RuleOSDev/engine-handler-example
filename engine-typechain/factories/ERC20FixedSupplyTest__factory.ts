/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20FixedSupplyTest,
  ERC20FixedSupplyTestInterface,
} from "../ERC20FixedSupplyTest";

const _abi = [
  {
    inputs: [
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
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a1d38038062001a1d833981016040819052620000349162000459565b8351849084906200004d906003906020850190620002e6565b50805162000063906004906020840190620002e6565b506200007591506000905033620000b7565b620000a17f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000b7565b620000ad8183620000c7565b5050505062000552565b620000c382826200018d565b5050565b6001600160a01b038216620001225760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001369190620004ee565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b620001a48282620001d060201b620007271760201c565b6000828152600660209081526040909120620001cb918390620007ad62000274821b17901c565b505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620000c35760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620002303390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200028b836001600160a01b03841662000294565b90505b92915050565b6000818152600183016020526040812054620002dd575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200028e565b5060006200028e565b828054620002f49062000515565b90600052602060002090601f01602090048101928262000318576000855562000363565b82601f106200033357805160ff191683800117855562000363565b8280016001018555821562000363579182015b828111156200036357825182559160200191906001019062000346565b506200037192915062000375565b5090565b5b8082111562000371576000815560010162000376565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620003b457600080fd5b81516001600160401b0380821115620003d157620003d16200038c565b604051601f8301601f19908116603f01168101908282118183101715620003fc57620003fc6200038c565b816040528381526020925086838588010111156200041957600080fd5b600091505b838210156200043d57858201830151818301840152908201906200041e565b838211156200044f5760008385830101525b9695505050505050565b600080600080608085870312156200047057600080fd5b84516001600160401b03808211156200048857600080fd5b6200049688838901620003a2565b95506020870151915080821115620004ad57600080fd5b50620004bc87828801620003a2565b60408701516060880151919550935090506001600160a01b0381168114620004e357600080fd5b939692955090935050565b600082198211156200051057634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200052a57607f821691505b602082108114156200054c57634e487b7160e01b600052602260045260246000fd5b50919050565b6114bb80620005626000396000f3fe608060405234801561001057600080fd5b50600436106101385760003560e01c806370a08231116100b357806370a082311461024557806379cc67901461026e5780639010d07c1461028157806391d14854146102ac57806395d89b41146102bf578063a217fddf146102c7578063a457c2d7146102cf578063a9059cbb146102e2578063ca15c873146102f5578063d539139314610308578063d547741f1461032f578063dd62ed3e1461034257600080fd5b806301ffc9a71461013d57806306fdde0314610165578063095ea7b31461017a57806318160ddd1461018d57806323b872dd1461019f578063248a9ca3146101b25780632f2ff15d146101d5578063313ce567146101ea57806336568abe146101f9578063395093511461020c57806340c10f191461021f57806342966c6814610232575b600080fd5b61015061014b366004611147565b610355565b60405190151581526020015b60405180910390f35b61016d610380565b60405161015c919061119d565b6101506101883660046111ec565b610412565b6002545b60405190815260200161015c565b6101506101ad366004611216565b61042a565b6101916101c0366004611252565b60009081526005602052604090206001015490565b6101e86101e336600461126b565b61044e565b005b6040516012815260200161015c565b6101e861020736600461126b565b610478565b61015061021a3660046111ec565b6104fb565b6101e861022d3660046111ec565b61051d565b6101e8610240366004611252565b6105bc565b610191610253366004611297565b6001600160a01b031660009081526020819052604090205490565b6101e861027c3660046111ec565b6105c9565b61029461028f3660046112b2565b6105de565b6040516001600160a01b03909116815260200161015c565b6101506102ba36600461126b565b6105fd565b61016d610628565b610191600081565b6101506102dd3660046111ec565b610637565b6101506102f03660046111ec565b6106b2565b610191610303366004611252565b6106c0565b6101917f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101e861033d36600461126b565b6106d7565b6101916103503660046112d4565b6106fc565b60006001600160e01b03198216635a05180f60e01b148061037a575061037a826107c2565b92915050565b60606003805461038f906112fe565b80601f01602080910402602001604051908101604052809291908181526020018280546103bb906112fe565b80156104085780601f106103dd57610100808354040283529160200191610408565b820191906000526020600020905b8154815290600101906020018083116103eb57829003601f168201915b5050505050905090565b6000336104208185856107f7565b5060019392505050565b60003361043885828561091b565b610443858585610995565b506001949350505050565b60008281526005602052604090206001015461046981610b27565b6104738383610b31565b505050565b6001600160a01b03811633146104ed5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104f78282610b53565b5050565b60003361042081858561050e83836106fc565b610518919061134f565b6107f7565b6105477f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336105fd565b6105b25760405162461bcd60e51b815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d7573742068616044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b60648201526084016104e4565b6104f78282610b75565b6105c63382610c22565b50565b6105d482338361091b565b6104f78282610c22565b60008281526006602052604081206105f69083610d42565b9392505050565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461038f906112fe565b6000338161064582866106fc565b9050838110156106a55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104e4565b61044382868684036107f7565b600033610420818585610995565b600081815260066020526040812061037a90610d4e565b6000828152600560205260409020600101546106f281610b27565b6104738383610b53565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61073182826105fd565b6104f75760008281526005602090815260408083206001600160a01b03851684529091529020805460ff191660011790556107693390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006105f6836001600160a01b038416610d58565b60006001600160e01b03198216637965db0b60e01b148061037a57506301ffc9a760e01b6001600160e01b031983161461037a565b6001600160a01b0383166108595760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104e4565b6001600160a01b0382166108ba5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104e4565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061092784846106fc565b9050600019811461098f57818110156109825760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104e4565b61098f84848484036107f7565b50505050565b6001600160a01b0383166109f95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104e4565b6001600160a01b038216610a5b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104e4565b6001600160a01b03831660009081526020819052604090205481811015610ad35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104e4565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020611466833981519152910160405180910390a361098f565b6105c68133610da7565b610b3b8282610727565b600082815260066020526040902061047390826107ad565b610b5d8282610e00565b60008281526006602052604090206104739082610e67565b6001600160a01b038216610bcb5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104e4565b8060026000828254610bdd919061134f565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020611466833981519152910160405180910390a35050565b6001600160a01b038216610c825760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104e4565b6001600160a01b03821660009081526020819052604090205481811015610cf65760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104e4565b6001600160a01b038316600081815260208181526040808320868603905560028054879003905551858152919291600080516020611466833981519152910160405180910390a3505050565b60006105f68383610e7c565b600061037a825490565b6000818152600183016020526040812054610d9f5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561037a565b50600061037a565b610db182826105fd565b6104f757610dbe81610ea6565b610dc9836020610eb8565b604051602001610dda929190611367565b60408051601f198184030181529082905262461bcd60e51b82526104e49160040161119d565b610e0a82826105fd565b156104f75760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006105f6836001600160a01b038416611054565b6000826000018281548110610e9357610e936113d6565b9060005260206000200154905092915050565b606061037a6001600160a01b03831660145b60606000610ec78360026113ec565b610ed290600261134f565b67ffffffffffffffff811115610eea57610eea61140b565b6040519080825280601f01601f191660200182016040528015610f14576020820181803683370190505b509050600360fc1b81600081518110610f2f57610f2f6113d6565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f5e57610f5e6113d6565b60200101906001600160f81b031916908160001a9053506000610f828460026113ec565b610f8d90600161134f565b90505b6001811115611005576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610fc157610fc16113d6565b1a60f81b828281518110610fd757610fd76113d6565b60200101906001600160f81b031916908160001a90535060049490941c93610ffe81611421565b9050610f90565b5083156105f65760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104e4565b6000818152600183016020526040812054801561113d576000611078600183611438565b855490915060009061108c90600190611438565b90508181146110f15760008660000182815481106110ac576110ac6113d6565b90600052602060002001549050808760000184815481106110cf576110cf6113d6565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806111025761110261144f565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061037a565b600091505061037a565b60006020828403121561115957600080fd5b81356001600160e01b0319811681146105f657600080fd5b60005b8381101561118c578181015183820152602001611174565b8381111561098f5750506000910152565b60208152600082518060208401526111bc816040850160208701611171565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146111e757600080fd5b919050565b600080604083850312156111ff57600080fd5b611208836111d0565b946020939093013593505050565b60008060006060848603121561122b57600080fd5b611234846111d0565b9250611242602085016111d0565b9150604084013590509250925092565b60006020828403121561126457600080fd5b5035919050565b6000806040838503121561127e57600080fd5b8235915061128e602084016111d0565b90509250929050565b6000602082840312156112a957600080fd5b6105f6826111d0565b600080604083850312156112c557600080fd5b50508035926020909101359150565b600080604083850312156112e757600080fd5b6112f0836111d0565b915061128e602084016111d0565b600181811c9082168061131257607f821691505b6020821081141561133357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561136257611362611339565b500190565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611399816017850160208801611171565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516113ca816028840160208801611171565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b600081600019048311821515161561140657611406611339565b500290565b634e487b7160e01b600052604160045260246000fd5b60008161143057611430611339565b506000190190565b60008282101561144a5761144a611339565b500390565b634e487b7160e01b600052603160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208ff64d58d595c13890c3175ae1be097b6a15b70b144e7c6c1ed283262b28158264736f6c63430008080033";

export class ERC20FixedSupplyTest__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20FixedSupplyTest> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC20FixedSupplyTest>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  attach(address: string): ERC20FixedSupplyTest {
    return super.attach(address) as ERC20FixedSupplyTest;
  }
  connect(signer: Signer): ERC20FixedSupplyTest__factory {
    return super.connect(signer) as ERC20FixedSupplyTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FixedSupplyTestInterface {
    return new utils.Interface(_abi) as ERC20FixedSupplyTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FixedSupplyTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20FixedSupplyTest;
  }
}
