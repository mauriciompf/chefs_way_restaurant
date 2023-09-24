import testimonials from "./testimonials-data.ts";

interface TestimonialData {
  id: number;
  image: string;
  stars: number;
  name: string;
  description: string;
}

function displayStars(stars: number): DocumentFragment {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < stars; i++) {
    const starIcon = document.createElement("i");
    starIcon.className = "fa-solid fa-star";
    fragment.appendChild(starIcon);
  }

  return fragment;
}

export default ((): void => {
  const listTestimonials = document.querySelector(
    "#list-testimonials"
  ) as HTMLElement;

  if (testimonials != null) {
    (testimonials as TestimonialData[]).forEach((testimonial) => {
      const newTestimonial = document.createElement("figure");
      newTestimonial.dataset[`testimonials-${testimonial.id}`] = "";
      newTestimonial.classList.add(
        "shadow-2xl",
        "border-4",
        "border-pri-yellow",
        "grid",
        "gap-4",
        "rounded-lg",
        "py-4"
      );

      const gridDiv = document.createElement("div");
      gridDiv.classList.add("grid", "place-items-center");

      const img = document.createElement("img");
      img.className = "w-[20%] rounded-full";
      img.setAttribute("data-src", testimonial.image);
      img.src = testimonial.image;
      img.alt = testimonial.name;

      gridDiv.appendChild(img);

      const figcaption = document.createElement("figcaption");
      const nameSpan = document.createElement("span");
      figcaption.classList.add("text-center");
      nameSpan.classList.add("text-xl", "font-bold");
      nameSpan.textContent = testimonial.name;

      const starsDiv = document.createElement("div");
      starsDiv.classList.add(
        "text-yellow-300",
        "flex",
        "gap-4",
        "justify-center",
        "mt-4"
      );
      starsDiv.appendChild(displayStars(testimonial.stars));

      figcaption.appendChild(nameSpan);
      figcaption.appendChild(starsDiv);

      const blockquote = document.createElement("blockquote");
      blockquote.classList.add(
        "text-center",
        "mx-auto",
        "text-gray-600",
        "w-[90%]",
        "text-base"
      );
      blockquote.textContent = testimonial.description;

      newTestimonial.appendChild(gridDiv);
      newTestimonial.appendChild(figcaption);
      newTestimonial.appendChild(blockquote);

      listTestimonials.appendChild(newTestimonial);
    });
  }
})();
