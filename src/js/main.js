import ScrollWatch from 'scrollwatch';
const sw = new ScrollWatch({});

function testWebP(callback) {
  const webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 500,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const phoneSwiper = new Swiper('.phone-swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const phoneSwiperSection = document.querySelector('.phone-slider');
const btns = document.querySelectorAll('.swiper-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    phoneSwiperSection.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const tabletSwiper = new Swiper('.tablet-swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 500,
  navigation: {
    prevEl: '.swiper-button-prev',
  },
});

//=====================//
//-------HEADER--------//
//=====================//
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add('touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener('click', () => {
        menuArrow.parentElement.classList.toggle('active');
      });
    }
  }
} else {
  document.body.classList.add('pc');
}

const menuBtn = document.querySelector('.menu__btn');
const menuBody = document.querySelector('.menu__body');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

//header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  if (offset == 0) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } else {
    header.style.backgroundColor = 'rgba(38, 230, 230, 0.9)';
  }
});
