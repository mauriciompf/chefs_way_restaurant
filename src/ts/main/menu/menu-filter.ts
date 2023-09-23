import "./plates/displayPlates";
import { animateItem } from "./menu-anim";

const menubuttons = document.querySelectorAll("[data-filter-btn]");
const items = document.querySelectorAll("[data-filter-item]");

function handleButtonClick(button: Element) {
  if (button.classList.contains("border-pri-yellow")) {
    return;
  }

  menubuttons.forEach((btn) => {
    btn.classList.remove("border-pri-yellow", "border-4");
    const span = btn.querySelector("span");
    if (span) {
      span.classList.remove("text-pri-yellow");
    }
  });

  button.classList.add("border-pri-yellow", "border-4");
  const span = button.querySelector("span");
  if (span) {
    span.classList.add("text-pri-yellow");
  }

  const filterCategory = button.getAttribute("data-filter");

  items.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");

    if (filterCategory === "all" || filterCategory === itemCategory) {
      animateItem(item);
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

export default menubuttons.forEach((button): void => {
  button.addEventListener("click", () => {
    handleButtonClick(button);
  });
});
