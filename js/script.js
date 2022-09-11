// init Swiper
var swiper = new Swiper('.swiper-box', {
  // configure Swiper to use js/s
  direction: 'vertical',
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1: {
      direction: 'horizontal',
    },
    575: {
      direction: 'vertical',
    }
  }
});

// Magnific PopUp

$(document).ready(function () {
  $('.spotlight__video').magnificPopup({
    disableOn: 700,
    items: {
      src: 'https://www.youtube.com/watch?v=ltMSrSis9ww'
    },
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: true
  });
});

// ШАПКА ФИКСИРОВАНА ПРИ СКРОЛЛЕ
const header = document.querySelector('.header');
const preview = document.querySelector('.main-preview');
const previewHeight = preview.offsetHeight;

window.addEventListener('scroll', function () {
  let scrollDistance = window.pageYOffset;
  if (scrollDistance >= previewHeight) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
});

// БУРГЕР
const burger = document.querySelector('header .header__burger');
const burgerBody = document.querySelector('body');
const list = document.querySelector('header .header__list');
burger.addEventListener('click', function () {
  burgerBody.classList.toggle('lock');
  burger.classList.toggle('close');
  list.classList.toggle('burger-active');
});
const listLink = document.querySelectorAll('.header__list .header__link');
listLink.forEach((link) => {
  link.addEventListener('click', function () {
    burgerBody.classList.remove('lock');
    burger.classList.remove('close');
    list.classList.remove('burger-active');
  });
});

// COUNT-UP.JS
import { CountUp } from "./countup.js/dist/countUp.min.js";

window.onload = function () {
  const statsNumber1 = document.querySelector('#stats-value-1'),
    statsNumber2 = document.querySelector('#stats-value-2'),
    statsNumber3 = document.querySelector('#stats-value-3')

  const options1 = {
    decimal: ',',
    decimalPlaces: 3,
    duration: 1,
  };
  const options2 = {
    decimalPlaces: 1,
    duration: 1,
    prefix: '$',
    suffix: 'bn',
  };
  let demo1 = new CountUp(statsNumber1, 126.300, options1);
  let demo2 = new CountUp(statsNumber2, 20.1, options2);
  let demo3 = new CountUp(statsNumber3, 45.511, options1);

  window.addEventListener('scroll', function () {
    let scrollDistance = window.pageYOffset;
    if (scrollDistance >= previewHeight/5) {
      if (!demo1.error) {
        demo1.start();
      } else {
        console.error(demo1.error);
      }
      if (!demo2.error) {
        demo2.start();
      } else {
        console.error(demo2.error);
      }
      if (!demo3.error) {
        demo3.start();
      } else {
        console.error(demo3.error);
      }
    }
  });
}