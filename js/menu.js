/* ============================================================
   Mini ALOHA Pancake - menu.js
   メニューページ サイドバー（タブ切り替え / アンカースクロール）
   ============================================================ */

$(function () {
  var $sidebarItems = $('.menu-sidebar__item');
  var $panels = $('.menu-panel');

  if (!$sidebarItems.length) return;

  $sidebarItems.on('click', function () {
    var $this = $(this);
    var tab = $this.data('tab');
    var anchor = $this.data('anchor');

    $sidebarItems.removeClass('is-active');
    $this.addClass('is-active');

    if (tab) {
      $panels.removeClass('is-active');
      $('#panel-' + tab).addClass('is-active');
      AOS.refresh();
    } else if (anchor) {
      var $target = $(anchor);
      if ($target.length) {
        var headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 104;
        var offset = $target.offset().top - headerHeight - 16;
        $('html, body').animate({ scrollTop: offset }, 600, 'swing');
      }
    }
  });
});
