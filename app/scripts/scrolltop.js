! function ($) {
    $(function () {
        $(window).scroll(function() {
            if($(this).scrollTop() > 0) {
                if(!$(".navbar-fixed-top").hasClass('unieke-navigatie')) {
                    $(".navbar-fixed-top").addClass('unieke-navigatie');
                }
            } else if($(".navbar-fixed-top").hasClass('unieke-navigatie')) {
                $(".navbar-fixed-top").removeClass('unieke-navigatie');
            }
        });
        var $window = $(window);
        // Bind to scroll
    })
}(window.jQuery)