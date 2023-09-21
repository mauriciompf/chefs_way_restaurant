import "../main/menu/plates/displayPlates.ts";

// @ts-ignore
let tl = gsap.timeline();

// Header y position
tl.from(".header", { y: -100, duration: 1 });

// Hiding header off-screen
// @ts-ignore
export const headerAnim = gsap
  .from(".header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

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
  onEnter: () => gsap.to(".header", { height: "auto", duration: 0.2 }),
});
