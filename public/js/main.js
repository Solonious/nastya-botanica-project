
;(() => {
  let $count = $('#counter');

function countUp ( $el, startTime, callback) {

            // Display the starting time on the screen.
            $el.text(startTime);

            console.log('Starting ...');

            // Start a 1 second timer
            let timer = setInterval(countItUp,0.5);

            // Decrement the displayed timer value on each 'tick'
            function countItUp(){
                startTime += 1
                $el.text(startTime);

                if( startTime === 17500 ){
                    console.log('Countdown Finished.');

                    // Stop the timer and do the callback.
                    clearInterval(timer);
                    //callback();
                    return;
                }
            }

        }
countUp($count, 0);

})();

// slider
$(document).ready(() => {
     $('.slider').slider({
       indicators: false,
       height: 360
     });
     //  slider control
     let btnLeft = $('.container-tabs .arr-left'),
        btnRight = $('.container-tabs .arr-right');

     // Previous slide
     btnLeft.on('click',() => {
         $('.slider').slider('prev');
     });

     // Next slide
     btnRight.on('click',() => {
         $('.slider').slider('next');
     });
     //  mobile navigation
     $(".button-collapse").sideNav();
});

// tab control
$(document).ready(() => {
    $('ul.tabs').tabs('select_tab', 'tab_id');
    //$('.furshet ul.tabs').tabs('select_tab', 'tab_id');
});

$(document).ready(() => {
  //kava carousel
  let $kava = $('#kava-carousel'),
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
  $('#kava_id .control .arr-left').click(() => {
    $kava.trigger('next.owl.carousel', [800]);
  })
  $('#kava_id .control .arr-right').click(() => {
    $kava.trigger('prev.owl.carousel', [800]);
  });

  $snidanok.owlCarousel(sliderConfOne);
  $('#snidanok_lunch .control .arr-left').click(() => {
    $snidanok.trigger('next.owl.carousel', [800]);
  })
  $('#snidanok_lunch .control .arr-right').click(() => {
    $snidanok.trigger('prev.owl.carousel', [800]);
  });

  $gallery.owlCarousel(sliderConfTwo);
  $('#gallery_id .control .arr-left').click(() => {
    $gallery.trigger('next.owl.carousel', [800]);
  })
  $('#gallery_id .control .arr-right').click(() => {
    $gallery.trigger('prev.owl.carousel', [800]);
  });
  $ourStands.owlCarousel(sliderConfTwo);
  $('#location .control .arr-left').click(() => {
    $ourStands.trigger('next.owl.carousel', [800]);
  })
  $('#location .control .arr-right').click(() => {
    $ourStands.trigger('prev.owl.carousel', [800]);
  });
});

  // scroll
$(document).ready(() => {

  function myScroll (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    let id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top - 50}, 1500);
  }

  $('#menu').on("click","a", myScroll);
  $('.arrow-dwn').on("click","a", myScroll);

});
