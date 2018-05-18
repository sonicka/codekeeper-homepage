$(document).ready(function ($) {
    $(".price-plan").on('click', function () {
        var active = $(this).attr('rel');
        var inactive;
        if (active === "monthly") {
            inactive = "annual"
        } else {
            inactive = "monthly"
        }
        $('.' + active).show();
        $('.' + inactive).hide();
        $('.price-plan').removeClass('active');
        $(this).addClass('active');
    });

    $("a").on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });
});