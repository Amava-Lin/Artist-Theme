// Trigger top bar with post name after window reaches bottom of feature image
$(function() {
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if ($('.topBarTrigger').offset() && scroll >= $('.topBarTrigger').offset().top) {
        $('.topBar').removeClass('hidden');
    } else {
        $('.topBar').addClass('hidden');
    }
  });
});

// Push out menu
$(document).ready(function() {
	$('.toggle-button').click(function(){
    $('.slideout-menu').toggleClass('slideout-open');
    $('main').toggleClass('pushLeft');
    $('.bar').toggleClass('open');
    $('.toggle-button').addClass('hidden');
    $('.toggle-button-2').addClass('pushLeft');
    $('.toggle-button-2').removeClass('hidden');
  });
});

$(document).ready(function() {
	$('.toggle-button-2').click(function(){
    $('.slideout-menu').toggleClass('slideout-open');
    $('main').toggleClass('pushLeft');
    $('.bar').toggleClass('open');
    $('.toggle-button').removeClass('hidden');
    $('.toggle-button-2').addClass('hidden');
    $('.toggle-button-2').removeClass('pushLeft');
  
  });
});