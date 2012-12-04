$(document).ready(function() {

    $("#revealTechform").click( function(){
        var box = $("#techformdiv");
        if( box.is(":visible") ){
            box.slideUp();
        }else{
            box.slideDown();
        }
    });

    jQuery('#good_cause_button').click( function(){
            var top = $('#forgood').offset().top;
            $('html,body').animate({scrollTop: top}, 800);

    });
});