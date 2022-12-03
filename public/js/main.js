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

  var mySwiper2 = new Swiper('.swiper-container', {
    slidesPerView: 4,
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
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false,
  });
  // var banner = new Swiper('.swiper-container-banner', {

  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   autoplay: 5000,
  //   speed: 800,
  //   autoplayDisableOnInteraction: false,
  // });

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

  var swiper = new Swiper('.swiper-container-banner', swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $('.slide-bg-image');
  sliderBgSetting.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    }
  });

  $('.count-up').countUp();
});
