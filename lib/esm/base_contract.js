import { Contract } from "@ethersproject/contracts";
export class BaseContract {
    provider;
    contract;
    constructor(contractArgs) {
        const { address, abi, provider } = contractArgs;
        this.provider = provider;
        this.contract = new Contract(address, abi, provider);
    }
}
