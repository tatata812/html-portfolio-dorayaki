$(function () {

  /////////メインビジュアルslick//////
  $('.main-visial-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    // cssEase: 'cubic-bezier(.645, .045, .355, 1)',
    fade: true,
    arrows: false,
    pauseOnHover: false
  });


  /////////aside-slick//////
  $('.menu-slick').slick({
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]


  });


  /////////article-slick//////
  $('.article-slider').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  /////////header-sideフェードイン・アウト//////////
  $('.ham').click(function () {
    $('.header-side').removeClass('hide');
    $('.header-side').addClass('show');
  });

  $('.close-button').click(function () {
    $('.header-side').removeClass('show');
    $('.header-side').addClass('hide');
  });


  //////////// フェードイン////////////
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('.top-about-left,.hade-in,.top-lunch-image,.top-lunch-text, .top-dinner-text,.top-dinner-image').each(function () {
      const elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('active');
      }
    });
  });


  ////////////ナビ固定///////////


  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('.header-fixed').addClass('fixed');
      } else {
        $('.header-fixed').removeClass('fixed');
      }
    });
  });


  ///////////// matchHeight////////////
  $('article').matchHeight();

});