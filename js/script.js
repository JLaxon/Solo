/* =========================================
   Preloader
========================================= */
$(window).on('load', function() { // makes sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* =========================================
   Team
========================================= */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
})

/* =========================================
   Progress Bars
========================================= */
$("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
        $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 1000);
    });
    this.destroy();
}, {offset: 'bottom-in-view'});

/* =========================================
   Responsive Tabs
========================================= */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* =========================================
   Portfolio
========================================= */
$(window).on('load', function () {
    // Initialize Isotope
    $("#isotope-container").isotope({
    });

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function() {
        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        })

        // activate button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});