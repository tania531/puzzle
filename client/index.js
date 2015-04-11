'use strict';

$(document).ready(init);

var imgs = ['/assets/nature1.jpeg', '/assets/nature2.jpeg', '/assets/nature3.jpeg','/assets/nature4.jpeg','/assets/nature5.jpeg','/assets/nature6.jpeg','/assets/nature7.jpeg','/assets/nature8.jpeg','/assets/nature9.jpeg'];

function init(){
  $('.piece').click(function(){
    var randImg = _.sample(imgs);

    $(this).css('background-image','url(' + randImg + ')');
    console.log('rand img: ' + randImg);
  });
}
