import heroImages from "./hero_images-data.ts";

interface HeroImage {
  name: string;
  description: string;
  image: string;
}
const heroImagesWrapper = document.querySelector("#hero-images") as HTMLElement;

export default ((): void => {
  if (heroImages != null) {
    heroImages.forEach((heroImage: HeroImage) => {
      const newHeroImage = document.createElement("article");
      newHeroImage.classList.add("swiper-slide", "!w-full");

      const overlayDiv = document.createElement("div");
      overlayDiv.classList.add(
        "absolute",
        "h-full",
        "w-full",
        "z-10",
        "bg-black/30",
        "max-lg:hidden"
      );

      const textDiv = document.createElement("div");
      textDiv.classList.add(
        "z-30",
        "absolute",
        "bottom-8",
        "left-12",
        "max-lg:hidden"
      );

      const paragraph = document.createElement("p");
      paragraph.classList.add(
        "mb-8",
        "grid",
        "w-1/2",
        "gap-4",
        "italic",
        "tracking-widest",
        "text-white"
      );

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("text-2xl", "font-bold");
      nameSpan.textContent = heroImage.name;

      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("text-xl");
      descriptionSpan.textContent = `"${heroImage.description}"`;

      const img = document.createElement("img");
      img.classList.add(
        "select-none",
        "w-full",
        "object-cover",
        "lg:!h-full",
        "lg:min-h-[250px]",
        "lg:min-w-full",
        "max-lg:h-[150px]"
      );
      img.setAttribute("data-src", heroImage.image);
      img.src = heroImage.image;
      img.alt = heroImage.name;

      paragraph.appendChild(nameSpan);
      paragraph.appendChild(descriptionSpan);

      textDiv.appendChild(paragraph);

      newHeroImage.appendChild(overlayDiv);
      newHeroImage.appendChild(textDiv);
      newHeroImage.appendChild(img);

      heroImagesWrapper.appendChild(newHeroImage);
    });
  }
})();
