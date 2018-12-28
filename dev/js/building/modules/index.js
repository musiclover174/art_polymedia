import { qs, qsAll } from './helpers';

export default class Index {
  constructor(
    {
      bannerClass,
      feedsClass,
      stickyParent,
      stickyEl,
      realizedElem,
    },
  ) {
    this.bannerClass = bannerClass;
    this.feedsClass = feedsClass;
    this.stickyParent = stickyParent;
    this.stickyEl = stickyEl;
    this.realizedElem = realizedElem;

    if (qs(bannerClass)) this.bannerInit();
    if (qs(feedsClass)) this.feedsInit();
    if (qs(stickyParent)) this.aboutInit();
    if (qs(realizedElem)) this.realizedOpen();
  }

  bannerInit() {
    const bannerCarousel = new Swiper(this.bannerClass, {
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      parallax: true,
      navigation: {
        nextEl: `${this.bannerClass} ~ .swiper-buttons .swiper-button-next`,
        prevEl: `${this.bannerClass} ~ .swiper-buttons .swiper-button-prev`,
      },
      autoplay: {
        delay: 8000,
      },
    });
  }

  feedsInit() {
    const feedsCarousel = new Swiper(this.feedsClass, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 48,
      loop: true,
      navigation: {
        nextEl: `${this.feedsClass} .swiper-button-next`,
        prevEl: `${this.feedsClass} .swiper-button-prev`,
      },
    });
  }

  aboutInit() {
    const scenesOver = qs(this.stickyParent);
    const positioner = qs(this.stickyEl);

    window.addEventListener('scroll', () => {
      const scenesRect = scenesOver.getBoundingClientRect();
      const wHeightHalf = (window.innerHeight || document.documentElement.clientHeight) / 2;
      const positionHeightHalf = positioner.offsetHeight / 2;

      if (scenesRect.top + positionHeightHalf <= wHeightHalf) {
        if (scenesRect.top + scenesOver.offsetHeight - positionHeightHalf - wHeightHalf > 0) {
          positioner.classList.remove('bottom');
          positioner.classList.add('fixed');
        } else {
          positioner.classList.remove('fixed');
          positioner.classList.add('bottom');
        }
      } else {
        positioner.classList.remove('fixed', 'bottom');
        positioner.removeAttribute('style');
      }
    });
  }

  realizedOpen() {
    qsAll(this.realizedElem).forEach((item) => {
      item.addEventListener('click', (e) => {
        $.fancybox.open({
          src: item.getAttribute('href'),
          type: 'ajax',
          opts: {
            i18n: {
              en: {
                CLOSE: 'Закрыть',
              },
            },
            clickOutside: '',
            clickSlide: '',
            touch: 0,
            afterShow: () => qs('.popup_realized').classList.add('show'),
          },
        });
        e.preventDefault();
      });
    });
  }
}
