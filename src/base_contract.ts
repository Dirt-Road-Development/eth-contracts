/**
    Copyright (C) 2023 Dirt Road Development

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    @file base_contract.ts
    @author Sawyer Cutler
*/
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { Contract } from "@ethersproject/contracts";
import { Interface } from "@ethersproject/abi";

export interface ICoreArgs {
  address: string;
  provider: Provider | Signer;
}

export interface IContractArgs extends ICoreArgs {
  abi: Interface;
}

export abstract class BaseContract {
  public provider: Provider | Signer;
  public contract: Contract;

  constructor(contractArgs: IContractArgs) {
    const { address, abi, provider } = contractArgs;

    this.provider = provider;
    this.contract = new Contract(address, abi, provider);
  }

  public providerIsSigner(): void {
    const isSigner: boolean = this.provider instanceof Signer;
    if (!isSigner) throw new Error("Requires a Signer");
  }
}
