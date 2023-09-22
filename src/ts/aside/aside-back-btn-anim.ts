// @ts-ignore

// The animation will be triggered when the element enters the viewport.
let topButton = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger-top-btn",
    start: "top",
    end: "-500 top",
  },
});

// Animate the element by moving it horizontally.
topButton.from("#top-btn", {
  x: 1000,
  duration: 1,
});
