$(document).ready(function(){
    var countDownDate = new Date("feb 20, 2024 00:00:00").getTime();
    var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


    //    Slick Carousel
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },  
            
        ]
    });

    //    Slick Carousel
    $(".slider-2").slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },  
            
        ]
    });

    new WOW().init();

    // init Isotope
    var $grid = $('.grid').isotope({
        // options
        });
       // filter items on button click
     
        $('.filter-button-group').on( 'click', 'button', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
     
         // filter items on button active
         $(this).addClass('active').siblings().removeClass('active');
         });

});