const buttons = document.querySelectorAll("[data-filter-btn]");
const items = document.querySelectorAll("[data-filter-item]");

export default buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.querySelector("span")!.classList.remove("bg-black");
    });

    button.querySelector("span")?.classList.add("bg-black");

    const filterCategory = button.getAttribute("data-filter");

    items.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");

      if (filterCategory === "meat" || filterCategory === itemCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
