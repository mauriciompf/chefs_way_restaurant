import "../plates";

export function addCart(cart) {
  const listCarts = document.querySelector("#list-cart")!;
  let totalQuantity = 0;
  let totalPrice = 0;

  const noPlates = document.querySelector("#no-plates");
  const noPlatesBottom = document.querySelector("#no-plates-bottom");

  noPlates?.classList.add("hidden");
  noPlatesBottom?.classList.remove("hidden");

  listCarts.innerHTML = "";

  cart.forEach((plate, index) => {
    updateTotalValues();

    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div class="flex place-items-center gap-8 border-2 border-pri-blue p-4 rounded-sm">
        <div class="flex gap-2">
          <img class="w-12 object-contain" src="${plate.image}" alt="${plate.name}" />
          <div>
            <span class="font-bold text-lg">${plate.name}</span>
            <div>
              <span>$${plate.price}</span>
            </div>
          </div>
        </div>
        <div class="text-xl flex gap-4">
          <button id="decrease-btn-${index}">-</button>
          <span id="quantity-${index}">${plate.quantity}</span>
          <button id="increase-btn-${index}">+</button>
        </div>
      </div>
    `;

    listCarts?.appendChild(newCart);

    const decreaseButton = document.querySelector(`#decrease-btn-${index}`);
    const increaseButton = document.querySelector(`#increase-btn-${index}`);

    decreaseButton?.addEventListener("click", () => {
      plate.quantity--;
      document.querySelector(`#quantity-${index}`)!.textContent =
        plate.quantity;

      if (plate.quantity <= 0) {
        cart.splice(index, 1);
        newCart.remove();
      }

      updateTotalValues();
    });

    increaseButton?.addEventListener("click", () => {
      plate.quantity++;
      document.querySelector(`#quantity-${index}`)!.textContent =
        plate.quantity;

      updateTotalValues();
    });
  });

  function updateTotalValues() {
    totalQuantity = cart.reduce((total, plate) => total + plate.quantity, 0);
    totalPrice = cart.reduce(
      (total, plate) => total + plate.quantity * plate.price,
      0
    );

    if (totalQuantity <= 0) {
      noPlates?.classList.remove("hidden");
      noPlatesBottom?.classList.add("hidden");
    }

    const totalQuantityHTML = document.querySelector("#total-quantity");
    const totalPriceHTML = document.querySelector("#total-price");
    totalQuantityHTML.textContent = totalQuantity;
    totalPriceHTML.textContent = totalPrice.toFixed(2);
  }
}
