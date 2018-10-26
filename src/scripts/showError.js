const errorElem = document.getElementById("error");

const showError = message => {
  errorElem.classList = "error";
  errorElem.innerText = message;
};

export default showError;
