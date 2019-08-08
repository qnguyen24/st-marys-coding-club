// JavaScript Document
$(document).ready(function() {  
  //toggle just the hamburger button of navigation
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
  
  //toggle curtain navigation overlay and menu
  $('.nav-link').click(function() {
	  $('#toggle').removeClass('active');
	  $('#overlay').removeClass('open');
  });
  
  //animate project dropdown arrow
  $('#project-collapse').click(function() {
	  $('#project-collapse').find('.fa-chevron-down').toggleClass('about-turn');
  });
}); 





//THE NEXT TWO SCRIPTS ARE FOR SMOOTH SCROLLING
/*
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
*/

//for changing horizontal navbar css on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar-wrapper");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


//trigger navigation curtain animation
  
  

