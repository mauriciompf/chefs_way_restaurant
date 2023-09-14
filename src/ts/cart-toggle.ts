const contentCart = document.querySelector("#content-cart")!;
let isOpen = false;

function toggleCart() {
  if (isOpen) {
    animateCloseCart();
    isOpen = false;
  } else {
    animateOpenCart();
    isOpen = true;
  }
}

function animateOpenCart() {
  // @ts-ignore

  gsap.to(contentCart, {
    duration: 1,
    ease: "power3.inout",
    x: 0,
  });
}

function animateCloseCart() {
  // @ts-ignore

  gsap.to(contentCart, {
    duration: 1,
    ease: "power3.inout",
    x: 500,
  });
}

export default (() => {
  document
    .querySelector("#open-cart-btn")!
    .addEventListener("click", toggleCart);
  document
    .querySelector("#close-cart-btn")!
    .addEventListener("click", toggleCart);
})();
