import {fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher, elemVisCheck} from './modules/helpers';
import Index from './modules/index';
import Burger from './modules/burger';
import Contacts from './modules/contacts';
import Sticky from './modules/sticky';

document.addEventListener('DOMContentLoaded', () => {
  // const burger = new Burger();
  const elVisArray = ['.about__img', '.about p, .about__clients, .catalog__img, .catalog__elem-img'];
  if (document.body.classList.contains('index')) {
    const index = new Index(30);
    index.preload();
  }

  if (document.querySelector('.js-contacts-map')) {
    const contacts = new Contacts('contacts-map');
    contacts.init();
  }

  if (document.querySelector('.js-sticky')) {
    Sticky(20, 0);
  }

  if (document.querySelectorAll('.js-shave').length) {
    document.querySelectorAll('.js-shave').forEach((sh) => {
      shave(sh, sh.getAttribute('data-height'));
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
