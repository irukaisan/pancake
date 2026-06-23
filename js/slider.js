/* ============================================================
   Mini ALOHA Pancake - slider.js
   Slick Slider 初期化（Seasonal Menu カルーセル / モバイルのみ）
   ============================================================ */

$(function () {

  var $menuSlider = $('.menu-grid--slider');

  if ($menuSlider.length) {
    var initSlider = function () {
      var w = $(window).width();
      if (w <= 768 && !$menuSlider.hasClass('slick-initialized')) {
        $menuSlider.slick({
          dots: false,
          arrows: false,
          infinite: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          centerMode: false,
          cssEase: 'ease',
          speed: 400
        });
      } else if (w > 768 && $menuSlider.hasClass('slick-initialized')) {
        $menuSlider.slick('unslick');
      }
    };

    initSlider();
    $(window).on('resize', initSlider);
  }

});
