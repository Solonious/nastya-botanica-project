// slider
$(document).ready(function(){
     $('.slider').slider({
       indicators: false,
       height: 360
     });
     //  slider control
     var btnLeft = $('.container-tabs .arr-left'),
        btnRight = $('.container-tabs .arr-right');

     // Previous slide
     btnLeft.on('click', function() {
         $('.slider').slider('prev');
     });

     // Next slide
     btnRight.on('click', function() {
         $('.slider').slider('next');
     });
     //  mobile navigation
     $(".button-collapse").sideNav();
});

// tab control
$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
    //$('.furshet ul.tabs').tabs('select_tab', 'tab_id');
});

//  owl carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      stagePadding:0,
      center:true,
      loop:true,
      margin:20,
      nav:false,
      responsive:{
          0:{
              items:1.5
          }
      }
  })

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
  })
  // gallery
  $('.gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
