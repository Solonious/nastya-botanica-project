$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      center:true,
      loop:true,
      margin:20,
      nav:false,
      responsive:{
          0:{
              items:1
          }
      }
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  // Go to the next item
  $('.control .arr-left').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.control .arr-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });
});
