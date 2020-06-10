$(document).ready(function () {
  // gestione dell'icona della lingua
  $(document).on('mouseenter', '.lang-selector',
  function() {
    $('.fa-chevron-up').removeClass('hidden');
    $('.fa-chevron-down').addClass('hidden');
    $('.dropdown li').this
  }
);

$(document).on('mouseleave', '.lang-selector',
function() {
  $('.fa-chevron-up').addClass('hidden');
  $('.fa-chevron-down').removeClass('hidden');
}
);

// Gestione dei menu a tendina
$(document).on('mouseenter', '.with-dropdown',
function() {
  $(this).children('.dropdown').toggleClass('active');
}
);

$(document).on('mouseleave', '.with-dropdown',
function() {
  $(this).children('.dropdown').toggleClass('active');
}
);

});
