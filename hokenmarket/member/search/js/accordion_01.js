$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('.menu a[href^=#]').on('click', function() {
        // スムーススクロール
        var speed = 400;// ミリ秒
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-380;
        $('body,html').animate({scrollTop:position}, speed, 'swing');

        // 開閉パネルが閉じていたら
        if($(href).children('.subInner').css('display') == 'none'){
            // 同時に開閉イベントを実行
            $(href).children('h4').trigger('click');
        }
        return false;
    });

    // 見出しをクリックするとコンテンツを開閉する
    $('.subContent h4').on('click', function() {
        $(this).next('div:not(:animated)').slideToggle();
        $(this).children('span').toggleClass('open');
    });
});
