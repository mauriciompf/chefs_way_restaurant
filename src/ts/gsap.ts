// @ts-ignore
let tl = gsap.timeline();

// Header y position
tl.from(".header", { y: -100, duration: 1 });

// Hiding header off-screen
// @ts-ignore
const headerAnim = gsap
  .from(".header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

// **************
// Click cart
// **************

// let a = 1;
// a === 1 ? headerAnim.play() : console.log("yes");

// @ts-ignore
ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self: any) => {
    self.direction === -1 ? headerAnim.play() : headerAnim.reverse();
  },
});

// @ts-ignore
ScrollTrigger.create({
  // @ts-ignore
  onEnter: () => gsap.to(".header", { height: auto, duration: 0.2 }),
});

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
