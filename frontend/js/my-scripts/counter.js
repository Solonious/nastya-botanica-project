'use strict';

module.exports = function () {
 var $count = $('#counter');

function countUp ( $el, startTime) {

          $el.text(startTime);

          var timer = setInterval(countItUp,0.5);

          function countItUp(){
              startTime += 1
              $el.text(startTime);

              if( startTime === 17500 ){
                  console.log('Countdown Finished.');

                  clearInterval(timer);
                  return;
              }
          }

      }
countUp($count, 0);

};
