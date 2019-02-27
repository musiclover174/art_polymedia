export default class Slider {
  constructor(galleryEl, thumbsEl) {
    this.galleryEl = galleryEl;
    this.thumbsEl = thumbsEl;

    this.init();
  }

  init() {
    const galleryThumbs = new Swiper(this.thumbsEl, {
      spaceBetween: 5,
      slidesPerView: 5,
      freeMode: true,
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
    const galleryTop = new Swiper(this.galleryEl, {
      spaceBetween: 10,
      slidesPerView: 1,
      navigation: {
        nextEl: '.js-slider-next',
        prevEl: '.js-slider-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
}
