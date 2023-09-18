import heroImages from "./hero_images-data.json";

export default (() => {
  const heroImagesWrapper = document.querySelector(
    "#hero-images"
  ) as HTMLElement;
  //   heroImagesWrapper.innerHTML = "";

  if (heroImages != null) {
    heroImages.forEach((heroImage) => {
      const newHeroImage = document.createElement("article");
      newHeroImage.setAttribute("class", "swiper-slide !w-full");

      newHeroImage.innerHTML = `
            <div class="swiper-slide !w-full">
                <div class="absolute h-full w-full z-10 bg-black/30 max-lg:hidden"></div>
                <div class="z-30 absolute bottom-8 left-12 max-lg:hidden">
                    <p class="mb-8 grid w-1/2 gap-4 italic tracking-widest text-white">
                        <span class="text-2xl font-bold">${heroImage.name}</span>
                        <span class="text-xl">"${heroImage.description}"</span>
                    </p>
                </div>
                <img
                    class="select-none w-full object-cover lg:!h-full lg:min-h-[250px] lg:min-w-full max-lg:h-[150px]"
                    src="${heroImage.image}"
                    alt="${heroImage.name}"
                />
            </div>
        `;

      heroImagesWrapper.appendChild(newHeroImage);
    });
  }
})();
