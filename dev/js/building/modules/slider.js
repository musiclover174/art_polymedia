import { qs, qsAll } from './helpers';

export default class Slider {
  constructor(galleryEl, thumbsEl) {
    this.galleryEl = galleryEl;
    this.thumbsEl = thumbsEl;

    this.init();
  }

  init() {
    qsAll(this.galleryEl).forEach((gal) => {
      let galleryThumbs = new Swiper(gal.nextElementSibling, {
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        // loop: true,
        // centeredSlides: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          500: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 4,
          },
        },
      });
      let galleryTop = new Swiper(gal, {
        effect: 'coverflow',
        spaceBetween: 10,
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        },
        navigation: {
          nextEl: qs('.js-slider-next', gal.nextElementSibling),
          prevEl: qs('.js-slider-prev', gal.nextElementSibling),
        },
        thumbs: {
          swiper: galleryThumbs,
        },
        autoplay: {
          delay: 5000,
        },
      });
    });
  }
}
