import { qs } from './helpers';

export default class Cookie {
  constructor(cookieClass, closeClass) {
    this.cookieClose = qs(closeClass);
    this.cookieEl = qs(cookieClass);

    this.init();
  }

  init() {
    if (!localStorage.getItem('cookie') && this.cookieClose) {
      this.cookieEl.classList.remove('hide');
      this.cookieClose.addEventListener('click', () => {
        this.cookieEl.classList.add('hide');
        localStorage.setItem('cookie', true);
      });
      // setTimeout(() => {
      //   this.cookieEl.classList.add('hide');
      //   localStorage.setItem('cookie', true);
      // }, 5000);
    }
  }
}
