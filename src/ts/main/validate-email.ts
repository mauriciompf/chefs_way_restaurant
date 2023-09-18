const input = document.querySelector("#input")!;
const submitButton = document.querySelector("#submit")!;

function hideError(element: HTMLElement) {
  const inputControl = element.parentElement;
  const displayError = inputControl?.querySelector("span")!;

  displayError.classList.add("hidden");
  element.classList.remove("outline-[3px_solid_darkred]", "bg-[palevioletred]");
}

function showError(element: HTMLElement, errorMessage: string) {
  const inputControl = element.parentElement!;
  const displayError = inputControl.querySelector("span")!;

  displayError.textContent = errorMessage;
  displayError.classList.remove("hidden");
  element.classList.add("outline-[3px_solid_darkred]", "bg-[palevioletred]");
}

function validateEmail() {
  const inputValue = (<HTMLInputElement>input).value;
  const regex: RegExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (inputValue.length === 0 || inputValue === null) {
    showError(<HTMLInputElement>input, "Can't be blank...");
  } else {
    if (!regex.test(inputValue)) {
      showError(<HTMLInputElement>input, "E-mail not valid...");
    } else {
      hideError(<HTMLInputElement>input);
    }
  }
}

export default (() => {
  input?.addEventListener("input", () => {
    validateEmail();
  });

  submitButton?.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail();
  });
})();
