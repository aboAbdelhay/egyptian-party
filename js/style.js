/// <reference types="../@types/jquery" />
// !=======> loading <=======
$(function () {
  $(".loader").hide(3000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css({
        overflow: "auto",
      });
      $(".loading").remove();
      new WOW().init();
    });
  });
});
// !=======> UP <=======
$(window).on("scroll", function () {
  if ($(window).scrollTop() > $("#sliderDown").offset().top) {
    $("#up").fadeIn(1000);
  } else {
    $("#up").fadeOut(1000);
  }
});
$("#up").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
// !=======> navLink click <=======
$("nav ul li a[href^='#']").on("click", function(event) {
  event.preventDefault();
  $("nav ul li a[href^='#']").removeClass("active");
  $(this).addClass("active");
  let target = $(this).attr("href");
  let offsetTop = $(target).offset().top;
  $("html, body").animate({ scrollTop: offsetTop }, 1000);
});
// !=======> navLink scroll <=======
$(window).on("scroll", function() {
  let scrollPos = $(window).scrollTop();
  $("nav ul li a[href^='#']").each(function() {
      let refElement = $($(this).attr("href"));
      if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
      ) {
          $("nav ul li a").removeClass("active");
          $(this).addClass("active");
      } else {
          $(this).removeClass("active");
      }
  });
});
// !=======>  <=======
let isOPen = false;
$(".menu").on("click", function () {
  if (isOPen) {
    $(".navbar").animate({ left: "-250px" }, 1000);
    $(this).animate({ left: "20px" }, 1000);
    isOPen = false;
  } else {
    $(".navbar").animate({ left: "0" }, 1000);
    $(this).animate({ left: "270px" }, 1000);
    isOPen = true;
  }
});
$(".close").on("click", function () {
  $(".navbar").animate({ left: "-250px" }, 1000);
  $(".menu").animate({ left: "20px" }, 1000);
  isOPen = false;
});
$("#sliderDown h3").on("click", function () {
  $(this).next().siblings(".description").slideUp(1000);
  $(this).next().slideToggle(1000);
});
// !=======> count <=======
$(function () {
  const timeTo = "4 February 2025 12:00:00";
  function calcDate() {
    const now = new Date().getTime();
    const futureDate = new Date(timeTo).getTime();
    let timeDifference = (futureDate - now) / 1000;

    const days = Math.floor(timeDifference / (24 * 60 * 60));
    timeDifference %= 24 * 60 * 60;
    const hours = Math.floor(timeDifference / 3600);
    timeDifference %= 3600;
    const mins = Math.floor(timeDifference / 60);
    const secs = Math.floor(timeDifference % 60);

    $(".days").text(`${days} D`);
    $(".hours").text(`${hours} h`);
    $(".minutes").text(`${mins} m`);
    $(".seconds").text(`${secs} s`);
  }

  setInterval(function () {
    calcDate();
  }, 1000);
});
// !=======> textarea <=======
$("textarea").on("keyup", function () {
  let text = $(this).val();
  if (text.length > 100) {
    $("p span").html("your available character finished");
  } else {
    $("p span").html(100 - text.length);
  }
});
// !=======> textarea <=======
