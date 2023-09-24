import platesData from "./plates-data.ts";
import { addCart } from "./cart/add-cart";

export interface Plate {
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

const cart: Plate[] = [];

const listPlates = document.querySelector(".list-plates") as HTMLElement;

listPlates.textContent = "";

function changeImagePosition(name: string): string {
  return name === "Moonlight Mango Tango" || name === "Electric Eel Euphoria"
    ? `-top-24`
    : `-top-28`;
}

export default (() => {
  if (platesData != null) {
    platesData.forEach((plateData) => {
      const plate: Plate = { ...plateData, quantity: 0 };

      const newPlate = document.createElement("article");
      newPlate.dataset.filterItem = "";
      newPlate.dataset.category = plate.category;
      newPlate.classList.add(
        "bg-pri-brown",
        "mx-auto",
        "mt-32",
        "w-[min(100%,_350px)]",
        "rounded-lg",
        "px-6",
        "shadow-2xl"
      );

      const relativeDiv = document.createElement("div");
      relativeDiv.classList.add("relative", "grid", "place-items-center");

      const img = document.createElement("img");
      img.classList.add(
        "select-none",
        "absolute",
        changeImagePosition(plate.name),
        "w-[min(100%,_220px)]"
      );
      img.setAttribute("data-src", plate.image);
      img.src = plate.image;
      img.alt = plate.name;

      relativeDiv.appendChild(img);

      const textDiv = document.createElement("div");
      textDiv.classList.add(
        "grid",
        "gap-4",
        "pt-32",
        "text-center",
        "text-white"
      );

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("font-playFair", "text-2xl", "font-bold");
      nameSpan.textContent = plate.name;

      const descriptionP = document.createElement("p");
      descriptionP.classList.add("text-xl");
      descriptionP.textContent = plate.description;

      textDiv.appendChild(nameSpan);
      textDiv.appendChild(descriptionP);

      const bottomDiv = document.createElement("div");
      bottomDiv.classList.add(
        "bg-pri-brown",
        "-mx-6",
        "mt-4",
        "rounded-b-lg",
        "text-xl",
        "brightness-200"
      );

      const flexDiv = document.createElement("div");
      flexDiv.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "px-6",
        "py-2"
      );

      const priceSpan = document.createElement("span");
      priceSpan.classList.add("font-bold", "italic");
      priceSpan.textContent = `$${plate.price}`;

      const cartButton = document.createElement("button");
      cartButton.classList.add("add-cart-btn");
      cartButton.setAttribute("aria-label", "Add food");
      const cartIcon = document.createElement("i");
      cartIcon.classList.add("fa-solid", "fa-cart-shopping");

      cartButton.appendChild(cartIcon);

      flexDiv.appendChild(priceSpan);
      flexDiv.appendChild(cartButton);

      bottomDiv.appendChild(flexDiv);

      newPlate.appendChild(relativeDiv);
      newPlate.appendChild(textDiv);
      newPlate.appendChild(bottomDiv);

      listPlates.appendChild(newPlate);

      cartButton.addEventListener("click", () => {
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
