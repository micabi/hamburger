$(document).ready(function(){
  var toggleBtn = $('#openMenu'); // ボタン
  var closeBtn = $('#close-btn');
  var header = $('header');
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
      header.animate({'right': menuWidth}, 300); // headerも固定しているのでbodyと同じ動きにする
      toggleBtn.hide(); // ハンバーガーボタン非表示
      layer.show();
    }else{
      body.animate({'right': 0}, 300);
      gMenu.animate({'right': -menuWidth}, 300);
      header.animate({'right': 0}, 300);
      toggleBtn.show(); // ハンバーガーボタン表示
      layer.hide();
    }
  });

  layer.on('click', function(){
    body.animate({'right': 0}, 300);
    gMenu.animate({'right': -menuWidth}, 300);
    header.animate({'right': 0}, 300);
    layer.hide();
    toggleBtn.show(); // ハンバーガーボタン表示
    body.removeClass('open');
  });

  closeBtn.on('click', function(){
    body.animate({'right': 0}, 300);
    gMenu.animate({'right': -menuWidth}, 300);
    header.animate({'right': 0}, 300);
    layer.hide();
    toggleBtn.show(); // ハンバーガーボタン表示
    body.removeClass('open');
  });
});
