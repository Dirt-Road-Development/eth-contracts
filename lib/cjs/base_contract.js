"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseContract = void 0;
const contracts_1 = require("@ethersproject/contracts");
class BaseContract {
    constructor(contractArgs) {
        const { address, abi, provider } = contractArgs;
        this.provider = provider;
        this.contract = new contracts_1.Contract(address, abi, provider);
    }
}
exports.BaseContract = BaseContract;
