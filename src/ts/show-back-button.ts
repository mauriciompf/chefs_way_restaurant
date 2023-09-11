export default window.addEventListener("scroll", () => {
  const menu = document.querySelector("#menu");
  const topBackButton = document.querySelector("#top-btn");

  if (menu) {
    const menuSection = document.querySelector("#menu-section");
    const menuSectionRect = menuSection?.getBoundingClientRect();
    const hiddenDivRect = menu.getBoundingClientRect();

    const showPoint = menuSectionRect!.top - hiddenDivRect.height;

    if (window.scrollY > showPoint) {
      topBackButton?.classList.remove("translate-x-24");
    } else {
      topBackButton?.classList.add("translate-x-24");
    }
  }
});
