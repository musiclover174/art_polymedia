import {
  resizeWatcher, elemVisCheck, qsAll, qs,
} from './modules/helpers';

import Index from './modules/index';
import Burger from './modules/burger';
import Contacts from './modules/contacts';
import Forms from './modules/forms';
import Share from './modules/share';
import Sticky from './modules/sticky';
import Realized from './modules/realized';

document.addEventListener('DOMContentLoaded', () => {
  // const burger = new Burger();
  const elVisArray = ['.about__feat'];
  if (document.body.classList.contains('index')) {
    const index = new Index(
      {
        bannerClass: '.js-banner',
        feedsClass: '.js-feeds',
        stickyEl: '.js-isticky',
        stickyParent: '.js-isticky-parent',
        realizedElem: '.js-realized-elem',
      },
    );
  }

  if (qs('.js-realized-elem')) {
    const realized = new Realized('.js-realized-elem');
  }

  if (qs('.js-contacts-map')) {
    const contacts = new Contacts('map');
    contacts.init();
  }

  if (qs('.js-burger')) {
    const burger = new Burger(qs('.js-burger'));
  }

  if (qsAll('form').length) Forms.init();

  if (qsAll('.js-share').length) {
    qsAll('.js-share').forEach((shBtn) => {
      shBtn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
    window.share = new Share();
  }

  if (qsAll('[data-fancybox]')) { // позор моей седой башке
    $('[data-fancybox]').fancybox({ 
      i18n: {
        en: {
          CLOSE: 'Закрыть',
        },
      },
      clickOutside: '',
      clickSlide: '',
      touch: 0,
    });
  }

  if (qsAll('.js-typecar')) {
    const typeCar = new Swiper('.js-typecar', {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: '.js-typecar .swiper-button-next',
        prevEl: '.js-typecar .swiper-button-prev',
      },
    });
  }

  if (qs('.js-sticky')) {
    const sticky = new Sticky();
  }

  resizeWatcher();
  elemVisCheck(elVisArray);
  let eventScroll;
  try {
    eventScroll = new Event('scroll');
  } catch (e) {
    eventScroll = document.createEvent('Event');
    eventScroll.initEvent('scroll', false, false);
  }
  window.dispatchEvent(eventScroll);
});
