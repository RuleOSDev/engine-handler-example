/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ContractAddrCalculator,
  ContractAddrCalculatorInterface,
} from "../ContractAddrCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_origin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "addressFrom",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61030161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063fbf551ad1461003a575b600080fd5b61004d61004836600461025a565b610069565b6040516001600160a01b03909116815260200160405180910390f35b6000816100b35760405161009390606b60f91b90602560fa1b908690600160ff1b90602001610292565b6040516020818303038152906040528051906020012060001c9050610254565b607f82116100de5760405161009390606b60f91b90602560fa1b90869060f887901b90602001610292565b60ff82116101375760405160d760f81b6020820152602560fa1b60218201526001600160601b0319606085901b166022820152608160f81b603682015260f883901b6001600160f81b0319166037820152603801610093565b61ffff821161019157604051601b60fb1b6020820152602560fa1b60218201526001600160601b0319606085901b166022820152604160f91b60368201526001600160f01b031960f084901b166037820152603901610093565b62ffffff82116101ec5760405160d960f81b6020820152602560fa1b60218201526001600160601b0319606085901b166022820152608360f81b60368201526001600160e81b031960e884901b166037820152603a01610093565b604051606d60f91b6020820152602560fa1b60218201526001600160601b0319606085901b166022820152602160fa1b60368201526001600160e01b031960e084901b166037820152603b016040516020818303038152906040528051906020012060001c90505b92915050565b6000806040838503121561026d57600080fd5b82356001600160a01b038116811461028457600080fd5b946020939093013593505050565b6001600160f81b03199485168152928416600184015260609190911b6001600160601b031916600283015290911660168201526017019056fea2646970667358221220ed39590c234f5fa0aec273ec2f73e74f4936b887fcc4c027ed449b7a6dcf077d64736f6c63430008080033";

export class ContractAddrCalculator__factory extends ContractFactory {
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
  ): Promise<ContractAddrCalculator> {
    return super.deploy(overrides || {}) as Promise<ContractAddrCalculator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContractAddrCalculator {
    return super.attach(address) as ContractAddrCalculator;
  }
  connect(signer: Signer): ContractAddrCalculator__factory {
    return super.connect(signer) as ContractAddrCalculator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractAddrCalculatorInterface {
    return new utils.Interface(_abi) as ContractAddrCalculatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractAddrCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ContractAddrCalculator;
  }
}
