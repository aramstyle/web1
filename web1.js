var Body = {
  setColor : function(color){
    $("body").css("color", color);
  },

  setBackgroundColor : function(color){
    $("body").css("backgroundColor", color);
  }
}

var Links = {
  setColor : function(color){
    $("a").css("color", color);
  }
}

function DayNightChange(here) {
  if(here.value === 'day')
  {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    here.value = 'night';

    Links.setColor('yellow');
  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    here.value = 'day';

    Links.setColor('blue');
  }
}
