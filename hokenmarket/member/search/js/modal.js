$(function(){
    // モーダルウィンドウとボタン、クローズアイコンの要素を取得
    var modal = document.getElementById("selectModal");

    // #で始まるアンカーをクリックした場合に処理
    $('.menu a[href^=#]').on('click', function() {
        modal.style.display = "block";
    });

    // 見出しをクリックするとコンテンツを開閉する
    $('#closeModal').on('click', function() {
        modal.style.display = "none";
    });

    //検索ボタン押下時にモーダル非表示
    $('.search a').on('click', function() {
        modal.style.display = "none";
    });

    // 見出しをクリックするとコンテンツを開閉する
    $(window).on('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
          }
    });

});