/* ============================================================
   Mini ALOHA Pancake - contact.js
   お問い合わせフォーム検証 / FAQアコーディオン
   ============================================================ */

$(function () {

  /* ---------- フォームバリデーション ---------- */
  var $form = $('#contactForm');

  if ($form.length) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $form.on('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var $name = $('#name');
      var $email = $('#email');
      var $message = $('#message');

      [$name, $email, $message].forEach(function ($field) {
        $field.removeClass('is-error');
      });

      if ($name.val().trim() === '') {
        $name.addClass('is-error');
        isValid = false;
      }

      var emailVal = $email.val().trim();
      if (emailVal === '' || !emailPattern.test(emailVal)) {
        $email.addClass('is-error');
        isValid = false;
      }

      if ($message.val().trim() === '') {
        $message.addClass('is-error');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      window.alert('お問い合わせを受け付けました。\nご連絡いただきありがとうございます。');
      $form.trigger('reset');
    });

    $form.find('.form-input, .form-textarea').on('input', function () {
      $(this).removeClass('is-error');
    });
  }

  /* ---------- FAQ アコーディオン ---------- */
  $('.faq__question').on('click', function () {
    var $item = $(this).closest('.faq__item');
    var isOpen = $item.hasClass('is-open');

    $item.siblings('.faq__item').removeClass('is-open');
    $item.toggleClass('is-open', !isOpen);
  });

});
