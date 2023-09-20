import plates from "./plates-data.json";
import { addCart } from "./cart/add-cart";

const listPlates = document.querySelector(".list-plates") as HTMLElement;
listPlates.innerHTML = "";

const cart = [];

function changeImagePosition(name: string) {
  return name === "Moonlight Mango Tango" || name === "Electric Eel Euphoria"
    ? `-top-24`
    : `-top-28`;
}

export default (() => {
  if (plates != null) {
    plates.forEach((plate) => {
      plate.quantity = 0;

      const newPlate = document.createElement("article");
      newPlate.setAttribute("data-filter-item", "");
      newPlate.setAttribute("data-category", plate.category);
      newPlate.setAttribute(
        "class",
        "bg-pri-brown mx-auto mt-32 w-[min(100%,_350px)] rounded-lg px-6 shadow-2xl"
      );

      newPlate.innerHTML = `
        <div class="relative grid place-items-center">
          <img 
            class="select-none absolute ${changeImagePosition(
              plate.name
            )} w-[min(100%,_220px)]"
            src="${plate.image}"
            alt="${plate.name}"
          />
        </div>
        <div class="grid gap-4 pt-32 text-center text-white">
          <span class="font-playFair text-2xl font-bold"
            >${plate.name}</span
          >
          <p class="text-xl">
            ${plate.description}
          </p>
        </div>
        <div
          class="bg-pri-brown -mx-6 mt-4 rounded-b-lg text-xl brightness-200"
        >
          <div class="flex items-center justify-between px-6 py-2">
            <span class="font-bold italic">$${plate.price}</span>
            <button class="add-cart-btn" aria-label="Add food">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        `;
      listPlates.appendChild(newPlate);

      const cartButton = newPlate.querySelector(".add-cart-btn");
      cartButton?.addEventListener("click", () => {
        const cartItem = cart.find((item) => item.name === plate.name);

        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...plate, quantity: 1 });
        }

        addCart(cart);
      });
    });
  }
})();
