$(document).ready(function(){
    $("#product_carousel").owlCarousel({
      items: 1,
      loop:false,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      navText: ['<span aria-label="Previous">‹</span>','<span aria-label="Next">›</span>'],
      lazyLoad: true
    });
  });

