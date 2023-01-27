import { BaseContract } from "../src";
import { JsonRpcProvider, Provider } from "@ethersproject/providers";
import {Contract} from "@ethersproject/contracts";

class TestContract extends BaseContract {}

describe("Base Contract Test", () => {
  
  let contract: BaseContract = new TestContract({
    address: "",
    abi: [],
    provider: new JsonRpcProvider("")
  });

  test("Check Provider Type", () => {
    expect(contract.provider).toBeInstanceOf(Provider);
  })
  test("Check Contract Type", () => {
    expect(contract.contract).toBeInstanceOf(Contract);
  })
  test("Empty Address", () => {
    expect(contract.contract.address).toEqual("");
  })
  test("Empty ABI Test", () => {
    expect(contract.contract.interface.functions).toEqual({});
  })
  test("Empty Provider", async() => {
    expect(contract.provider._isProvider).toBeTruthy();
    await expect(contract.provider.getNetwork()).rejects.toThrowError(new Error("could not detect network (event=\"noNetwork\", code=NETWORK_ERROR, version=providers/5.7.2)"));
  })
})
