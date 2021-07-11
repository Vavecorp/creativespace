$(document).ready(function () {

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 70) {
      $(".nav-parent").addClass("nav-changeColor")
    }
    else {
      $(".nav-parent").removeClass("nav-changeColor")
    }
  });

  $(".hamburger").click(function () {
    $(".bar1").toggleClass("bar1-open")
    $(".bar2").toggleClass("bar2-open")
    $(".bar3").toggleClass("bar3-open")
    $(".nav-menu").toggleClass("menu-open")

    let scroll = $(window).scrollTop();
    if (scroll < 70) {
      $(".nav-parent").toggleClass("nav-changeColor")
    }
  })

  $(".nav-item").click(function () {

    $(".bar1").toggleClass("bar1-open")
    $(".bar2").toggleClass("bar2-open")
    $(".bar3").toggleClass("bar3-open")
    $(".nav-menu").toggleClass("menu-open")
  })

  AOS.init();

  // $('.carousle').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear'
  // });
  $('.carousle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed:2500,
  });

  // ****************************************************************************************************************



  if($(window).width() < 767)
  {
    $('.gallary').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.gallary-nav'
    });
    $('.gallary-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.gallary',
      // dots: true,
      centerMode: true,
      arrows: true,
      focusOnSelect: true
    });
  } 
  else if($(window).width() > 1600) {
    $('.gallary').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.gallary-nav'
    });
    $('.gallary-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.gallary',
      dots: true,
      centerMode: true,
      arrows: true,
      focusOnSelect: true
    });
  }
  else {
    $('.gallary').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.gallary-nav'
    });
    $('.gallary-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.gallary',
      dots: true,
      centerMode: true,
      arrows: true,
      focusOnSelect: true
    });
  }

  // ************************************************MODAL FORM *********************************************************


  $(".hero-cta").click(function (){
  $(".modal-form-parent").addClass("show-modal")
  })
  $(".close-modal").click(function (){
    $(".modal-form-parent").removeClass("show-modal")
    })

})