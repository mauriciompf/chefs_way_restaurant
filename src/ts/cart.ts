const contentCart = document.querySelector("#content-cart")!;
const openButton = document.querySelector("#open-cart-btn")!;
const closeButton = document.querySelector("#close-cart-btn")!;

function openCart() {
  contentCart.classList.remove("hidden");
}

function closeCart() {
  contentCart.classList.add("hidden");
}

export default (() => {
  openButton.addEventListener("click", openCart);
  closeButton.addEventListener("click", closeCart);
})();
