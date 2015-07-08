$(document).foundation();

$(function() {
  var slides = [];

  $.each($('.background_images'), function (index, image) {
    slides.push({ src: $(image).attr('data-image') });
  });

  $('body').vegas({
    slides: slides,
    timer: false
  });
});
