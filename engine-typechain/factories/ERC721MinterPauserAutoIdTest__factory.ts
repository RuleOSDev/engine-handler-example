/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721MinterPauserAutoIdTest,
  ERC721MinterPauserAutoIdTestInterface,
} from "../ERC721MinterPauserAutoIdTest";

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
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    inputs: [],
    name: "PAUSER_ROLE",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620029ad380380620029ad8339810160408190526200003491620003cc565b8251839083906200004d90600290602085019062000259565b5080516200006390600390602084019062000259565b5050600c805460ff191690555080516200008590600e90602084019062000259565b5062000093600033620000f4565b620000bf7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000f4565b620000eb7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000f4565b5050506200049a565b62000100828262000104565b5050565b6200011b82826200014760201b62000c371760201c565b60008281526001602090815260409091206200014291839062000cbb620001e7821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000100576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001a33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001fe836001600160a01b03841662000207565b90505b92915050565b6000818152600183016020526040812054620002505750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000201565b50600062000201565b82805462000267906200045d565b90600052602060002090601f0160209004810192826200028b5760008555620002d6565b82601f10620002a657805160ff1916838001178555620002d6565b82800160010185558215620002d6579182015b82811115620002d6578251825591602001919060010190620002b9565b50620002e4929150620002e8565b5090565b5b80821115620002e45760008155600101620002e9565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200032757600080fd5b81516001600160401b0380821115620003445762000344620002ff565b604051601f8301601f19908116603f011681019082821181831017156200036f576200036f620002ff565b816040528381526020925086838588010111156200038c57600080fd5b600091505b83821015620003b0578582018301518183018401529082019062000391565b83821115620003c25760008385830101525b9695505050505050565b600080600060608486031215620003e257600080fd5b83516001600160401b0380821115620003fa57600080fd5b620004088783880162000315565b945060208601519150808211156200041f57600080fd5b6200042d8783880162000315565b935060408601519150808211156200044457600080fd5b50620004538682870162000315565b9150509250925092565b600181811c908216806200047257607f821691505b602082108114156200049457634e487b7160e01b600052602260045260246000fd5b50919050565b61250380620004aa6000396000f3fe608060405234801561001057600080fd5b50600436106101b05760003560e01c80636352211e116100ef578063a22cb46511610092578063a22cb4651461037e578063b88d4fde14610391578063c87b56dd146103a4578063ca15c873146103b7578063d5391393146103ca578063d547741f146103f1578063e63ab1e914610404578063e985e9c51461041957600080fd5b80636352211e146103075780636a6278421461031a57806370a082311461032d5780638456cb59146103405780639010d07c1461034857806391d148541461035b57806395d89b411461036e578063a217fddf1461037657600080fd5b80632f745c59116101575780632f745c591461028257806336568abe14610295578063379607f5146102a85780633f4ba83a146102bb57806342842e0e146102c357806342966c68146102d65780634f6ccce7146102e95780635c975abb146102fc57600080fd5b806301ffc9a7146101b557806306fdde03146101dd578063081812fc146101f2578063095ea7b31461021257806318160ddd1461022757806323b872dd14610239578063248a9ca31461024c5780632f2ff15d1461026f575b600080fd5b6101c86101c3366004611e4e565b61042c565b60405190151581526020015b60405180910390f35b6101e561043d565b6040516101d49190611ec3565b610205610200366004611ed6565b6104cf565b6040516101d49190611eef565b610225610220366004611f1f565b6104f6565b005b600a545b6040519081526020016101d4565b610225610247366004611f49565b610611565b61022b61025a366004611ed6565b60009081526020819052604090206001015490565b61022561027d366004611f85565b610643565b61022b610290366004611f1f565b610668565b6102256102a3366004611f85565b6106fe565b6102256102b6366004611ed6565b61077c565b610225610789565b6102256102d1366004611f49565b61080d565b6102256102e4366004611ed6565b610828565b61022b6102f7366004611ed6565b610856565b600c5460ff166101c8565b610205610315366004611ed6565b6108e9565b610225610328366004611fb1565b61091d565b61022b61033b366004611fb1565b6109c7565b610225610a4d565b610205610356366004611fcc565b610acd565b6101c8610369366004611f85565b610aec565b6101e5610b15565b61022b600081565b61022561038c366004611fee565b610b24565b61022561039f366004612040565b610b2f565b6101e56103b2366004611ed6565b610b67565b61022b6103c5366004611ed6565b610bcd565b61022b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102256103ff366004611f85565b610be4565b61022b60008051602061246e83398151915281565b6101c861042736600461211c565b610c09565b600061043782610cd0565b92915050565b60606002805461044c90612146565b80601f016020809104026020016040519081016040528092919081815260200182805461047890612146565b80156104c55780601f1061049a576101008083540402835291602001916104c5565b820191906000526020600020905b8154815290600101906020018083116104a857829003601f168201915b5050505050905090565b60006104da82610cf5565b506000908152600660205260409020546001600160a01b031690565b6000610501826108e9565b9050806001600160a01b0316836001600160a01b031614156105745760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061059057506105908133610c09565b6106025760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161056b565b61060c8383610d1a565b505050565b61061c335b82610d88565b6106385760405162461bcd60e51b815260040161056b90612181565b61060c838383610de7565b60008281526020819052604090206001015461065e81610f46565b61060c8383610f50565b6000610673836109c7565b82106106d55760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161056b565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6001600160a01b038116331461076e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161056b565b6107788282610f72565b5050565b6107863382610f94565b50565b6107a160008051602061246e83398151915233610aec565b610803576040805162461bcd60e51b81526020600482015260248101919091526000805160206124ae83398151915260448201527f6d75737420686176652070617573657220726f6c6520746f20756e7061757365606482015260840161056b565b61080b610fae565b565b61060c83838360405180602001604052806000815250610b2f565b61083133610616565b61084d5760405162461bcd60e51b815260040161056b90612181565b61078681610ffa565b6000610861600a5490565b82106108c45760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161056b565b600a82815481106108d7576108d76121ce565b90600052602060002001549050919050565b6000806108f58361108b565b90506001600160a01b0381166104375760405162461bcd60e51b815260040161056b906121e4565b6109477f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610aec565b6109a75760405162461bcd60e51b815260206004820152603d60248201526000805160206124ae83398151915260448201527f6d7573742068617665206d696e74657220726f6c6520746f206d696e74000000606482015260840161056b565b6109b9816109b4600d5490565b6110a6565b610786600d80546001019055565b60006001600160a01b038216610a315760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161056b565b506001600160a01b031660009081526005602052604090205490565b610a6560008051602061246e83398151915233610aec565b610ac55760405162461bcd60e51b815260206004820152603e60248201526000805160206124ae83398151915260448201527f6d75737420686176652070617573657220726f6c6520746f2070617573650000606482015260840161056b565b61080b6111af565b6000828152600160205260408120610ae590836111ec565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60606003805461044c90612146565b6107783383836111f8565b610b393383610d88565b610b555760405162461bcd60e51b815260040161056b90612181565b610b61848484846112c3565b50505050565b6060610b7282610cf5565b6000610b7c6112f6565b90506000815111610b9c5760405180602001604052806000815250610ae5565b80610ba684611305565b604051602001610bb7929190612216565b6040516020818303038152906040529392505050565b6000818152600160205260408120610437906113a2565b600082815260208190526040902060010154610bff81610f46565b61060c8383610f72565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610c418282610aec565b610778576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610c773390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610ae5836001600160a01b0384166113ac565b60006001600160e01b0319821663780e9d6360e01b14806104375750610437826113fb565b610cfe8161143b565b6107865760405162461bcd60e51b815260040161056b906121e4565b600081815260066020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d4f826108e9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d94836108e9565b9050806001600160a01b0316846001600160a01b03161480610dbb5750610dbb8185610c09565b80610ddf5750836001600160a01b0316610dd4846104cf565b6001600160a01b0316145b949350505050565b826001600160a01b0316610dfa826108e9565b6001600160a01b031614610e205760405162461bcd60e51b815260040161056b90612245565b6001600160a01b038216610e825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161056b565b610e8f8383836001611458565b826001600160a01b0316610ea2826108e9565b6001600160a01b031614610ec85760405162461bcd60e51b815260040161056b90612245565b600081815260066020908152604080832080546001600160a01b03199081169091556001600160a01b03878116808652600585528386208054600019019055908716808652838620805460010190558686526004909452828520805490921684179091559051849360008051602061248e83398151915291a4505050565b6107868133611464565b610f5a8282610c37565b600082815260016020526040902061060c9082610cbb565b610f7c82826114bd565b600082815260016020526040902061060c9082611522565b610778828260405180602001604052806000815250611537565b610fb661156a565b600c805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610ff09190611eef565b60405180910390a1565b6000611005826108e9565b9050611015816000846001611458565b61101e826108e9565b600083815260066020908152604080832080546001600160a01b03199081169091556001600160a01b03851680855260058452828520805460001901905587855260049093528184208054909116905551929350849260008051602061248e833981519152908390a45050565b6000908152600460205260409020546001600160a01b031690565b6001600160a01b0382166110fc5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161056b565b6111058161143b565b156111225760405162461bcd60e51b815260040161056b9061228a565b611130600083836001611458565b6111398161143b565b156111565760405162461bcd60e51b815260040161056b9061228a565b6001600160a01b038216600081815260056020908152604080832080546001019055848352600490915280822080546001600160a01b03191684179055518392919060008051602061248e833981519152908290a45050565b6111b76115b3565b600c805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610fe33390565b6000610ae583836115f9565b816001600160a01b0316836001600160a01b031614156112565760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161056b565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6112ce848484610de7565b6112da84848484611623565b610b615760405162461bcd60e51b815260040161056b906122c1565b6060600e805461044c90612146565b6060600061131283611730565b600101905060008167ffffffffffffffff8111156113325761133261202a565b6040519080825280601f01601f19166020018201604052801561135c576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846113955761139a565b611366565b509392505050565b6000610437825490565b60008181526001830160205260408120546113f357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610437565b506000610437565b60006001600160e01b031982166380ac58cd60e01b148061142c57506001600160e01b03198216635b5e139f60e01b145b80610437575061043782611806565b6000806114478361108b565b6001600160a01b0316141592915050565b610b618484848461182b565b61146e8282610aec565b6107785761147b8161189e565b6114868360206118b0565b604051602001611497929190612313565b60408051601f198184030181529082905262461bcd60e51b825261056b91600401611ec3565b6114c78282610aec565b15610778576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610ae5836001600160a01b038416611a4c565b61154183836110a6565b61154e6000848484611623565b61060c5760405162461bcd60e51b815260040161056b906122c1565b600c5460ff1661080b5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161056b565b600c5460ff161561080b5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161056b565b6000826000018281548110611610576116106121ce565b9060005260206000200154905092915050565b60006001600160a01b0384163b1561172557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611667903390899088908890600401612382565b602060405180830381600087803b15801561168157600080fd5b505af19250505080156116b1575060408051601f3d908101601f191682019092526116ae918101906123bf565b60015b61170b573d8080156116df576040519150601f19603f3d011682016040523d82523d6000602084013e6116e4565b606091505b5080516117035760405162461bcd60e51b815260040161056b906122c1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ddf565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061176f5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6904ee2d6d415b85acef8160201b8310611799576904ee2d6d415b85acef8160201b830492506020015b662386f26fc1000083106117b757662386f26fc10000830492506010015b6305f5e10083106117cf576305f5e100830492506008015b61271083106117e357612710830492506004015b606483106117f5576064830492506002015b600a83106104375760010192915050565b60006001600160e01b03198216635a05180f60e01b1480610437575061043782611b3f565b61183784848484611b74565b600c5460ff1615610b615760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b606482015260840161056b565b60606104376001600160a01b03831660145b606060006118bf8360026123f2565b6118ca906002612411565b67ffffffffffffffff8111156118e2576118e261202a565b6040519080825280601f01601f19166020018201604052801561190c576020820181803683370190505b509050600360fc1b81600081518110611927576119276121ce565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611956576119566121ce565b60200101906001600160f81b031916908160001a905350600061197a8460026123f2565b611985906001612411565b90505b60018111156119fd576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106119b9576119b96121ce565b1a60f81b8282815181106119cf576119cf6121ce565b60200101906001600160f81b031916908160001a90535060049490941c936119f681612429565b9050611988565b508315610ae55760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161056b565b60008181526001830160205260408120548015611b35576000611a70600183612440565b8554909150600090611a8490600190612440565b9050818114611ae9576000866000018281548110611aa457611aa46121ce565b9060005260206000200154905080876000018481548110611ac757611ac76121ce565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611afa57611afa612457565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610437565b6000915050610437565b60006001600160e01b03198216637965db0b60e01b148061043757506301ffc9a760e01b6001600160e01b0319831614610437565b6001811115611be35760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b606482015260840161056b565b816001600160a01b038516611c3f57611c3a81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611c62565b836001600160a01b0316856001600160a01b031614611c6257611c628582611ca8565b6001600160a01b038416611c7e57611c7981611d45565b611ca1565b846001600160a01b0316846001600160a01b031614611ca157611ca18482611df4565b5050505050565b60006001611cb5846109c7565b611cbf9190612440565b600083815260096020526040902054909150808214611d12576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611d5790600190612440565b6000838152600b6020526040812054600a8054939450909284908110611d7f57611d7f6121ce565b9060005260206000200154905080600a8381548110611da057611da06121ce565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a805480611dd857611dd8612457565b6001900381819060005260206000200160009055905550505050565b6000611dff836109c7565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b6001600160e01b03198116811461078657600080fd5b600060208284031215611e6057600080fd5b8135610ae581611e38565b60005b83811015611e86578181015183820152602001611e6e565b83811115610b615750506000910152565b60008151808452611eaf816020860160208601611e6b565b601f01601f19169290920160200192915050565b602081526000610ae56020830184611e97565b600060208284031215611ee857600080fd5b5035919050565b6001600160a01b0391909116815260200190565b80356001600160a01b0381168114611f1a57600080fd5b919050565b60008060408385031215611f3257600080fd5b611f3b83611f03565b946020939093013593505050565b600080600060608486031215611f5e57600080fd5b611f6784611f03565b9250611f7560208501611f03565b9150604084013590509250925092565b60008060408385031215611f9857600080fd5b82359150611fa860208401611f03565b90509250929050565b600060208284031215611fc357600080fd5b610ae582611f03565b60008060408385031215611fdf57600080fd5b50508035926020909101359150565b6000806040838503121561200157600080fd5b61200a83611f03565b91506020830135801515811461201f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561205657600080fd5b61205f85611f03565b935061206d60208601611f03565b925060408501359150606085013567ffffffffffffffff8082111561209157600080fd5b818701915087601f8301126120a557600080fd5b8135818111156120b7576120b761202a565b604051601f8201601f19908116603f011681019083821181831017156120df576120df61202a565b816040528281528a60208487010111156120f857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561212f57600080fd5b61213883611f03565b9150611fa860208401611f03565b600181811c9082168061215a57607f821691505b6020821081141561217b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b60008351612228818460208801611e6b565b83519083019061223c818360208801611e6b565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351612345816017850160208801611e6b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612376816028840160208801611e6b565b01602801949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906123b590830184611e97565b9695505050505050565b6000602082840312156123d157600080fd5b8151610ae581611e38565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561240c5761240c6123dc565b500290565b60008219821115612424576124246123dc565b500190565b600081612438576124386123dc565b506000190190565b600082821015612452576124526123dc565b500390565b634e487b7160e01b600052603160045260246000fdfe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862addf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4552433732315072657365744d696e7465725061757365724175746f49643a20a2646970667358221220effc6fd9e0bdb3b5e32ac8d57941fc80dd8e5ca795a489e85ca91e45520f05c764736f6c63430008080033";

export class ERC721MinterPauserAutoIdTest__factory extends ContractFactory {
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
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721MinterPauserAutoIdTest> {
    return super.deploy(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    ) as Promise<ERC721MinterPauserAutoIdTest>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    baseTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      baseTokenURI,
      overrides || {}
    );
  }
  attach(address: string): ERC721MinterPauserAutoIdTest {
    return super.attach(address) as ERC721MinterPauserAutoIdTest;
  }
  connect(signer: Signer): ERC721MinterPauserAutoIdTest__factory {
    return super.connect(signer) as ERC721MinterPauserAutoIdTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MinterPauserAutoIdTestInterface {
    return new utils.Interface(_abi) as ERC721MinterPauserAutoIdTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721MinterPauserAutoIdTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721MinterPauserAutoIdTest;
  }
}