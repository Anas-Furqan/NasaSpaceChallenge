


// carousel 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true, // Ensures that the carousel loops correctly
    margin: 10,
    nav: true, // Enables navigation arrows
    autoplay: true, // Automatically starts the carousel
    autoplayTimeout: 2500, // 2.5 seconds delay for autoplay
    autoplayHoverPause: true, // Pause on hover
    navText: [
      '<i class="fas fa-chevron-left"></i>', // Custom FontAwesome left arrow
      '<i class="fas fa-chevron-right"></i>' // Custom FontAwesome right arrow
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});


