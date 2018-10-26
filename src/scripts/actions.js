import { contract } from "./injectWeb3";
import displayKnowledge from "./displayKnowledge";

const refreshKnowledge = () => {
  contract.methods
    .getKnowledge()
    .call()
    .then(displayKnowledge);
};

export { refreshKnowledge };
