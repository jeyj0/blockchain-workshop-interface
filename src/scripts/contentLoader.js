import jsonInterface from "./contentLoader/jsonInterface";
import address from "./contentLoader/address";
import { isReady } from "./injectWeb3";
import showError from "./showError";
import web3 from "web3";

const doStuff = () => {
  if (!isReady()) {
    showError("Not ready. Reload to try again.");
    return;
  }

  const contract = new window.eth.Contract(jsonInterface, address);

  contract.methods
    .getKnowledge()
    .call()
    .then(console.log);
};

setTimeout(doStuff, 1000);
