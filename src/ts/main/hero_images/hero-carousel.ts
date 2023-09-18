import Swiper from "swiper";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./hero-images";

export default (() => {
  new Swiper(".swiper", {
    modules: [Pagination, Autoplay, Keyboard],
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
})();
