/*pc↔sp切り替え版
$(function(){
	var windowWidth = $(window).width();
		var windowSm = 750;
		if (windowWidth <= windowSm) {
			$('td.acco_box').after().hide();
		    $('.acco_btn').on('click',function(){
				if($(this).is('.open')){
					$(this).removeClass('open');
				} else{
					$(this).addClass('open');
				}
				$(this).next('td.acco_box').slideToggle(400);
			});
		} else {
	}
});
*/
$(function(){
	$('td.acco_box').after().hide();
    $('.acco_btn').on('click',function(){
		if($(this).is('.open')){
			$(this).removeClass('open');
		} else{
			$(this).addClass('open');
		}
		$(this).next('td.acco_box').slideToggle(400);
	});
});

