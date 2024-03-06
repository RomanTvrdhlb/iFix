import Swiper from 'swiper';
import vars from "../_vars";

const {blogSlider} = vars;

if(blogSlider){
  const swiper = new Swiper(blogSlider.querySelector('.blog-slider__container'), {
    slidesPerView: 3,
    spaceBetween: 21,
    observer: true,
    observeParents: true,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
