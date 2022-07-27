$(document).ready(function(){
    
    $('.products .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
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

    $('.Deal .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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

    
    $('.popular-product .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });


    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:7,
                nav:true,
                loop:false
            }
        }
    });

    $('.news .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

    $('.testim .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsiveClass:true,
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
    var mixer = mixitup('.popular .container');

 
        
    $('.about-caro .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsiveClass:true,
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

    /*Scroll to top */
    var scrollButton = $('#scroll-top');

    $(window).scroll(function(){
        $(this).scrollTop()>=500?scrollButton.show():scrollButton.hide();
    });
    scrollButton.click(function(){
        $('html , body').animate({
            scrollTop:0
        },600);
    });
     

    /*Navbar click on link to add class active*/
    $('.navbar-nav .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    
    });
   

       /*Truger Nice Scroll
       $('html').niceScroll({
        cursorcolor:'#35bdaf',
        cursorwidth:"12px",
        cursorborder:'1px solid #35bdaf'
    });*/
        /*when scroll body >>sticky nav
        $(window).scroll(function () {
            var sc = $(this).scrollTop();
            if (sc > 100) {
                $('nav').addClass('sticky');
            }
            else {
                $('nav').removeClass('sticky');
    
            };*/
            /*
            $(window).scroll(function(){
                var sc = $(this).scrollTop();
                if(sc>100){
                    $('.navbar').addClass('sticky');
                }else{
                    $('.navbar').removeClass('sticky');
                }
            });
            */
            //Magnific popup
           /* $('.parent-container').magnificPopup({
                delegate: 'a', // child items selector, by clicking on it popup will open
                type: 'image'
                // other options
              });*/
/*
              $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
                    tNext: 'Next (Right arrow key)',
                    enabled: false, // set to true to enable gallery
                  
                    preload: [0,2], // read about this option in next Lazy-loading section
                  
                    navigateByImgClick: true,
                  
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                  
                    tPrev: 'Previous (Left arrow key)', // title for left button
                    tNext: 'Next (Right arrow key)', // title for right button
                    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
                  },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });

*/

/*popup
$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }
    
});

$('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
        verticalFit: false
    }
});

$('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

*/

$(window).scroll(function(){
    var windowScroll = $(window).scrollTop();

    //console.log( windowScroll)

    if(windowScroll > 50){
        $('.navbar').addClass('fixed-header');
    }else{
        $('.navbar').removeClass('fixed-header');
    }
});




  $("#flip").click(function(){
    $("#panel").show();
  });


  /*Preloader */
  $('.loader').delay(1000).fadeOut();


//   Magnific popup
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
    }
});


  });