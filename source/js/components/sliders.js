import Swiper from 'swiper';
import vars from "../_vars";
import {Autoplay, FreeMode, Grid} from 'swiper/modules';

const {blogSlider, rewiewsSlider, brandsSlider, worksSlider} = vars;
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

if (worksSlider) {
  const swiper = new Swiper(worksSlider.querySelector('.works-slider__container'), {
    modules: [Grid],
    slidesPerView: 'auto',
    spaceBetween: 25,
    observer: true,
    observeParents: true,

    grid: {
      fill: 'row',
      rows: 2,
    },

    on: {
      init: function () {
        const slides = Array.from(this.slides);
        const halfSlidesLength = Math.ceil(slides.length / 2);
        const firstRowSlides = slides.slice(0, halfSlidesLength);
        const secondRowSlides = slides.slice(halfSlidesLength);

        if (firstRowSlides.length > 0) {
          const lastSlideFirstRow = firstRowSlides[firstRowSlides.length - 1];
          lastSlideFirstRow.classList.add('last-row-slide');
        }

        if (secondRowSlides.length > 0) {
          const lastSlideSecondRow = secondRowSlides[secondRowSlides.length - 1];
          lastSlideSecondRow.classList.add('last-row-slide');
        }

        slides.forEach(function (slide, index) {
          if (index >= slides.length / 2) {
            slide.classList.add('second-row-slide');
          }
        });
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