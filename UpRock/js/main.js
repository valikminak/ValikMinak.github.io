$(".award-list__show-more").on("click", function() {
  $(this).addClass("active");
  $(".award-list__hidden").addClass("active");
});
$(".hidde-list").on("click", function() {
  $(".award-list__show-more").removeClass("active");
  $(".award-list__hidden").removeClass("active");
});

$(".study-product").on("click", function() {
  $(".box-study-product")
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".startups").on("click", function() {
  $(".box-startups")
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".app-mobile").on("click", function() {
  $(".box-app-mobile")
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".corporate").on("click", function() {
  $(".box-corporate")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".commerce").on("click", function() {
  $(".box-commerce")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".media").on("click", function() {
  $(".box-media")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".promo-site").on("click", function() {
  $(".box-promo-site")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".longreads").on("click", function() {
  $(".box-longreads")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".lendings").on("click", function() {
  $(".box-lendings")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".branding").on("click", function() {
  $(".box-branding")
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".graphics").on("click", function() {
  $(".box-graphics")
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".header-menu__media").on("click", function() {
  $(".header-menu").toggleClass("active");
});


$(document).ready(function() {
  $(".services-box__click").slick({
    responsive: [
      {
        breakpoint: 2048,
        settings: "unslick"
      },
      {
        breakpoint: 650,
        settings: {
          settings: "slick",
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
         
        }
      }
    ]
  });
});
