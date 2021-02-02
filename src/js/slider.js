      $('.cards-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  // prevArrow: '<div class="prev"></div>',
  // nextArrow: '<div class="next"></div>',
  asNavFor: '.bottom-nav',
  mobileFirst:true,
    responsive: [
    {
      breakpoint: 1365,
        settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 319,
      settings: {
        arrows: false,
      }
    }
  ],
});
$('.bottom-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.cards-list',
  dots: false,
  centerMode: false,
  arrows: true,
  // prevArrow: '<div class="prev"></div>',
  // nextArrow: '<div class="next"></div>',
  variableWidth: true,
  focusOnSelect: true,
  mobileFirst: true,
  
  responsive: [
    {
      breakpoint: 1365,
      settings: {
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 319,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ],
});