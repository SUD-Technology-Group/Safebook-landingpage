var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
  $('.nav-item-has-children').on('mouseover', function () {
    $('.nav-item-has-children').addClass('current-dropdown');
    $('.nav-dropdown').css('margin-left', '-36.425px');
  });

  $('.nav-item-has-children').on('mouseleave', function () {
    $('.nav-item-has-children').removeClass('current-dropdown');
  });
  setTimeout(function () {
    $('.toast').hide();
  }, 4000);

  var mySwiper2 = new Swiper('.swiper-container', {
    slidesPerView: 8,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    draggable: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false,
  });
  var swiperOptions = {
    loop: true,
    speed: 1000,
    draggable: true,
    autoplay: {
      delay: 6500,
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-banner-button-next',
      prevEl: '.swiper-banner-button-prev',
    },
  };
  var swiperOptionsArticle = {
    slidesPerView: 8,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    draggable: true,
    autoplay: {
      delay: 6500,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  var swiperOptionsComment = {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    draggable: true,
    autoplay: {
      delay: 6500,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  var swiper = new Swiper('.swiper-container-banner', swiperOptions);
  var swiper2 = new Swiper('.swiper-container-article', swiperOptionsArticle);
  var swiper3 = new Swiper('.swiper-container-comment', swiperOptionsComment);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $('.slide-bg-image');
  sliderBgSetting.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    }
  });

  $('.count-up').countUp();

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
});
