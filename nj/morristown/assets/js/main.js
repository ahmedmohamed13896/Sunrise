$(function(){
   /*accordion*/
 $('.accordion .head-body:first').css("display","block");
    $('.accordion .h3').click(function(){
       
        $('.accordion .h3').removeClass('active');
        $(this).addClass('active');
        $(this).next().slideToggle(500);
       $('.accordion .head-body').not($(this).next()).slideUp(500);
         
    });
    
});