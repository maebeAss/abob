import { ethers } from "ethers"
import { ABI_GAMECLIKER } from "./abi/gameclicker.abi";
import { configClicker, configToken } from "../config";
import { getTrustWalletInjectedProvider } from '../wallets/trustwallet'
import { ABI_DZBTOKEN } from "./abi/dzbtoken.abi";

export const changeYourNet = async () => {
    const injectedProvider = await getTrustWalletInjectedProvider(); 

    await injectedProvider
    .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x89" }],
      });
}

export const walletConnection = async () => {
  const injectedProvider = await getTrustWalletInjectedProvider();
    console.log(injectedProvider);

    try {
      const account = await injectedProvider.request({
        method: "eth_requestAccounts",
      });
     console.log(account); // => ['0x...']
    } catch (e) {
      console.log(e);
      if (e.code === 4001) {
        console.error("User denied connection.");
      }
    }
}

export const checkBalance = async (provider: any) => {
  const ethersProvider = new ethers.BrowserProvider (provider);

  const signer = await ethersProvider.getSigner();

  const contract = new ethers.Contract(
      configToken.contract.address,
      ABI_DZBTOKEN,
      signer
    )

    //const address = await signer.getAddress();
    // const BalanceOf = await contract.balanceOf(address);
    let inpuAddr = document.getElementById("CheckBalance").value;
    let BalanceOf = await contract.balanceOf(inpuAddr);

    console.log(BalanceOf);
}

export const register = async (provider: any) => {
  const ethersProvider = new ethers.BrowserProvider (provider);

  const signer = await ethersProvider.getSigner();

  const contract = new ethers.Contract(
      configClicker.contract.address,
      ABI_GAMECLIKER,
      signer
    )

    let inpuName = document.getElementById("EnterName").value;

    const registration = await contract.Register(inpuName);
    console.log(registration);
}