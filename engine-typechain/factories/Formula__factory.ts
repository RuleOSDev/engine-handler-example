/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Formula, FormulaInterface } from "../Formula";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_angle",
        type: "uint16",
      },
    ],
    name: "cos",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "log2",
    outputs: [
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256[]",
        name: "list",
        type: "int256[]",
      },
    ],
    name: "math",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_angle",
        type: "uint16",
      },
    ],
    name: "sin",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "sqrt",
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
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_angle",
        type: "uint16",
      },
    ],
    name: "tan",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061153c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635456bf1314610067578063564a6b941461008c578063677342ce1461009f57806381a1e900146100b25780639ade2e5d146100c5578063f985779c146100d8575b600080fd5b61007a610075366004610fe3565b6100eb565b60405190815260200160405180910390f35b61007a61009a366004610ffc565b6102a4565b61007a6100ad366004610fe3565b610301565b61007a6100c036600461103d565b610372565b61007a6100d3366004610ffc565b610ae5565b61007a6100e6366004610ffc565b610b03565b604080517ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd81527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208201527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a8272523616818301527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608201527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808201527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08201527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08201527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e0820152610100808201909252600160f81b6001600160801b600160401b640100000000620100006010600460026000198c019081041790810417908104178881041790810417908104179081041790810417017e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff0281900460ff039091015104600160ff1b909211020190565b60006102b4611000614000611111565b61ffff168261ffff1611156102e357816102d2614000611000611111565b6102dc9190611111565b91506102f2565b6102ef61100083611134565b91505b6102fb82610b03565b92915050565b6000806003831115610363575081600061031c600283611170565b610327906001611184565b90505b8181101561035d579050806002816103428187611170565b61034c9190611184565b6103569190611170565b905061032a565b506102fb565b82156102fb5750600192915050565b6000610391604051806040016040528060608152602001600081525090565b825167ffffffffffffffff8111156103ab576103ab611027565b6040519080825280602002602001820160405280156103d4578160200160208202803683370190505b5081526000805b8451811015610aad576104068582815181106103f9576103f961119c565b6020026020010151610c16565b156104aa5761044c60405180604001604052806006815260200165373ab6b132b960d11b81525086838151811061043f5761043f61119c565b6020026020010151610c28565b6104788582815181106104615761046161119c565b602002602001015184610c7190919063ffffffff16565b6104a56040518060400160405280600c81526020016b6e756d626572202d2d2d203160a01b815250610ca7565b610a9b565b6104cc8582815181106104bf576104bf61119c565b6020026020010151610ced565b15610a9b576105076040518060400160405280600881526020016737b832b930ba37b960c11b81525086838151811061043f5761043f61119c565b60006105156003600a611296565b610520906001611184565b8683815181106105325761053261119c565b6020026020010151141561056d57600061054b85610d00565b9050600061055886610d00565b905061056482826112a5565b92505050610a8f565b6105796003600a611296565b610584906002611184565b8683815181106105965761059661119c565b602002602001015114156105c85760006105af85610d00565b905060006105bc86610d00565b905061056482826112e6565b6105d46003600a611296565b6105df906003611184565b8683815181106105f1576105f161119c565b6020026020010151141561062357600061060a85610d00565b9050600061061786610d00565b90506105648282611325565b61062f6003600a611296565b61063a906004611184565b86838151811061064c5761064c61119c565b602002602001015114156106d657600061066585610d00565b9050600061067286610d00565b9050811561068b5761068482826113aa565b92506106cf565b60405162461bcd60e51b815260206004820152601060248201526f0666f726d756c612064697669646520360841b6044820152600195506064015b60405180910390fd5b5050610a8f565b6106e26003600a611296565b6106ed906005611184565b8683815181106106ff576106ff61119c565b6020026020010151141561073157600061071885610d00565b9050600061072586610d00565b905061056482826113d8565b61073d6003600a611296565b610748906006611184565b86838151811061075a5761075a61119c565b6020026020010151141561081357600061077385610d00565b90508015806107825750806001145b15610790576001915061080d565b60018113156107cc576001815b60008113156107c4576107b08183611325565b9150806107bc816113e4565b91505061079d565b50915061080d565b60405162461bcd60e51b81526020600482015260166024820152753337b936bab63090109036bab9ba1034b73a32b3b2b960511b60448201526064016106c6565b50610a8f565b61081f6003600a611296565b61082a906007611184565b86838151811061083c5761083c61119c565b6020026020010151141561086857600061085585610d00565b905061086081610301565b915050610a8f565b6108746003600a611296565b61087f906008611184565b8683815181106108915761089161119c565b602002602001015114156108a457610a8f565b6108b06003600a611296565b6108bb906009611184565b8683815181106108cd576108cd61119c565b6020026020010151141561093d5760006108e685610d00565b90506000811315610901576108fa816100eb565b915061080d565b60405162461bcd60e51b81526020600482015260116024820152700666f726d756c61206c6f672078203e203607c1b60448201526064016106c6565b6109496003600a611296565b61095490600a611184565b8683815181106109665761096661119c565b6020026020010151141561098a57600061097f85610d00565b905061086081610b03565b6109966003600a611296565b6109a190600b611184565b8683815181106109b3576109b361119c565b602002602001015114156109d75760006109cc85610d00565b9050610860816102a4565b6109e36003600a611296565b6109ee90600c611184565b868381518110610a0057610a0061119c565b60200260200101511415610a8f576000610a1985610d00565b9050610a24816102a4565b15610a3957610a3281610ae5565b9150610a8d565b60405162461bcd60e51b8152602060048201526024808201527f666f726d756c612074616e2078206e6f74206265202b2d2850492f32202b206b6044820152632a50492960e01b60648201526084016106c6565b505b610a998482610c71565b505b80610aa581611402565b9150506103db565b5080610ad857602082015115610ace57610ac682610d00565b949350505050565b5060009392505050565b50620f423e199392505050565b6000610af0826102a4565b610af983610b03565b6102fb91906113aa565b600080610b2c61ffff8416600880610b1d6004600c61141d565b610b27919061141d565b610d7c565b90506000610b4561ffff85166004610b2781600c61141d565b90506110008416156120008516151581610b735782610b666001601061141d565b610b70919061141d565b92505b6000610b7e84610db3565b61ffff1690506000610b99610b94866001611184565b610db3565b61ffff1690506000610bad600860026113d8565b87610bb8858561141d565b610bc29190611434565b610bcc9190611170565b905060008515610be757610be082856112a5565b9050610bf4565b610bf182846112e6565b90505b8415610c0957610c0660001982611325565b90505b9998505050505050505050565b6000610c2182610df6565b1592915050565b610c6d8282604051602401610c3e9291906114a0565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b179052610fc2565b5050565b8151602083018051839291610c8582611402565b905281518110610c9757610c9761119c565b6020026020010181815250505050565b610cea81604051602401610cbb91906114c2565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610fc2565b50565b600080610cf983610df6565b1392915050565b6000610d0e82602001511590565b15610d1b57506000919050565b60008260000151836020018051610d31906114d5565b9081905281518110610d4557610d4561119c565b602002602001015190508260000151836020015181518110610d6957610d6961119c565b6000602091820292909201015292915050565b60006001610d8b8460026113d8565b610d95919061141d565b610da08360026113d8565b610daa9086611170565b16949350505050565b6000806040518060600160405280602281526020016114e560229139905060006002610de0856001611184565b610dea9190611434565b91909101519392505050565b600080610e056003600a611296565b610e10906001611184565b831415610e1f575060016102fb565b610e2b6003600a611296565b610e36906002611184565b831415610e45575060016102fb565b610e516003600a611296565b610e5c906003611184565b831415610e6b575060026102fb565b610e776003600a611296565b610e82906004611184565b831415610e91575060026102fb565b610e9d6003600a611296565b610ea8906005611184565b831415610eb7575060036102fb565b610ec36003600a611296565b610ece906006611184565b831415610edd575060046102fb565b610ee96003600a611296565b610ef4906007611184565b831415610f03575060046102fb565b610f0f6003600a611296565b610f1a906008611184565b831415610f29575060046102fb565b610f356003600a611296565b610f40906009611184565b831415610f4f575060046102fb565b610f5b6003600a611296565b610f6690600a611184565b831415610f75575060046102fb565b610f816003600a611296565b610f8c90600b611184565b831415610f9b575060046102fb565b610fa76003600a611296565b610fb290600c611184565b8314156102fb5750600492915050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600060208284031215610ff557600080fd5b5035919050565b60006020828403121561100e57600080fd5b813561ffff8116811461102057600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561105057600080fd5b823567ffffffffffffffff8082111561106857600080fd5b818501915085601f83011261107c57600080fd5b81358181111561108e5761108e611027565b8060051b604051601f19603f830116810181811085821117156110b3576110b3611027565b6040529182528482019250838101850191888311156110d157600080fd5b938501935b828510156110ef578435845293850193928501926110d6565b98975050505050505050565b634e487b7160e01b600052601160045260246000fd5b600061ffff8381169083168181101561112c5761112c6110fb565b039392505050565b600061ffff808316818516808303821115611151576111516110fb565b01949350505050565b634e487b7160e01b600052601260045260246000fd5b60008261117f5761117f61115a565b500490565b60008219821115611197576111976110fb565b500190565b634e487b7160e01b600052603260045260246000fd5b600181815b808511156111ed5781600019048211156111d3576111d36110fb565b808516156111e057918102915b93841c93908002906111b7565b509250929050565b600082611204575060016102fb565b81611211575060006102fb565b816001811461122757600281146112315761124d565b60019150506102fb565b60ff841115611242576112426110fb565b50506001821b6102fb565b5060208310610133831016604e8410600b8410161715611270575081810a6102fb565b61127a83836111b2565b806000190482111561128e5761128e6110fb565b029392505050565b600061102060ff8416836111f5565b600080821280156001600160ff1b03849003851316156112c7576112c76110fb565b600160ff1b83900384128116156112e0576112e06110fb565b50500190565b60008083128015600160ff1b850184121615611304576113046110fb565b6001600160ff1b038401831381161561131f5761131f6110fb565b50500390565b60006001600160ff1b038184138284138082168684048611161561134b5761134b6110fb565b600160ff1b600087128281168783058912161561136a5761136a6110fb565b60008712925087820587128484161615611386576113866110fb565b8785058712818416161561139c5761139c6110fb565b505050929093029392505050565b6000826113b9576113b961115a565b600160ff1b8214600019841416156113d3576113d36110fb565b500590565b600061102083836111f5565b6000600160ff1b8214156113fa576113fa6110fb565b506000190190565b6000600019821415611416576114166110fb565b5060010190565b60008282101561142f5761142f6110fb565b500390565b600081600019048311821515161561144e5761144e6110fb565b500290565b6000815180845260005b818110156114795760208185018101518683018201520161145d565b8181111561148b576000602083870101525b50601f01601f19169290920160200192915050565b6040815260006114b36040830185611453565b90508260208301529392505050565b6020815260006110206020830184611453565b6000816113fa576113fa6110fb56fe00000c8c18f9252830fb3c56471c51335a8262f16a6d70e276417a7c7d897f617fffa2646970667358221220de67b9a03859c9ac06e181a3f301bccb8afa6a21c65b77481db289247acaf01264736f6c63430008080033";

export class Formula__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Formula> {
    return super.deploy(overrides || {}) as Promise<Formula>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Formula {
    return super.attach(address) as Formula;
  }
  connect(signer: Signer): Formula__factory {
    return super.connect(signer) as Formula__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FormulaInterface {
    return new utils.Interface(_abi) as FormulaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Formula {
    return new Contract(address, _abi, signerOrProvider) as Formula;
  }
}
