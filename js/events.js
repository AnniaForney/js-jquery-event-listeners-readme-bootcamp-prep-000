//define functions here
$('img').on('load', function(){
  //actions you want to happen
});

$(document).on('keypress', function(key) {
  if (key.which == 13){
    alert('enter was pressed');
  }
});

$(document).on('keyup', function(key) {
  if (key.which == 82){
    alert('r was pressed');
  }
});