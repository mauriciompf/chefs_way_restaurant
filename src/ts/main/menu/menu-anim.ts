import "./plates/plates";

// Menu scale
// @ts-ignore
gsap.from("[data-filter-item]", {
  scrollTrigger: {
    trigger: "#trigger-menu",
    start: "-100 top",
    end: "+100",
    scrub: 1,
  },
  duration: 1,
  scale: 0,
  filter: "blur(10px)",
  ease: "power2.out",
});

export function animateItem(item: Element) {
  // @ts-ignore
  gsap.from(item, {
    duration: 1,
    scale: 0,
    filter: "blur(10px)",
    ease: "power2.out",
  });
}
