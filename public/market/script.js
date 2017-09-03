

$(function() {
  $(window).scroll(function(){
    console.log("dddd");
  if($(this).scrollTop()>100){
    $('.header').addClass('sticky-header');
  }
  else if($('.header').hasClass('sticky-header') && $(window).scrollTop()<100){
    $('.header').removeClass('sticky-header');
    }
  })
});
