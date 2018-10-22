$(function(){
   
    $('.accordion .head-body:first').css("display","block");
    $('.accordion .h3').click(function(){
       $(this).next().slideToggle(500);
       $('.accordion .head-body').not($(this).next()).slideUp(500);
         
    });
    
});