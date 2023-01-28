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
import { Contract } from "@ethersproject/contracts";
import { Interface } from "@ethersproject/abi";
export interface IContractArgs {
    address: string;
    provider: Provider;
    abi: Interface;
}
export declare abstract class BaseContract {
    provider: Provider;
    contract: Contract;
    constructor(contractArgs: IContractArgs);
}
//# sourceMappingURL=base_contract.d.ts.map