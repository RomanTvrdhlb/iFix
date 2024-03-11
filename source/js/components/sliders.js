import Swiper from 'swiper';
import vars from "../_vars";
import {Autoplay, FreeMode} from 'swiper/modules';

const {blogSlider, rewiewsSlider, brandsSlider} = vars;
let containerWidth = document.documentElement.clientWidth;


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

if (brandsSlider) {
  const swiper = new Swiper(brandsSlider.querySelector('.brands-slider__container'), {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 4000,

    
    autoplay: {
      delay: 0,
    },

    breakpoints: {
      320: {
        spaceBetween: 7,
      },
      1024: {
        spaceBetween: 19,
      },
    },
  });
}

const rewiewsSliderContainer = rewiewsSlider.querySelector('.rewiews-slider__container');
let swiper;

function updateSlider() {
  if (window.innerWidth < 768 && rewiewsSlider) {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
    swiper = new Swiper(rewiewsSliderContainer, {
      slidesPerView: 'auto',
      spaceBetween: 15,
      observer: true,
      observeParents: true,
    });
  } else {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
}


window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);