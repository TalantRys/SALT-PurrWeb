// init Swiper
var swiper = new Swiper('.swiper-box', {
  // configure Swiper to use modules
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
  breakpoints:{
    1:{
      direction: 'horizontal',
    },
    575:{
      direction: 'vertical',
    }
  }
});

// Magnific PopUp

$(document).ready(function() {
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

// БУРГЕР
const burger = document.querySelector('header .header__burger');
const burgerBody = document.querySelector('body');
const list = document.querySelector('header .header__list');
burger.addEventListener('click', function(){
    burgerBody.classList.toggle('lock');
    burger.classList.toggle('close');
    list.classList.toggle('burger-active');
});
const listLink = document.querySelectorAll('.header__list .header__link');
listLink.forEach((link)=> {
    link.addEventListener('click', function () {
        burgerBody.classList.remove('lock');
        burger.classList.remove('close');
        list.classList.remove('burger-active');
    });
});