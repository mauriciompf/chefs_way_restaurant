const contentCart: HTMLElement | null = document.querySelector("#content-cart");
const container: HTMLElement | null = document.querySelector("#container");

function openCart(): void {
  if (contentCart && container) {
    contentCart.style.width = "350px";
    container.style.marginRight = "350px";
    contentCart.classList.add("border-l-2");
  }
}

function closeCart(): void {
  if (contentCart && container) {
    contentCart.style.width = "0";
    container.style.marginRight = "0";
    contentCart.classList.remove("border-l-2");
  }
}

export default ((): void => {
  const openCartBtn = document.querySelector("#open-cart-btn");
  const closeCartBtn = document.querySelector("#close-cart-btn");

  if (openCartBtn) {
    openCartBtn.addEventListener("click", openCart);
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
  }
})();
