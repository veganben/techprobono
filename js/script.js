$(document).ready(function() {

    $("#revealTechform").click( function(){
        var box = $("#techformdiv");
        if( box.is(":visible") ){
            box.slideUp();
        }else{
            box.slideDown();
        }
    });
    $('#good_cause_button').click( function(){
            var top = $('#forgood').offset().top;
            $('html,body').animate({scrollTop: top}, 800);

    });
    $('#tech_button').click( function(){
            var top = $('#fortech').offset().top;
            $('html,body').animate({scrollTop: top}, 800);

    });
    $("#submitech").click(function(event){
        event.preventDefault();
        var inputs = $('#techform input');
        var serialised = [];
        inputs.each(function(i){
            serialised.push("" + inputs[i].name + "=" + inputs[i].value);
        });
        var query = serialised.join("&");

        $.ajax({
            url: "php/submittech.php?" + query,
            success: function(json){
                $('#progress').slideDown();
                var response = json;
                console.log(response);
                if (response.error){
                    switch(response.error) {
                        case "already_registered":
                            $('#report').html("<h3>Oops</h3><p>It looks like you've already signed up with that email address! Thanks!</p>").slideDown();
                        break;
                        case "noemail":
                            $('#report').html("<h3>Oops</h3><p>Please try again with a valid email address so we can keep you posted</p>").slideDown();
                        break;
                    }

                } else {
                    $('#report').html("<h3>Thank you!</h3><p>We'll be in touch. And don't forget to have a look at the github repo. we'd love some help!</p>").slideDown();
                    $('#progress').slideUp();
                }
            }
        });
    });
});
