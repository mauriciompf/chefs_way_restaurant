const wrapper = document.querySelector("[data-wrapper]");

console.log(wrapper);
let isDown = false;
let startX: any;
let scrollLeft: any;

wrapper?.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
  wrapper.classList.add("snap-none");
});

wrapper?.addEventListener("mouseleave", () => {
  isDown = false;
  wrapper.classList.remove("snap-none");
});
wrapper?.addEventListener("mouseup", () => {
  isDown = false;
  wrapper.classList.remove("snap-none");
});
wrapper?.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - wrapper?.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  wrapper.scrollLeft = scrollLeft - walk;
});
