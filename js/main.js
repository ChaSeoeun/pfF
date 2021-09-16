$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
    });

    $('.btn1').click(function(){
        $('html').animate({scrollTop:0},1000,'swing');
    });
    $('.btn2').click(function(){
        $('html').animate({scrollTop:1150},1000,'swing');
    });
    $('.btn3').click(function(){
        $('html').animate({scrollTop:3000},1000,'swing');
    });
    $('.btn4').click(function(){
        $('html').animate({scrollTop:4000},1000,'swing');
    });
});
