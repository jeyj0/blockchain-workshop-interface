import showError from "./showError";
import web3 from "web3";
import Eth from "web3-eth";
import { refreshKnowledge } from "./actions";
import jsonInterface from "./injectWeb3/jsonInterface";
import address from "./injectWeb3/address";

let contract = null;

const initContract = eth => {
  contract = new eth.Contract(jsonInterface, address);
  window.contract = contract;

  refreshKnowledge();
};

const init = () => {
  window.addEventListener("load", async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const eth = new Eth(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();

        initContract(eth);
      } catch (error) {
        showError("Access to account denied. \n" + error.message);
        console.log(error);
      }
    }
    // Legacy dapp browsers...
    else if (web3) {
      web3 = new Eth(web3.currentProvider);

      initContract(eth);
    }
    // Non-dapp browsers...
    else {
      showError(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  });
};

export { contract, init };
