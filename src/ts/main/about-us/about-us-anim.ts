// About us x position
//@ts-ignore
gsap.from("#content-about-us", {
  scrollTrigger: {
    trigger: "#trigger-about-us",
    start: "-500 top",
    end: "+500",
    scrub: 1,
  },
  x: -1000,
  duration: 5,
});
