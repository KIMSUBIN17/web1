  var Links = {
    setColor:function(color){
//      var alist = document.querySelectorAll('a');
//      var i = 0;
//      while(i < alist.length){
//        alist[i].style.color = color;
//        i = i + 1;
//      }
    
    //JQuery라이브러리 사용해서 제어
    //이 웹페지에 있는 모든 a태그를 color매개변수로 하겠다   
    $('a').css('color', color);
    }
  }

  var Body = {
    setColor:function (color){
      //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
      //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

  function nightDayHandler(self){
      var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('powderblue');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('pink');
    }
  }