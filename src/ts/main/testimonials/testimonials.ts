import testimonials from "./testimonials-data.json";

function displayStars(stars: number) {
  let listStars: string[] = [];
  for (let i = 0; i < stars; i++) {
    listStars.push(`<i class="fa-solid fa-star"></i>`);
  }
  return listStars.join("");
}

export default (() => {
  const listTestimonials = document.querySelector(
    "#list-testimonials"
  ) as HTMLElement;

  interface TestimonialData {
    id: number;
    image: string;
    stars: number;
    name: string;
    description: string;
  }

  if (testimonials != null) {
    (testimonials as TestimonialData[]).forEach((testimonial) => {
      const newTestimonial = document.createElement("figure");
      newTestimonial.setAttribute(`data-testimonials-${testimonial.id}`, "");
      newTestimonial.setAttribute(
        "class",
        "shadow-2xl border-4 border-pri-yellow grid gap-4 rounded-lg py-4"
      );

      newTestimonial.innerHTML = `
        <div class="grid place-items-center">
            <img
            class="w-[20%] rounded-full"
            src="${testimonial.image}"
            alt="${testimonial.name}"
            />
        </div>
        <figcaption class="text-center">
            <span class="text-xl font-bold">${testimonial.name}</span>
            <div class="text-yellow-300 flex gap-4 justify-center mt-4">
                ${displayStars(testimonial.stars)}
            </div>
        </figcaption>
        <blockquote class="text-center mx-auto text-gray-600 w-[90%] text-base">${
          testimonial.description
        }</blockquote>
        `;

      listTestimonials.appendChild(newTestimonial);
    });
  }
})();
