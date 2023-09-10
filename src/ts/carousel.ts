import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carousel = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Autoplay, Keyboard],
  centeredSlides: true,
  direction: "horizontal",
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

export default carousel;
