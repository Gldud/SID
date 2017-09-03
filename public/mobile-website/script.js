jQuery(function() {
  jQuery('.mobile-nav-icon').click(function(e) {
    e.preventDefault();
    jQuery('#nav-fade').fadeIn();
    jQuery('#mobile-sidebar').css('left', '0');
    jQuery('html').addClass('sidebar-active');
  });

  jQuery('#nav-fade').click(function(e){
    e.preventDefault();
    jQuery(this).fadeOut();
    jQuery('#mobile-sidebar').css('left', '-320px');
    jQuery('html').removeClass('sidebar-active');
  });

  $(".accordion-toggle > a").click(function(e){
  e.preventDefault();

    $(".menu-list .menu-submenu").slideUp();

    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }

    // $(".accordion-content li > a").click(function(e){
    //   e.preventDefault();
    //   $(".accordion-content li ul").slideUp();
    //   if(!$(this).next().is(":visible"))
    //   {
    //     $(this).next().slideDown();
    //   }
    // })
  })

})
