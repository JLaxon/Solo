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
});

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

/* =========================================
   Magnifier
========================================= */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =========================================
   Testimonials
========================================= */
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
   Stats
========================================= */
$(function () {
    $(".counter").counterup({
        delay: 10,
        time: 2000,
    });
});

/* =========================================
   Clients
========================================= */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
   Google Map
========================================= */
$(window).on("load", function () {
    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat:40.712685, lng: -74.006920};

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
});