let btn = document.querySelector(".scroll-down");

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

  $('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    rtl:true,
    center:true,
    margin:20,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    autoplay:true,
    autoplayTimeout:2000,
    responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 2
        },
    
        1024: {
          items: 4
        },
    
        1366: {
          items: 4
        }
      }
});
