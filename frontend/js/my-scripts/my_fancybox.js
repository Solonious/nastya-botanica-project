"use strict";

module.exports = function () {
     $(".open_fancybox").click(function(e) {

       if(e.target.id) {

         var images = [];
         var id = e.target.id;
         var url;

         createImageArr();

         $.fancybox.open(images, {
           padding : 0
         });

         function Image(imageUrl, n) {
           this.href = imageUrl;
           this.title = 'image ' + n;
         }

         function createImageArr () {
           for(var i = 1;i < 4;i++) {
             url = '/img/' + id + '/' + i + '.jpg';
             var image = new Image(url, i);
             images.push(image);
           }
         }
       } else {
         alert('id is undefined');
       }

       return false;
     });



  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    iframe : {
      preload: false
    }
  });

};
