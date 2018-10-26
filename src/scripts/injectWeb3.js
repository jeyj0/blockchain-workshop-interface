import showError from "./showError";
import web3 from "web3";
import Eth from "web3-eth";

let isReadyVar = false;

window.addEventListener("load", async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.eth = new Eth(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();

      isReadyVar = true;
    } catch (error) {
      showError("Access to account denied.");
    }
  }
  // Legacy dapp browsers...
  else if (web3) {
    web3 = new Eth(web3.currentProvider);

    isReadyVar = true;
  }
  // Non-dapp browsers...
  else {
    showError(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
});

const isReady = () => isReadyVar;

export { isReady };
