$(function () {
    $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 700,
  fade: false,
  
  
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
      infinite: true,
      breakpoint: 1279,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      }
    }
  ]
    })
});