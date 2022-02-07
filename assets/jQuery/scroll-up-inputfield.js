if ($(window).width() <= 600) {
  var $modal = $('#tambah-soal-modal, #edit-soal-modal'), // scrollTop works on <body> for some browsers, <html> for others
    scrollTopPadding = 8;

  $('textarea').focus(function () {
    // get textarea's offset top position
    var textareaTop = $(this).offset().top;
    // scroll to the textarea
    $modal.css('top', '20px');
    $modal.scrollTop(textareaTop - scrollTopPadding);
  });
}