import { ethers } from "ethers"
import { ABI_WHATCLICK } from "./abi/whatclick.abi";
import { config } from "../config";

export const contract = async (provider: any) => {
    const ethersProvider = new ethers.BrowserProvider (provider);

    const signer = await ethersProvider.getSigner();

    const contract = new ethers.Contract(
        config.contract.address,
        ABI_WHATCLICK,
        signer
      )
      const address = await signer.getAddress();
  
    console.log(address);

    console.log(contract);
    const name = await contract.name();
    console.log(name);
    // await contract.mintTokens();
    const balanceOf = await contract.balanceOf(address);
    console.log(balanceOf);
}