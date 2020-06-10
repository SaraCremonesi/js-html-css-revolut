$(document).ready(function () {
  // gestione dell'icona della lingua
  $(document).on('mouseenter', '.lang-selector',
  function() {
    $('.fa-chevron-up').removeClass('hidden');
    $('.fa-chevron-down').addClass('hidden');
  }
);

$(document).on('mouseleave', '.lang-selector',
function() {
  $('.fa-chevron-up').addClass('hidden');
  $('.fa-chevron-down').removeClass('hidden');
}
);

});
