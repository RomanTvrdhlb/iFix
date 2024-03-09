export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),
  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.header-menu'),
  burger: document.querySelector('.burger'),
  blogSlider: document.querySelector('.blog-slider'),
  faqAcc: document.querySelector('.faq-acc'),
  faqAccParent: document.querySelector('.faq-section__box'),
  faqAccParentMob: document.querySelector('.faq-section__inner'),
  social: document.querySelector('.footer__social'),
  socialParent: document.querySelector('.footer__wrapp'),
  socialParentMob: document.querySelector('.footer__box').firstElementChild,
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
//   rewardsParent: document.querySelector('.rewards-section__box'),
//   rewardsImage: document.querySelector('.rewards-section__image'),
//   tableParent: document.querySelector('.blockchain-section__box'),
//   table: document.querySelector('.blockchain-table'),
//   referralImage: document.querySelector('.referral-section__image'),
//   referralParent: document.querySelector('.referral-section__box'),
//   firstImage: document.querySelector('.first-section__image'),
//   firstParent: document.querySelector('.first-section__box'),
//   navLinks: document.querySelectorAll('.header-nav__link'),
//   copyWrapper: document.querySelector('.info-wrapper'),
//   form: document.querySelector('.referral-form'),
}





