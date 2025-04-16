$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".navbar").toggleClass("active");
  });

  $("#login-btn").click(function () {
    $(".login-form").addClass("active");
  });

  $("#close-login-form").click(function () {
    $(".login-form").removeClass("active");
  });

  $(window).on("scroll load", function () {
    if (scrollY > 0) {
      $(".header").addClass("active");
    } else if (scrollY >= 0) {
      $(".header").removeClass("active");
    }
  });

  $(".menu-cat").click(function () {
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".filter-image").show();
    } else {
      $(".filter-image")
        .not("." + filter)
        .hide();
      $(".filter-image")
        .filter("." + filter)
        .show();
    }
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".menu-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".review-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
