$(document).ready(function ($) {
    $(".price-plan").on('click', function () {
        var target = $(this).attr('rel');
        var other;
        if (target === "monthly") {
            other = "annual"
        } else {
            other = "monthly"
        }
        $('.' + target).show();
        $('.' + other).hide();
    });

    $("a").on('click', function (event) {
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
        return false;
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass("sticky");
    }
    else {
        $('.navbar').removeClass("sticky");
    }
});