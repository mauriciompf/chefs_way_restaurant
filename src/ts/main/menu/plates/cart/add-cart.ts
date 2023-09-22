import "../displayPlates";
import { Plate } from "../displayPlates";

const listCarts = document.querySelector("#list-cart") as HTMLElement;
const noPlates = document.querySelector("#no-plates") as HTMLElement;
const totalCartHTML = document.querySelector(
  "#total-quantity-cart"
) as HTMLElement;
const noPlatesBottom = document.querySelector(
  "#no-plates-bottom"
) as HTMLElement;
const totalQuantityHTML = document.querySelector(
  "#total-quantity"
) as HTMLElement;
const totalPriceHTML = document.querySelector("#total-price") as HTMLElement;

export function addCart(cart: Plate[]): void {
  let totalQuantity = 0;
  let totalPrice = 0;

  listCarts.textContent = "";

  noPlates.classList.add("hidden");
  noPlatesBottom.classList.remove("hidden");

  cart.forEach((plate: Plate, index: number): void => {
    updateTotalValues();

    const newCart = document.createElement("div");
    newCart.classList.add(
      "flex",
      "justify-between",
      "place-items-center",
      "gap-4",
      "border-2",
      "border-pri-blue",
      "p-4",
      "rounded-sm"
    );

    const img = document.createElement("img");
    img.classList.add("w-12", "object-contain");
    img.src = plate.image;
    img.alt = plate.name;

    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("span");
    nameLabel.classList.add("font-bold");
    nameLabel.textContent = plate.name;
    const priceDiv = document.createElement("div");
    const priceLabel = document.createElement("span");
    priceLabel.textContent = `$${plate.price}`;

    const quantityDiv = document.createElement("div");
    const decreaseButton = createButton("-", `decrease-btn-${index}`);
    const quantitySpan = document.createElement("span");
    quantitySpan.id = `quantity-${index}`;
    quantitySpan.textContent = plate.quantity.toString();
    const increaseButton = createButton("+", `increase-btn-${index}`);

    nameDiv.appendChild(nameLabel);
    priceDiv.appendChild(priceLabel);
    quantityDiv.appendChild(decreaseButton);
    quantityDiv.appendChild(quantitySpan);
    quantityDiv.appendChild(increaseButton);

    newCart.appendChild(img);
    newCart.appendChild(nameDiv);
    newCart.appendChild(priceDiv);
    newCart.appendChild(quantityDiv);

    listCarts.appendChild(newCart);

    decreaseButton.addEventListener("click", (): void => {
      updateQuantity(-1);
    });

    increaseButton.addEventListener("click", (): void => {
      updateQuantity(1);
    });

    function updateQuantity(change: number): void {
      plate.quantity += change;
      quantitySpan.textContent = plate.quantity.toString();

      if (plate.quantity <= 0) {
        cart.splice(index, 1);
        newCart.remove();
      }

      updateTotalValues();
    }
  });

  function createButton(label: string, id: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = label;
    button.id = id;
    return button;
  }

  function updateTotalValues(): void {
    totalQuantity = cart.reduce(
      (total: number, plate: Plate) => total + plate.quantity,
      0
    );
    totalPrice = cart.reduce(
      (total: number, plate: Plate) => total + plate.quantity * plate.price,
      0
    );

    if (totalQuantity <= 0) {
      noPlates?.classList.remove("hidden");
      noPlatesBottom?.classList.add("hidden");
    }

    totalQuantityHTML.textContent = `${totalQuantity}`;
    totalPriceHTML.textContent = totalPrice.toFixed(2);
    totalCartHTML.textContent = `${totalQuantity}`;
  }
}
