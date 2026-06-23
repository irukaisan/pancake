/* ============================================================
   Mini ALOHA Pancake - main.js
   ヘッダースクロール / ハンバーガーメニュー / スムーズスクロール
   ============================================================ */

$(function () {

  /* ---------- ヘッダースクロール ---------- */
  var $header = $('#header');
  var scrollThreshold = 60;

  function updateHeader() {
    if ($(window).scrollTop() > scrollThreshold) {
      $header.addClass('is-scrolled');
    } else {
      $header.removeClass('is-scrolled');
    }
  }

  $(window).on('scroll', updateHeader);
  updateHeader();

  /* ---------- ハンバーガーメニュー ---------- */
  var $hamburger = $('#hamburger');
  var $mobileNav = $('#mobileNav');
  var $mobileNavOverlay = $('#mobileNavOverlay');

  function openMenu() {
    $hamburger.addClass('is-active').attr('aria-expanded', 'true');
    $mobileNav.addClass('is-open').attr('aria-hidden', 'false');
    $mobileNavOverlay.addClass('is-open');
    $('body').addClass('is-menu-open');
  }

  function closeMenu() {
    $hamburger.removeClass('is-active').attr('aria-expanded', 'false');
    $mobileNav.removeClass('is-open').attr('aria-hidden', 'true');
    $mobileNavOverlay.removeClass('is-open');
    $('body').removeClass('is-menu-open');
  }

  $hamburger.on('click', function () {
    if ($mobileNav.hasClass('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* モバイルナビリンク・オーバーレイをタップで閉じる */
  $mobileNav.find('.mobile-nav__link, .header__cta-btn').on('click', closeMenu);
  $mobileNavOverlay.on('click', closeMenu);

  /* Escキーで閉じる */
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $mobileNav.hasClass('is-open')) {
      closeMenu();
    }
  });

  /* ---------- スムーズスクロール（アンカーリンク） ---------- */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');
    if (target === '#' || target === '') return;
    var $target = $(target);
    if ($target.length) {
      e.preventDefault();
      var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 104;
      var offset = $target.offset().top - headerHeight - 16;
      $('html, body').animate({ scrollTop: offset }, 600, 'swing');
    }
  });

});
