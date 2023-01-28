import { BaseContract, IContractArgs, ICoreArgs } from "./base_contract";
import { ERC20Abi } from "./abis/erc20";
import { BigNumber } from "@ethersproject/bignumber";
import {Interface, Result} from "@ethersproject/abi";
import assert from "assert";

type BlockTag = number | string;
type ContractFn = "estimateGas" | "functions" | "callStatic";

export class ERC20 extends BaseContract {
  
  constructor(args: ICoreArgs) {
    super({ ...args, abi: new Interface(ERC20Abi) });
  }

  public async name(blockTag: BlockTag = "latest") : Promise<string> {
    return await this.contract.name({
      blockTag
    });
  }
  
  public async symbol(blockTag: BlockTag = "latest") : Promise<string> {
    return await this.contract.symbol({
      blockTag
    });
  }
  
  public async decimals(blockTag: BlockTag = "latest") : Promise<number> {
    return await this.contract.decimals({
      blockTag
    });
  }


  public async totalSupply(blockTag: BlockTag = "latest"): Promise<BigNumber> {
    return await this.contract.totalSupply({
      blockTag
    });
  }

  public async balanceOf(address: string, blockTag: BlockTag = "latest") : Promise<BigNumber> {
    return await this.contract.balanceOf(address, {
      blockTag
    });
  }

  public async transfer(to: string, amount: BigNumber) : Promise<Result> {
    this.providerIsSigner();
    return await this.contract.transfer(to, amount);
  }

  public async allowance(owner: string, spender: string, blockTag: BlockTag = "latest") : Promise<BigNumber> {
    return await this.contract.allowance(owner, spender, {
      blockTag
    });
  }

  public async approve(spender: string, amount: BigNumber) : Promise<Result> {
    this.providerIsSigner();
    return await this.contract.approve(spender, amount);
  }

  public async transferFrom(from: string, to: string, amount: BigNumber) : Promise<Result> {
    this.providerIsSigner();
    return await this.contract.transferFrom(from, to, amount);
  }
}
