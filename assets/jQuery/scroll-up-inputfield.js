if ($(window).width() <= 640) {
  var $modal = $('#tambah-soal-modal, #edit-soal-modal'), // scrollTop works on <body> for some browsers, <html> for others
    scrollTopPadding = 8;

  $('textarea').focus(function () {
    // get textarea's offset top position
    var textareaTop = $(this).offset().top;
    // scroll to the textarea
    $modal.animate({
      scrollTop: textareaTop - scrollTopPadding
    }, 400);;
  });
}