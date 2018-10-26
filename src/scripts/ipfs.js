import ipfsApi from "ipfs-api";
import getFileStream from "./getFileStream";

const ipfs = ipfsApi("localhost", "5001", { protocol: "http" });

function addFile(filepath) {
  const xhr = new XMLHttpRequest();
  const url = "http://127.0.0.1:5001/api/v0/add"; //&arg=" + filepath;

  xhr.readyonstatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log("successfully added file to ipfs!");
    }
  };

  const file = document.getElementById("fileInput").files[0];

  const formData = new FormData();
  formData.append("arg", file);

  xhr.open("POST", url);
  xhr.send(formData);
}

const addFromForm = () => {
  addFile("test.txt"); // TODO
};

export { addFromForm };
