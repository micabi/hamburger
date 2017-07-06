$(document).ready(function(){
  $('#openMenu').children('a').on('click', function(e){
    e.preventDefault();
    //console.log("click");
    $('nav').height( $(document).height() ); // 高さいっぱいに
    var width = $(document).width();
    console.log(width);

});
});
