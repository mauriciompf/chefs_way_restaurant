import "./testimonials";

// Testimonials scale
export default (() => {
  // @ts-ignore
  let testimonials = gsap.timeline({
    scrollTrigger: {
      trigger: "#trigger-testimonials",
      start: "-500 top",
      end: "+500",
      scrub: 1,
    },
  });

  for (let i = 1; i <= 3; i++) {
    testimonials.from(`[data-testimonials-${i}]`, {
      scale: 0,
      duration: 2,
      delay: { i },
      filter: "blur(10px)",
      ease: "power2.out",
    });
  }
})();
