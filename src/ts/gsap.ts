// @ts-ignore

let tl = gsap.timeline();

// Header y position
tl.from(".header", { y: -100, duration: 1 });

// Menu scale
tl.from("[data-filter-item]", {
  scrollTrigger: {
    trigger: "#trigger-menu",
    start: "top top",
    end: "+500",
    scrub: 1,
  },
  scale: 0,
  duration: 1,
});

// About us x position
tl.from("#content-about-us", {
  scrollTrigger: {
    trigger: "#trigger-about-us",
    start: "-500 top",
    end: "+500",
    scrub: 1,
  },
  x: -1000,
  duration: 5,
});

// Testimonials x position
// @ts-ignore
let testimonials = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger-testimonials",
    start: "-500 top",
    end: "+500",
    scrub: 1,
  },
});

testimonials.from("[data-testimonials-one]", {
  scale: 0,
  duration: 10,
  delay: 1,
});

testimonials.from("[data-testimonials-two]", {
  scale: 0,
  duration: 10,
  delay: 2,
});

testimonials.from("[data-testimonials-three]", {
  scale: 0,
  duration: 10,
  delay: 3,
});

// @ts-ignore
// Top back x position
let topButton = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger-top-btn",
    start: "top",
    end: "-500 top",
  },
});

topButton.from("#top-btn", {
  x: 1000,
  duration: 1,
});
