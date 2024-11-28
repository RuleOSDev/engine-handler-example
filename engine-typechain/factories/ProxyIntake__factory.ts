/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyIntake, ProxyIntakeInterface } from "../ProxyIntake";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "forceCall",
        type: "bool",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "forceCall",
        type: "bool",
      },
    ],
    name: "upgradeToAndCallUUPS",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001119380380620011198339810160408190526200003491620004f8565b82816200004482826000620000a8565b5062000074905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620005d8565b600080516020620010d283398151915214620000945762000094620005fe565b6200009f82620000e5565b50505062000667565b620000b38362000140565b600082511180620000c15750805b15620000e057620000de83836200018260201b620002601760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f62000110620001b1565b604080516001600160a01b03928316815291841660208301520160405180910390a16200013d81620001ea565b50565b6200014b816200029f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001aa8383604051806060016040528060278152602001620010f26027913962000353565b9392505050565b6000620001db600080516020620010d283398151915260001b620003d260201b620001dc1760201c565b546001600160a01b0316919050565b6001600160a01b038116620002555760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200027e600080516020620010d283398151915260001b620003d260201b620001dc1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002b581620003d560201b6200028c1760201c565b620003195760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200024c565b806200027e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620003d260201b620001dc1760201c565b6060600080856001600160a01b03168560405162000372919062000614565b600060405180830381855af49150503d8060008114620003af576040519150601f19603f3d011682016040523d82523d6000602084013e620003b4565b606091505b509092509050620003c886838387620003e4565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620004555782516200044d576001600160a01b0385163b6200044d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200024c565b508162000461565b62000461838362000469565b949350505050565b8151156200047a5781518083602001fd5b8060405162461bcd60e51b81526004016200024c919062000632565b80516001600160a01b0381168114620004ae57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004e6578181015183820152602001620004cc565b83811115620000de5750506000910152565b6000806000606084860312156200050e57600080fd5b620005198462000496565b9250620005296020850162000496565b60408501519092506001600160401b03808211156200054757600080fd5b818601915086601f8301126200055c57600080fd5b815181811115620005715762000571620004b3565b604051601f8201601f19908116603f011681019083821181831017156200059c576200059c620004b3565b81604052828152896020848701011115620005b657600080fd5b620005c9836020830160208801620004c9565b80955050505050509250925092565b600082821015620005f957634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825162000628818460208701620004c9565b9190910192915050565b602081526000825180602084015262000653816040850160208701620004c9565b601f01601f19169190910160400192915050565b610a5b80620006776000396000f3fe6080604052600436106100595760003560e01c806306d2e426146100705780633659cfe6146100835780635c60da1b146100a35780638f283970146100d4578063b7f45a7f146100f4578063f851a4401461010757610068565b366100685761006661011c565b005b61006661011c565b61006661007e36600461085d565b610136565b34801561008f57600080fd5b5061006661009e36600461092f565b61016f565b3480156100af57600080fd5b506100b86101a4565b6040516001600160a01b03909116815260200160405180910390f35b3480156100e057600080fd5b506100666100ef36600461092f565b6101df565b61006661010236600461085d565b610209565b34801561011357600080fd5b506100b8610235565b61012461029b565b61013461012f610324565b61032e565b565b61013e610352565b6001600160a01b0316336001600160a01b0316141561016757610162838383610385565b505050565b61016261011c565b610177610352565b6001600160a01b0316336001600160a01b0316141561019c57610199816103b0565b50565b61019961011c565b60006101ae610352565b6001600160a01b0316336001600160a01b031614156101d4576101cf610324565b905090565b6101dc61011c565b90565b6101e7610352565b6001600160a01b0316336001600160a01b0316141561019c57610199816103f0565b610211610352565b6001600160a01b0316336001600160a01b0316141561016757610162838383610444565b600061023f610352565b6001600160a01b0316336001600160a01b031614156101d4576101cf610352565b606061028583836040518060600160405280602781526020016109ff602791396105be565b9392505050565b6001600160a01b03163b151590565b6102a3610352565b6001600160a01b0316336001600160a01b031614156101345760405162461bcd60e51b815260206004820152603260248201527f50726f7879496e74616b653a2061646d696e2063616e6e6f742066616c6c626160448201527118dac81d1bc81c1c9bde1e481d185c99d95d60721b60648201526084015b60405180910390fd5b60006101cf610636565b3660008037600080366000845af43d6000803e80801561034d573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b61038e836103b0565b60008251118061039b5750805b15610162576103aa8383610260565b50505050565b6103b98161064c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610419610352565b604080516001600160a01b03928316815291841660208301520160405180910390a1610199816106e9565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610477576101628361064c565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104b057600080fd5b505afa9250505080156104e0575060408051601f3d908101601f191682019092526104dd9181019061094a565b60015b6105435760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b606482015260840161031b565b6000805160206109df83398151915281146105b25760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b606482015260840161031b565b50610162838383610385565b6060600080856001600160a01b0316856040516105db919061098f565b600060405180830381855af49150503d8060008114610616576040519150601f19603f3d011682016040523d82523d6000602084013e61061b565b606091505b509150915061062c86838387610775565b9695505050505050565b60006000805160206109df833981519152610376565b6106558161028c565b6106b75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161031b565b806000805160206109df8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b03811661074e5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840161031b565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036106c8565b606083156107df5782516107d85761078c8561028c565b6107d85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161031b565b50816107e9565b6107e983836107f1565b949350505050565b8151156108015781518083602001fd5b8060405162461bcd60e51b815260040161031b91906109ab565b80356001600160a01b038116811461083257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b8035801515811461083257600080fd5b60008060006060848603121561087257600080fd5b61087b8461081b565b9250602084013567ffffffffffffffff8082111561089857600080fd5b818601915086601f8301126108ac57600080fd5b8135818111156108be576108be610837565b604051601f8201601f19908116603f011681019083821181831017156108e6576108e6610837565b816040528281528960208487010111156108ff57600080fd5b8260208601602083013760006020848301015280965050505050506109266040850161084d565b90509250925092565b60006020828403121561094157600080fd5b6102858261081b565b60006020828403121561095c57600080fd5b5051919050565b60005b8381101561097e578181015183820152602001610966565b838111156103aa5750506000910152565b600082516109a1818460208701610963565b9190910192915050565b60208152600082518060208401526109ca816040850160208701610963565b601f01601f1916919091016040019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122062fd7c6373609ae26f16c66a066837971ba914174d7f08067717fa5d7be84bcc64736f6c63430008080033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class ProxyIntake__factory extends ContractFactory {
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
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProxyIntake> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<ProxyIntake>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  attach(address: string): ProxyIntake {
    return super.attach(address) as ProxyIntake;
  }
  connect(signer: Signer): ProxyIntake__factory {
    return super.connect(signer) as ProxyIntake__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyIntakeInterface {
    return new utils.Interface(_abi) as ProxyIntakeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyIntake {
    return new Contract(address, _abi, signerOrProvider) as ProxyIntake;
  }
}