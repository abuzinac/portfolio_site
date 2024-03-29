// loader js
$(window).on("load", function () {

    $(".loader .inner").fadeOut(1500, function () {
        $(".loader").fadeOut(1750);
    });

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: "linear",
            queue: false
        }

    });

});


$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Developer.", "Web Developer.", "Student."],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }

    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;


    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            });

            countUpFinished = true;

        }


    });

    $("[data-fancybox]").fancybox();


    $("#filters a").click(function () {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: "linear",
                queue: false
            }

        });

        return false;

    });


    // sliding to section
    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;

        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");

    });


    // sticky menubar
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        const body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }

});