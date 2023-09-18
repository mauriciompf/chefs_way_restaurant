const contentCart = document.querySelector("#content-cart") as HTMLElement;
const container = document.querySelector("#container") as HTMLElement;

function openCart() {
  contentCart.style.width = "350px";
  container.style.marginRight = "350px";
  contentCart.classList.add("border-l-2");
}

function closeCart() {
  contentCart.style.width = "0";
  container.style.marginRight = "0";
  contentCart.classList.remove("border-l-2");
}

export default (() => {
  document.querySelector("#open-cart-btn")?.addEventListener("click", openCart);
  document
    .querySelector("#close-cart-btn")
    ?.addEventListener("click", closeCart);
})();
