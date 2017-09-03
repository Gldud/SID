$(function() {

//   var menuCtl = 0;
//
//   $(".side-menu .nav > li > a").click(function(e){
//       e.preventDefault();
//
//   });
//   $(".sidebar-brand i").click(function(){
//     // $(".side-menu").toggleClass("fff")
//     console.log("ddd");
//     if(menuCtl == 0){
//       menuCtl = 1;
//       $(".side-menu").removeClass("large").addClass("small");
//       if($('.side-menu').hasClass('small') && menuCtl == 1){
//         $(".side-menu").removeClass("large")
//         console.log(menuCtl);
//         $('.large .nav').removeClass('nav-large')
//         $('.large .nav-large > li').each(function(){
//             $(this).removeClass('active');
//         });
//
//       }
//     }else if(menuCtl == 1){
//       menuCtl = 0;
//       $(".side-menu").removeClass("small").addClass("large");
//       if($('.side-menu').hasClass('large') && menuCtl == 0){
//         console.log(menuCtl);
//         $(".side-menu").removeClass("small")
//         $('.large .nav').addClass('nav-large')
//         $(".large .nav-large > li").click(function(){
//
//             if($(this).parent().hasClass('.nav-large')==false){
//               $(this).toggleClass('active').siblings().removeClass('active');
//                 console.log("ddd");
//             }
//           })
//       }
//     }
// })
//
// jQuery(function() {
//   function slideMenu() {
//     var activeState = jQuery('#menu-container .menu-list').hasClass('active');
//     jQuery('.navbar').animate({
//       left: activeState ? '100%' : '0%'
//     }, 400);
//   }
//   jQuery(".sidebar-brand i").click(function(event) {
//
//     // jQuery(this).toggleClass('open');
//     jQuery('#menu-container .menu-list').toggleClass('active');
//      slideMenu();
//
//     jQuery('body').toggleClass('overflow-hidden');
//   });
//
// jQuery(".menu-list").find('.accordion-toggle').click(function() {
// // jQuery(this).toggleClass("active-tab").find("span").toggleClass("icon-minus icon-plus");
// jQuery(this).next().toggleClass("open").slideToggle("fast");
// // jQuery(".menu-list .accordion-content").not(jQuery(this).next().slideUp("fast").removeClass("open"));
// // jQuery(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find("span").removeClass("icon-minus").addClass("icon-plus")
// });
//
// }); // jQuery load
//
//
$('.sidebar-brand i').click(function(){
  $('.side-menu').toggleClass('menu-toggle')

})

if(!$('.side-menu').hasClass('menu-toggle')){
  $(".accordion-toggle > a").click(function(e){
  e.preventDefault();

    $(".menu-list .menu-submenu").slideUp();
  
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  })}






})
