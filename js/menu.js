$(document).ready(function(){
  $('#openMenu').children('a').on('click', function(e){
    e.preventDefault();
    console.log("click");
  });
});
