$(document).ready(function () {
    $(".price-plan").on('click', function () {
        var target = $(this).attr('rel');
        var other;
        if (target === "monthly") {
            other = "annual"
        } else {
            other = "monthly"
        }
        $('.' + target).show(); // Shows
        $('.' + other).hide(); // hides
    });
});