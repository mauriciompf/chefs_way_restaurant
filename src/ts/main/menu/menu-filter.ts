import "./plates/displayPlates";
import { animateItem } from "./menu-anim";

const buttons = document.querySelectorAll("[data-filter-btn]");
const items = document.querySelectorAll("[data-filter-item]");

export default buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("border-pri-yellow")) {
      return;
    }

    buttons.forEach((btn) => {
      btn.classList.remove("border-pri-yellow", "border-4");
      btn.querySelector("span")!.classList.remove("text-pri-yellow");
    });
    button.classList.add("border-pri-yellow", "border-4");
    button.querySelector("span")?.classList.add("text-pri-yellow");

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
  });
});
