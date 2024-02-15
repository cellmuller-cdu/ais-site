/*$(document).ready(function(){
    $(window).on("scroll", function() {
    // フッター固定する
 
        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {// フッターの高さの位置にはいったらpositionをabsoluteに変更し、フッターの高さの位置にする 
            $("#area_seach_btn").css({
                "position":"absolute",
                "bottom": footHeight
            });
        } else { // それ以外の場合は元のcssスタイルを指定
            $("#area_seach_btn").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
    });
 });*/


 $(function(){
  var $elem = $(".seach_inner"), 
  $content = $("#area_seach_btn"),
  $win = $(window); 
  var contentTop = 0;
  $win
  .load(function(){
        updatePosition();
        update();
  })
  .resize(function(){
        updatePosition();
        update();
  })
  .scroll(function(){
        updatePosition();
        update();
  });
  function updatePosition(){
      contentTop = $content.offset().top + $elem.outerHeight();
  }
  function update(){
    if( $win.scrollTop() + $win.height() > contentTop ){
      $elem.addClass("static");
    }else if( $elem.hasClass("static") ){
      $elem.removeClass("static");
    }
  }
}); 
