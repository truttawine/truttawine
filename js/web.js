$(document).ready(function() {
    console.log( "ready!" );

    function scrollSmoothToBottom (id) {
   var div = document.getElementById(id);
   $('body').animate({
      scrollTop: document.body.scrollHeight
   }, 500);
}

	$(function($){
    $( '.story-menu-btn' ).click(function(){
      $('.story-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
    });
    $( '.wine1-menu-btn' ).click(function(){
      $('.wine1-responsive-menu').slideToggle()
      $('.story-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
    });
    $( '.wine2-menu-btn' ).click(function(){
      $('.wine2-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.story-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
    });
    $( '.wine3-menu-btn' ).click(function(){
      $('.wine3-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.story-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
    });
    $( '.farming-menu-btn' ).click(function(){
      $('.farming-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.story-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
      scrollSmoothToBottom();
    });
    $( '.gallery-menu-btn' ).click(function(){
      $('.gallery-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.story-responsive-menu').slideUp();
      $('.contact-responsive-menu').slideUp();
      scrollSmoothToBottom();
    });
    $( '.contact-menu-btn' ).click(function(){
      $('.contact-responsive-menu').slideToggle()
      $('.wine1-responsive-menu').slideUp();
      $('.wine2-responsive-menu').slideUp();
      $('.wine3-responsive-menu').slideUp();
      $('.farming-responsive-menu').slideUp();
      $('.story-responsive-menu').slideUp();
      $('.gallery-responsive-menu').slideUp();
      scrollSmoothToBottom();
    });
  });
});
