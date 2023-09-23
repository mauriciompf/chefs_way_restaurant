import { headerAnim } from "../../../header/header-anim";

export default function showHeaderElement(addCartButtons: HTMLElement[]) {
  addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      headerAnim.play();
    });
  });
}

const addCartButtons = document.querySelectorAll(".add-cart-btn");
const addCartButtonsArray = [...addCartButtons] as HTMLElement[];
showHeaderElement(addCartButtonsArray);
