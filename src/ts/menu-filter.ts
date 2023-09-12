const buttons = document.querySelectorAll("[data-filter-btn]");
const items = document.querySelectorAll("[data-filter-item]");

export default buttons.forEach((button) => {
  button.addEventListener("click", () => {
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
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
