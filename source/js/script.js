$(document).ready(function(){
  $('.comments').slick({
    arrows:true,
    dots:false,
    slidesToScroll:1,
    autoplay:true,
  });

  $('.header__nav-btn').on('click',function(){
    $('.list').toggleClass('list--activ');
  });
});