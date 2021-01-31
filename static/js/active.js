(function ($) {
    "use strict";

jQuery(document).ready(function($){
    // sticky Menu
    $(".stickyNav").sticky({ 
        topSpacing: 0,
        zIndex: 11
    });
    
    $("ul.nav.navbar-nav li a").on('click', function(){
        $(".navbar-collapse").removeClass("in")
    });

    // Smoot Scroll Effect
    $('li.smooth-scroll a').bind('click', function(event){
        var $anchor = $(this);
        var headerHeight = '52';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')) .offset().top - headerHeight + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    //Scroll To top Function apply
    $(window).scroll(function(){
        var ScrollToTop = $(window).scrollTop();
        //ScrollToTop Function
        if( ScrollToTop > 500){
            $(".ScrollToTop").fadeIn();
        }
        else{
            $(".ScrollToTop").fadeOut();
        }
    });

    //Scroll To top With animate
    $(".ScrollToTop").on('click', function(){
        $("body, html").animate({'scrollTop' : 0}, 1000, 'easeInOutExpo');
        return false
    });

    // scrollspy
    $('body').scrollspy({
        target : '.navbar-collapse',
        offset : 55
    });

    // Mixitup
    $(function(){
        $('#Mixitup').mixItUp();
    });

    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // owlCarousel
    $("#testimonial-slide").owlCarousel({
        loop:true,
        autoplay: true,
        autoPlay : 5000,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    
    // Partnar Slider
    $("#partner-slider").owlCarousel({
        autoplay: true,
        autoPlay : 3000,
        items: 4,
        dots: false,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });

    // Magni Fic Popup
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            closeBtnInside: false,
            fixedContentPos: true,
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions 
    magnifPopup();

    // WOW JS
    new WOW().init();

    /* Typed subtitle */
    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 5000,
        typeSpeed: 0,
        loop: true
    });

    /* Parallax Effect */
    var $parallax=$('.parallax-bg');
    if ($parallax.length){
        $parallax.parallax("50%", 0.3);
    }
});

jQuery(window).load(function(){
    $(".MnabiPreloder").fadeOut(500);
});

}(jQuery));