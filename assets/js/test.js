$(function () {  

    $('.owl-carousel').owlCarousel({
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

    
 $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });


  //magnific
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


    
$('.book-now').click(function () {
       
    $('html, body').animate({
        
        scrollTop: $('footer').offset().top
        
    }, 1000);
    
});







    var scrollButton = $('#scroll-top');
    $(window).scroll(function() {
      $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function() {
      $('html,body').animate({ 
        scrollTop : 0 
      }, 600);
    });

    
  });