import { ERC20 } from "../src/erc20";
import { JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber } from "@ethersproject/bignumber";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

describe("ERC20 - Ethereum - USDC", () => {
  const token = new ERC20({
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    provider: new JsonRpcProvider("https://eth.llamarpc.com"),
  });

  test("name()", async () => {
    await expect(token.name()).resolves.toBe("USD Coin");
  });

  test("symbol()", async () => {
    await expect(token.symbol()).resolves.toBe("USDC");
  });

  test("decimals()", async () => {
    await expect(token.decimals()).resolves.toBe(6);
  });

  test("totalSupply()", async () => {
    const latest = await token.totalSupply();
    expect(Number(latest)).toBeGreaterThan(0);
    const _6082465 = await token.totalSupply(6082465);
    expect(Number(_6082465)).toEqual(0);
    const _10000000 = await token.totalSupply(10000000);
    expect(Number(_10000000)).toEqual(710880105580000);
  });

  test("balanceOf(address)", async () => {
    const latest = await token.balanceOf(NULL_ADDRESS);
    expect(Number(latest)).toBe(0);
    const _6082465 = await token.balanceOf(NULL_ADDRESS, 6082465);
    expect(Number(_6082465)).toEqual(0);
    const _10000000 = await token.balanceOf(NULL_ADDRESS, 10000000);
    expect(Number(_10000000)).toEqual(0);
  });

  test("transfer(address, amount)", async () => {
    await expect(
      token.transfer(NULL_ADDRESS, BigNumber.from(10))
    ).rejects.toThrow();
  });

  test("allowance(address, spender)", async () => {
    const res1 = await token.allowance(
      "0x5414d89a8bf7e99d732bc52f3e6a3ef461c0c078",
      NULL_ADDRESS
    );
    expect(Number(res1)).toEqual(0);
  });

  test("approve(spender, amount)", async () => {
    await expect(
      token.approve(NULL_ADDRESS, BigNumber.from(10))
    ).rejects.toThrow();
  });
  test("transferFrom(from, to, amount)", async () => {
    await expect(
      token.transferFrom(NULL_ADDRESS, NULL_ADDRESS, BigNumber.from(10))
    ).rejects.toThrow();
  });
});
