$(document).ready(function() {
  // Modal show and hide if close button is clicked

  $('#data-target').click(function() {
    $('.modal').show();
  });
  $('.close-btn').click(function() {
    $('.modal').hide();
  });

  // Modal must close on echap

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $('.modal').hide();
    }
  });

  //  Modal close on DOM click

  $(document).click(function() {
    if (!$(event.target).closest('#data-target, .modal').length) {
      $('.modal').hide();
    }
  });

  //  Tab list

  $('.tab-data-target').click(function() {
    let tabValue = $(this)
      .children()
      .text();
    $('.tab-pane').css('display', 'none');
    $('#' + tabValue + '').css('display', 'block');
    $('.tab-data-target').removeClass('active');
    $(this).addClass('active');
  });
});
