$(function(){
    $(window).scroll(function () {

        if ($(document).scrollTop() > $('.Skills').offset().top -1) {
            $(".nav_prt").css({
                "color" : "white"
            });
        } else {
            $(".nav_prt").css({
                "color" : "black"
            });
        }
    });

    $(window).scroll(function () {

        if($(document).scrollTop() > $('.portfolio').offset().top -1) {
            $(".nav_prt").css({
                "color" : "black"
            });
        }
    });
});