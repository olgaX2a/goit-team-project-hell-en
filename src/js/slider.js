$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  asNavFor: '.slider-nav',
  mobileFirst: true,
  // variableWidth: true,
    responsive: [
    {
      breakpoint: 1366,
        settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],

});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  mobileFirst: true,
});



