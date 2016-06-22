 'use strict';


module.exports = function() {
// slider
$(document).ready(function() {
     $('.slider').slider({
       indicators: false,
       height: 360
     });
     //  slider control
     var btnLeft = $('.container-tabs .arr-left'),
        btnRight = $('.container-tabs .arr-right');

     // Previous slide
     btnLeft.on('click',function () {
         $('.slider').slider('prev');
     });

     // Next slide
     btnRight.on('click',function () {
         $('.slider').slider('next');
     });
     //  mobile navigation
     $(".button-collapse").sideNav();
});

// tab control
$(document).ready(function () {
    $('ul.tabs').tabs('select_tab', 'tab_id');
    //$('.furshet ul.tabs').tabs('select_tab', 'tab_id');
});

$(document).ready(function () {
  //kava carousel
  var $kava = $('#kava-carousel'),
      $snidanok = $('#snidanok-carousel'),
      $gallery = $('#gallery-carousel'),
      $ourStands = $('#ourstands-carousel'),

      sliderConfOne = {
          center:true,
          loop:true,
          margin:20,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1.5
              }
          }
      },

      sliderConfTwo = {
        center:true,
        loop:true,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    };

  $kava.owlCarousel(sliderConfOne);
  $('#kava_id .control .arr-left').click(function () {
    $kava.trigger('next.owl.carousel', [800]);
  })
  $('#kava_id .control .arr-right').click(function () {
    $kava.trigger('prev.owl.carousel', [800]);
  });

  $snidanok.owlCarousel(sliderConfOne);
  $('#snidanok_lunch .control .arr-left').click(function () {
    $snidanok.trigger('next.owl.carousel', [800]);
  })
  $('#snidanok_lunch .control .arr-right').click(function () {
    $snidanok.trigger('prev.owl.carousel', [800]);
  });

  $gallery.owlCarousel(sliderConfTwo);
  $('#gallery_id .control .arr-left').click(function () {
    $gallery.trigger('next.owl.carousel', [800]);
  })
  $('#gallery_id .control .arr-right').click( function () {
    $gallery.trigger('prev.owl.carousel', [800]);
  });
  $ourStands.owlCarousel(sliderConfTwo);
  $('#location .control .arr-left').click(function () {
    $ourStands.trigger('next.owl.carousel', [800]);
  })
  $('#location .control .arr-right').click(function () {
    $ourStands.trigger('prev.owl.carousel', [800]);
  });
});

  // scroll
$(document).ready(function () {

  function myScroll (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top - 50}, 1500);
  }

  $('#menu').on("click","a", myScroll);
  $('.arrow-dwn').on("click","a", myScroll);

});
};
