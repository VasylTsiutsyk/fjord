(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! scrollwatch v2.0.1 | (c) Mon Jan 01 2018 14:27:45 GMT-0500 (EST) Evan Dull <evandull@gmail.com> | License: MIT | https://github.com/edull24/ScrollWatch.git*/
!function(t,i){"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?module.exports=i():t.ScrollWatch=i()}(this,function(){"use strict";var t=0,i={},e={container:window.document.documentElement,watch:"[data-scroll-watch]",watchOnce:!0,inViewClass:"scroll-watch-in-view",ignoreClass:"scroll-watch-ignore",debounce:!1,debounceTriggerLeading:!1,scrollDebounce:250,resizeDebounce:250,scrollThrottle:250,resizeThrottle:250,watchOffsetXLeft:0,watchOffsetXRight:0,watchOffsetYTop:0,watchOffsetYBottom:0,infiniteScroll:!1,infiniteOffset:0,onElementInView:function(){},onElementOutOfView:function(){},onInfiniteXInView:function(){},onInfiniteYInView:function(){}},n="scrollwatchinit",s=function(t){var i,e,n,s=arguments.length;for(t=t||{},i=1;s>i;i++)if(n=arguments[i])for(e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t},l=function(t,i,e){var n,s;return i=i||250,function(){var l=e||this,o=+new Date,c=arguments;n&&n+i>o?(window.clearTimeout(s),s=setTimeout(function(){n=o,t.apply(l,c)},i)):(n=o,t.apply(l,c))}},o=function(t,i,e){var n,s,l,o,c,r=function(){var a=(new Date).getTime()-o;i>a&&a>=0?n=setTimeout(r,i-a):(n=null,e||(c=t.apply(l,s),n||(l=s=null)))};return function(){var a=e&&!n;return l=this,s=arguments,o=(new Date).getTime(),n||(n=setTimeout(r,i)),a&&(c=t.apply(l,s),l=s=null),c}},c=function(){var t=i[this._id].config;"string"==typeof t.container&&(t.container=document.querySelector(t.container))},r=function(){i[this._id].elements=Array.prototype.slice.call(document.querySelectorAll(i[this._id].config.watch+":not(."+i[this._id].config.ignoreClass+")"))},a=function(){i[this._id].lastScrollPosition=p.call(this)},f=function(t){h.call(this,t),d.call(this,t),t!==n&&a.call(this)},h=function(t){var e,s,l=i[this._id],o=l.elements.length,c=l.config,r=c.inViewClass,a={eventType:t};for(s=0;o>s;s++)e=l.elements[s],a.el=e,"scroll"===t&&(a.direction=_.call(this,x.call(this))),T.call(this,e)?e.classList.contains(r)||(e.classList.add(r),c.onElementInView.call(this,a),c.watchOnce&&(l.elements.splice(s,1),o--,s--,e.classList.add(c.ignoreClass))):(e.classList.contains(r)||t===n)&&(e.classList.remove(r),c.onElementOutOfView.call(this,a))},d=function(t){var e,s,l,o,c,r,a,f=i[this._id],h=f.config;if(h.infiniteScroll&&!f.isInfiniteScrollPaused)for(s=["x","y"],r=["onInfiniteXInView","onInfiniteYInView"],l=h.container,o=m.call(this),c=[l.scrollWidth,l.scrollHeight],a={},e=0;2>e;e++)("scroll"===t&&O.call(this,s[e])||"resize"===t||"refresh"===t||t===n)&&o[s[e]].end+h.infiniteOffset>=c[e]&&(a.eventType=t,"scroll"===t&&(a.direction=_.call(this,s[e])),h[r[e]].call(this,a))},u=function(){var t=i[this._id],e=w.call(this);e.addEventListener("scroll",t.scrollHandler,!1),e.addEventListener("resize",t.resizeHandler,!1)},g=function(){var t=i[this._id],e=w.call(this);e.removeEventListener("scroll",t.scrollHandler),e.removeEventListener("resize",t.resizeHandler)},w=function(){return z.call(this)?window:i[this._id].config.container},y=function(){var t={w:i[this._id].config.container.clientWidth,h:i[this._id].config.container.clientHeight};return t},p=function(){var t,e={};return z.call(this)?(e.left=window.pageXOffset,e.top=window.pageYOffset):(t=i[this._id].config.container,e.left=t.scrollLeft,e.top=t.scrollTop),e},m=function(){var t={x:{},y:{}},i=p.call(this),e=y.call(this);return t.x.start=i.left,t.x.end=t.x.start+e.w,t.x.size=t.x.end-t.x.start,t.y.start=i.top,t.y.end=t.y.start+e.h,t.y.size=t.y.end-t.y.start,t},v=function(t){var e,n={x:{},y:{}},s=m.call(this),l=t.getBoundingClientRect();return z.call(this)?(n.x.start=l.left+s.x.start,n.x.end=l.right+s.x.start,n.y.start=l.top+s.y.start,n.y.end=l.bottom+s.y.start):(e=i[this._id].config.container.getBoundingClientRect(),n.x.start=l.left-e.left+s.x.start,n.x.end=n.x.start+l.width,n.y.start=l.top-e.top+s.y.start,n.y.end=n.y.start+l.height),n.x.size=n.x.end-n.x.start,n.y.size=n.y.end-n.y.start,n},x=function(){return O.call(this,"x")?"x":O.call(this,"y")?"y":void 0},_=function(t){var e={x:["right","left"],y:["down","up"]},n={x:"left",y:"top"},s=i[this._id].lastScrollPosition,l=p.call(this);return l[n[t]]>s[n[t]]?e[t][0]:e[t][1]},O=function(t){var e={x:"left",y:"top"},n=i[this._id].lastScrollPosition,s=p.call(this);return s[e[t]]!==n[e[t]]},T=function(t){var i=m.call(this),e=v.call(this,t);return L.call(this,e,i)&&b.call(this,e,i)},L=function(t,e){var n=i[this._id].config;return t.y.start<e.y.end+n.watchOffsetYBottom&&t.y.end>e.y.start-n.watchOffsetYTop},b=function(t,e){var n=i[this._id].config;return t.x.start<e.x.end+n.watchOffsetXRight&&t.x.end>e.x.start-n.watchOffsetXLeft},z=function(){return i[this._id].config.container===window.document.documentElement},I=function(t){s(i[this._id].config,e,t)},S=function(t){var e=t.type;i[this._id]&&("resize"===e||O.call(this,"x")||O.call(this,"y"))&&f.call(this,e)},X=function(e){var s;return this instanceof X?(Object.defineProperty(this,"_id",{value:t++}),s=i[this._id]={config:{},elements:[],lastScrollPosition:{top:0,left:0},isInfiniteScrollPaused:!1},I.call(this,e),s.config.debounce?(s.scrollHandler=o(S.bind(this),s.config.scrollDebounce,s.config.debounceTriggerLeading),s.resizeHandler=o(S.bind(this),s.config.resizeDebounce,s.config.debounceTriggerLeading)):(s.scrollHandler=l(S.bind(this),s.config.scrollThrottle,this),s.resizeHandler=l(S.bind(this),s.config.resizeThrottle,this)),c.call(this),u.call(this),r.call(this),f.call(this,n),void 0):new X(e)};return X.prototype={refresh:function(){r.call(this),f.call(this,"refresh")},destroy:function(){g.call(this),delete i[this._id]},updateWatchOffsetXLeft:function(t){i[this._id].config.watchOffsetXLeft=t},updateWatchOffsetXRight:function(t){i[this._id].config.watchOffsetXRight=t},updateWatchOffsetYTop:function(t){i[this._id].config.watchOffsetYTop=t},updateWatchOffsetYBottom:function(t){i[this._id].config.watchOffsetYBottom=t},pauseInfiniteScroll:function(){i[this._id].isInfiniteScrollPaused=!0},resumeInfiniteScroll:function(){i[this._id].isInfiniteScrollPaused=!1}},X});

},{}],2:[function(require,module,exports){
"use strict";

var _scrollwatch = _interopRequireDefault(require("scrollwatch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sw = new _scrollwatch["default"]({});

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
var mySwiper = new Swiper('.swiper-container', {
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
      spaceBetween: 40
    }
  }
});
var phoneSwiper = new Swiper('.phone-swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var phoneSwiperSection = document.querySelector('.phone-slider');
var btns = document.querySelectorAll('.swiper-btn');
btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    phoneSwiperSection.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

var tabletSwiper = new Swiper('.tablet-swiper-container', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 500,
  navigation: {
    prevEl: '.swiper-button-prev'
  }
}); //=====================//
//-------HEADER--------//
//=====================//

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch');
  var menuArrows = document.querySelectorAll('.menu__arrow');

  if (menuArrows.length > 0) {
    var _loop = function _loop(i) {
      var menuArrow = menuArrows[i];
      menuArrow.addEventListener('click', function () {
        menuArrow.parentElement.classList.toggle('active');
      });
    };

    for (var i = 0; i < menuArrows.length; i++) {
      _loop(i);
    }
  }
} else {
  document.body.classList.add('pc');
}

var menuBtn = document.querySelector('.menu__btn');
var menuBody = document.querySelector('.menu__body');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
} //header


var header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  var offset = window.pageYOffset;

  if (offset == 0) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } else {
    header.style.backgroundColor = 'rgba(38, 230, 230, 0.9)';
  }
});

},{"scrollwatch":1}]},{},[2]);
