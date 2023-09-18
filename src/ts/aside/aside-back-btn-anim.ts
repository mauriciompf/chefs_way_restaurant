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
