$(document).ready(function(){
  var toggleBtn = $('#openMenu'); // ボタン
  var closeBtn = $('#close-btn');
  var gMenu = $('#global-menu'); // グローバルメニュー
  var body = $(document.body); // ボディ
  var menuWidth = gMenu.outerWidth(); // メニュー幅
  var layer = $('#layer'); // メニューを出したときのバックグラウンドレイヤー

  toggleBtn.children('a').on('click', function(e){
    e.preventDefault();
    body.toggleClass('open');

    if (body.hasClass('open')) {
      body.animate({'right': menuWidth}, 300);
      gMenu.animate({'right': 0}, 300);
      layer.show();
    }else{
      body.animate({'right': 0}, 300);
      gMenu.animate({'right': -menuWidth}, 300);
      layer.hide();
    }
  });

  layer.on('click', function(){
    body.animate({'right': 0}, 300);
    gMenu.animate({'right': -menuWidth}, 300);
    layer.hide();
    body.removeClass('open');
  });

  closeBtn.on('click', function(){
    body.animate({'right': 0}, 300);
    gMenu.animate({'right': -menuWidth}, 300);
    layer.hide();
    body.removeClass('open');
  });
});
