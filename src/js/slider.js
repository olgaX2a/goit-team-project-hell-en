      $('.cards-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.bottom-nav'
});
$('.bottom-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.cards-list',
  dots: false,
  centerMode: false,
  arrows: true,
  variableWidth: true,///
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 3
      }
    }
  ]
});