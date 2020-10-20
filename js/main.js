// JavaScript Document
// $(document).ready(function() {  
//   //toggle just the hamburger button of navigation
//   $('#toggle').click(function() {
//    $(this).toggleClass('active');
//    $('#overlay').toggleClass('open');
//   });
  
//   //toggle curtain navigation overlay and menu
//   $('.nav-link').click(function() {
// 	  $('#toggle').removeClass('active');
// 	  $('#overlay').removeClass('open');
//   });
  
//   //animate project dropdown arrow
//   $('#project-collapse').click(function() {
// 	  $('#project-collapse').find('.fa-chevron-down').toggleClass('about-turn');
//   });
// }); 





//THE NEXT TWO SCRIPTS ARE FOR SMOOTH SCROLLING
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


// for changing horizontal navbar css on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbar-wrapper");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('shadow', $(this).scrollTop() > $nav.height());
  });
});


//trigger navigation curtain animation



// hamburger animation https://jonsuh.com/hamburgers/
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // var navbar = document.querySelector(".navbar");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // hamburger.classList.toggle("border-bottom");
    // Do something else, like open/close menu
  });



  // orbiting logos https://stackoverflow.com/questions/39020670/rotate-objects-around-circle-using-css

  var radius = 100; // adjust to move out items in and out 
var fields = $('.item'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});




// accordion animation
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// play audio on hover  http://jsfiddle.net/PsyWolf/W3XdA/8/

function PlaySound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}