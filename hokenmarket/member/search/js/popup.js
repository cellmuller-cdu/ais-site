// JavaScript Document
/*popup*/
$(function() {
 $('.listpopup_open').click(function(){
  $('#listPopup,#listPopup02').fadeIn();
  $('html').addClass('modalset');
 });
 $('.listpopup .listpopup-bg,.listpopup .listpopup_close').click(function(){
  $('#listPopup,#listPopup02').fadeOut();
  $('html').removeClass('modalset');
 });
});
$(function() {
    $('.listpopup .listpopup_bg,.listpopup .listpopup_close').click(function(){
        $('#listPopup,#listPopup02').fadeOut();
        $('html').removeClass('modalset');
    });
});	