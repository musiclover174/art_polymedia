import { resizeWatcher, elemVisCheck, qsAll } from './modules/helpers';

import Index from './modules/index';
// import Burger from './modules/burger';
import Contacts from './modules/contacts';
import Forms from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
  // const burger = new Burger();
  const elVisArray = ['.about__img'];
  if (document.body.classList.contains('index')) {
    const index = new Index(
      {
        bannerClass: '.js-banner',
        feedsClass: '.js-feeds',
        stickyEl: '.js-sticky',
        stickyParent: '.js-sticky-parent',
        realizedElem: '.js-realized-elem',
      },
    );
  }

  if (document.querySelector('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map');
    contacts.init();
  }

  if (qsAll('form').length) Forms.init();

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
