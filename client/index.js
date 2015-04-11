'use strict';

$(document).ready(init);

var imgs = ['/assets/nature1.jpeg', '/assets/nature2.jpeg', '/assets/nature3.jpeg','/assets/nature4.jpeg','/assets/nature5.jpeg','/assets/nature6.jpeg','/assets/nature7.jpeg','/assets/nature8.jpeg','/assets/nature9.jpeg'];

function init(){
  $('.piece').click(function(){
    var randImg = _.sample(imgs);

    $(this).css('background-image','url(' + randImg + ')');
    /*if ($(this).css('background-image') === 'url(http://localhost:3000/assets/nature1.jpeg)'){

    //  console.log('match!');
    }
    if($('td').data('x')===0 && $('td').data('y')===0){

    }*/
    //console.log('rand img: ' + randImg);
    checkWin();
  });
}

function checkWin(){
  var match1,match2,match3,match4,match5,match6,match7,match8,match9;
  if($('td[data-x=0][data-y=0]').css('background-image') === 'url(http://localhost:3000/assets/nature1.jpeg)'){
    console.log('first image matches');
     match1 = true;
  }
  if($('td[data-x=1][data-y=0]').css('background-image') === 'url(http://localhost:3000/assets/nature2.jpeg)'){
    console.log('second image matches');
     match2 = true;
  }
  if($('td[data-x=2][data-y=0]').css('background-image') === 'url(http://localhost:3000/assets/nature3.jpeg)'){
    console.log('second image matches');
     match3 = true;
  }

  if($('td[data-x=0][data-y=1]').css('background-image') === 'url(http://localhost:3000/assets/nature4.jpeg)'){
    console.log('second image matches');
     match4 = true;
  }
  if($('td[data-x=1][data-y=1]').css('background-image') === 'url(http://localhost:3000/assets/nature5.jpeg)'){
    console.log('second image matches');
     match5 = true;
  }

  if($('td[data-x=2][data-y=1]').css('background-image') === 'url(http://localhost:3000/assets/nature6.jpeg)'){
    console.log('second image matches');
     match6 = true;
  }
  if($('td[data-x=0][data-y=2]').css('background-image') === 'url(http://localhost:3000/assets/nature7.jpeg)'){
    console.log('second image matches');
     match7 = true;
  }
  if($('td[data-x=1][data-y=2]').css('background-image') === 'url(http://localhost:3000/assets/nature8.jpeg)'){
    console.log('second image matches');
     match8 = true;
  }
  if($('td[data-x=2][data-y=2]').css('background-image') === 'url(http://localhost:3000/assets/nature9.jpeg)'){
    console.log('second image matches');
     match9 = true;
  }


  if(match1 && match2 && match3 && match4 && match5 && match6 && match7 & match8 && match9){
    alert('OMG YOU WIN!!!!');

  }
}

//$('td[data-x=0][data-y=0]').css
