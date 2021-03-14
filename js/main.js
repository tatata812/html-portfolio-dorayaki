$(function () {

  /////////メインビジュアルslick//////
  $('.main-visial-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  });


  /////////aside-slick//////
  $('.top-aside-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

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
    $('.top-history-left,.hade-in,.top-dorayaki-image,.top-dorayaki-text, .top-life-text,.top-life-image').each(function () {
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
        $('.header-top').addClass('fixed');
      } else {
        $('.header-top').removeClass('fixed');
      }
    });
  });



});