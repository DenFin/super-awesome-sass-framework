/////////////// DOMREADY LINE //////////////
$(document).ready(function(){
/////////////// DOMREADY LINE //////////////

  /* ACCORDION TOGGLE */
  $('.accordion_head').on('click touch', function(){
    $(this).parent('.accordion_item').siblings().removeClass('toggled_accordion')
    $(this).parent('.accordion_item').toggleClass('toggled_accordion')
    $(this).parent('.accordion_item').siblings().children('.accordion_content').slideUp();
    $(this).siblings('.accordion_content').slideToggle();
  });

/////////////// DOMREADY LINE //////////////
});
/////////////// DOMREADY LINE //////////////
