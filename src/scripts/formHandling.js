import { addFromForm } from "./ipfs";

const form = document.getElementById("submitFile");

form.addEventListener("submit", e => {
  e.preventDefault();
  addFromForm();
});
