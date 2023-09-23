const input = document.querySelector("#input") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const errorDisplay = input.parentElement?.querySelector("span") as HTMLElement;

function hideError(): void {
  errorDisplay.classList.add("hidden");
  input.classList.remove("outline-[3px_solid_darkred]", "bg-[palevioletred]");
}

function showError(errorMessage: string): void {
  errorDisplay.textContent = errorMessage;
  errorDisplay.classList.remove("hidden");
  input.classList.add("outline-[3px_solid_darkred]", "bg-[palevioletred]");
}

function validateEmail(): void {
  const inputValue = input.value.trim();

  if (inputValue.length === 0) {
    showError("Email cannot be blank.");
  } else {
    const regex: RegExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!regex.test(inputValue)) {
      showError("Invalid email format.");
    } else {
      hideError();
    }
  }
}

export default ((): void => {
  input.addEventListener("input", validateEmail);

  submitButton.addEventListener("click", (e: Event) => {
    e.preventDefault();
    validateEmail();
  });
})();
