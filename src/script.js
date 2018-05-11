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


    // todo smooth scroll not working when redirected to different html page
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            var nav = $(hash);
            if (nav.length) {
                var contentNav = nav.offset().top;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }


        } // End if
    });

});