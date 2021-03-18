/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    // 'sprite-svg',
    // 'sprite-png',
  ],
  'addStyleBefore': [
    'src/scss/global.scss',
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    // images
    'src/img/logo.svg': 'img/',
    'src/img/icon.svg': 'img/',

    'src/img/services/service_1.png': 'img/services',
    'src/img/services/service_2.png': 'img/services',
    'src/img/services/service_3.png': 'img/services',

    'src/img/girl_in_museum.jpg': 'img/',
    'src/img/girl_on_beach.jpg': 'img/',
    'src/img/mountains.jpg': 'img/',

    'src/img/community/show.jpg': 'img/community',
    'src/img/community/fly.jpg': 'img/community',
    'src/img/community/club.jpg': 'img/community',
    'src/img/community/faq.jpg': 'img/community',

    'src/img/arrows/arrow_1.svg': 'img/arrows',
    'src/img/arrows/arrow_2.svg': 'img/arrows',
    'src/img/arrows/arrow_3.svg': 'img/arrows',
    'src/img/arrows/arrow_4.svg': 'img/arrows',
    'src/img/arrows/arrow_5.svg': 'img/arrows',
    'src/img/arrows/arrow_6.svg': 'img/arrows',

    'src/img/logos/zoom_logo.svg': 'img/logos',
    'src/img/logos/powerpoint_logo.svg': 'img/logos',
    'src/img/logos/miro_logo.png': 'img/logos',
    'src/img/logos/figma_logo.png': 'img/logos',
    'src/img/logos/tg.svg': 'img/logos',
    'src/img/logos/phone.svg': 'img/logos',
    'src/img/logos/whatsapp.svg': 'img/logos',
    'src/img/logos/smartphone.svg': 'img/logos',

    'src/img/avatars/viktoria.jpg': 'img/avatars',
    'src/img/avatars/veronika.jpg': 'img/avatars',
    'src/img/avatars/oleg.jpg': 'img/avatars',
    'src/img/avatars/slava.jpg': 'img/avatars',
    'src/img/avatars/olya.jpg': 'img/avatars',
    'src/img/avatars/natali.jpg': 'img/avatars',
    'src/img/avatars/natali_2.jpg': 'img/avatars',
    'src/img/avatars/natali_3.jpg': 'img/avatars',
    'src/img/avatars/natali_4.jpg': 'img/avatars',
    'src/img/avatars/natali_5.jpg': 'img/avatars',
    'src/img/avatars/ornella.jpg': 'img/avatars',
    'src/img/avatars/yana.jpg': 'img/avatars',
    'src/img/avatars/yan.jpg': 'img/avatars',
    'src/img/avatars/oleg_2.jpg': 'img/avatars',
    'src/img/avatars/julia.jpg': 'img/avatars',
    'src/img/avatars/savkina.jpg': 'img/avatars',

    'src/img/hero/hero_1.jpg': 'img/hero',
    'src/img/hero/hero_2.jpg': 'img/hero',
    'src/img/hero/hero_3.jpg': 'img/hero',
    'src/img/hero/hero_4.jpg': 'img/hero',
    'src/img/hero/hero_5.jpg': 'img/hero',
    'src/img/hero/hero_6.jpg': 'img/hero',

    // fonts
    'src/fonts/Formular-Bold.woff': 'fonts/',
    'src/fonts/Formular-Medium.woff': 'fonts/',
    'src/fonts/Formular-Black.woff': 'fonts/',

    'src/fonts/Inter-Medium.ttf': 'fonts/',
    'src/fonts/Inter-ExtraBold.ttf': 'fonts/',
    'src/fonts/Inter-SemiBold.ttf': 'fonts/',

    'src/fonts/SF-Pro-Text-Medium.otf': 'fonts/',
    'src/fonts/SF-Pro-Text-Regular.otf': 'fonts/',
    'src/fonts/SF-Pro-Text-Semibold.otf': 'fonts/',

    // js
    'src/js/libs/wow.js': 'js/libs/',
    'src/js/libs/jquery-3.6.0.min.js': 'js/libs/',
    'src/js/libs/popper.min.js': 'js/libs/',
    'src/js/libs/bootstrap.bundle.min.js': 'js/libs/',

    // 'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
