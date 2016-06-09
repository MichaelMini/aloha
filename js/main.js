
// Smoothe Scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1300);
        return false;
      }
    }
  });
});


// bxslider

$(function() {
      $('.bxslider').bxSlider({
        slideWidth: 0,
        mode: 'horizontal',
        speed: 500,
        controls: false,
        auto: false,
        autoHover: true,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 0
      });
   });


// Subscribe Alert

$(function() {
  $('.sign-up-form').on('submit', function(event) {
     event.preventDefault();

    if ( $('.email-input').val().length !== 0 ) {
      alert('Thank You for Subscribing!');
      $('.email-input').val('');
    } else {
      alert('Please submit a valid email address.');
   }
  });
});