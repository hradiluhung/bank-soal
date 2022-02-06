if ($(window).width() <= 600) {
  var $htmlOrBody = $('html, body'), // scrollTop works on <body> for some browsers, <html> for others
    scrollTopPadding = 8;

  $('textarea').focus(function () {
    // get textarea's offset top position
    var textareaTop = $(this).offset().top;
    // scroll to the textarea
    $htmlOrBody.scrollTop(textareaTop - scrollTopPadding);
  });
}