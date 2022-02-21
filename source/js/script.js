$(document).ready(function(){
  $('.comments').slick({
    arrows:true,
    dots:false,
    slidesToScroll:1,
    autoplay:true,
    responsive:[
      {
        breakpoint: 780,
        settings: {
          arrows:false,
          dots:true,
          autoplay:false,
        }
      }
    ]
  }
  );
//кнопка
  $('.header__nav-btn').on('click',function(){
    $('.list,.header__nav-btn').toggleClass('list--activ');
  });
  //меню и картинка при 330пх
  $('.header__nav-btn').on('click',function(){
    $('.header__inner-title').toggleClass('menu__bottom');
  });
  $('.header__nav-btn').on('click',function(){
    $('.header').toggleClass('header__bottom-img');
  });
  //меню и картинка при 900пх
  $('.header__nav-btn').on('click',function(){
    $('.header__inner-title-text').toggleClass('header__inner-title-text-bottom');
  });
  $('.header__nav-btn').on('click',function(){
    $('.header').toggleClass('header__bottom-img-big');
  });
  $('.table-box').slick({
    arrows:false,
    dots:true,
    slidesToScroll:1,
    autoplay:false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    infinite: false,
  })
});