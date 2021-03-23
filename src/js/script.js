// /* global document console */
require('../blocks/main-nav/main-nav.js');
require('../blocks/sidebar/sidebar.js');
require('../blocks/modal-contact-form/modal-contact-form.js');

import ready from 'Utils/documentReady.js';
// import getScrollSize from 'Utils/getScrollSize.js';

// ready(function() {
//   console.log('DOM героически построен!');
//   // Добавление кастомного свойства с системной шириной скролла
//   document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);
// });

// import $ from 'jquery'; // Перед использованием установить как зависимость
// $(function() {
//   console.log('jQuery героически сработал!');
// });

ready(function() {
  new WOW().init();
})

const ThisIsWebP = function () {
  var def = $.Deferred(), crimg = new Image();
  crimg.onload = function() { def.resolve(); };
  crimg.onerror = function() {def.reject(); };
  crimg.src = "https://simpl.info/webp/cherry.webp";
  return def.promise();
};

ThisIsWebP().then(function() {
  document.body.classList.add('webp_supported');
}, function() {
  document.body.classList.remove('webp_supported');
});



