import { headerAnim } from "../../../header/header-anim";

const showHeaderButtons = document.querySelectorAll(".add-cart-btn");

export default showHeaderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    headerAnim.play();
  });
});
