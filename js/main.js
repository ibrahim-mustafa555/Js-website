//// Add scrollspy to <body>
//$('body').scrollspy({target: "#main-nav", offset: 50});



// navbar background color change on scroll

 $(window).scroll(function(){ 
    if($(document).scrollTop() >50) {
        $('nav').addClass('scroll');
    }
     else{
        $('nav').removeClass('scroll'); 
     }
     
 });


// Team Carousel
$('.team-carousel').owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Process Carousel
$('.process-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    navText: 
    ["<span class='carousel-nav-right'><i class='fas fa-long-arrow-alt-left'></i></span>",
     
    "<span class='carousel-nav-left'><i class='fas fa-long-arrow-alt-right'></i></span>"],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

//    // Latest-Work Shuffle 
//    $('.latest-work ul li').on('click', function () {
//        $(this).addClass('active').siblings().removeClass('active'); 
//        if($(this).data('class') === 'all') {
//            $('.shuffle-imges .col-md-4').css('opacity', 1);
//        }else {
//            $('.shuffle-imges .col-md-4').css('opacity', '.08');
//            $($(this).data('class')).parent().css('opacity', 1);
//        }
//    });


// Partner Carousel
$('.partner-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


// testimonial Carousel
$('.testimonial-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
   
// Counter 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// scroll top element
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function (){
    if($(this).scrollTop()> 300)
    {
     scrollButton.show();
    }
    else
   {
       scrollButton.hide(); 
   }

});

// Click On Button Top     
        
    scrollButton.on('click',function (){
            $('html,body').animate({scrollTop: 0},300);    
    });


// Loading Screen 

$(document).ready(function(){
    
     $('#loading').fadeOut(2000);

})


 
//
//$(function(){
//	$('#container').mixItUp();
//});
