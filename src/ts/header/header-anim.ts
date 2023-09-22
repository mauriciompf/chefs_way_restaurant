import "../main/menu/plates/displayPlates.ts";

// @ts-ignore
let tl = gsap.timeline();

// Animate the ".header" element by moving it upward
// This is for the initial header animation.
tl.from(".header", { y: -100, duration: 1 });

// Define a GSAP animation for hiding the header element off-screen.
// @ts-ignore
export const headerAnim = gsap
  .from(".header", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

// Create a ScrollTrigger to detect scrolling behavior.
// When scrolling enters the viewport
// @ts-ignore: Ignoring TypeScript check for ScrollTrigger usage.
ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self: any) => {
    self.direction === -1 ? headerAnim.play() : headerAnim.reverse();
  },
});

// Create a ScrollTrigger to handle the "onEnter" event.
// When the ".header" element enters the viewport
// @ts-ignore: Ignoring TypeScript check for ScrollTrigger usage.
ScrollTrigger.create({
  // @ts-ignore
  onEnter: () => gsap.to(".header", { height: "auto", duration: 0.2 }),
});
