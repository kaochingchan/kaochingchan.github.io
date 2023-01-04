// owl-carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// new fullpage("#fullpage", {
//   //options here
//   scrollHorizontally: true,
//   navigation: true,
//   navigationTooltips: ["登陸頁", "場次查詢", "自動選片", "焦點影評"],
//   showActiveTool: true,
//   // menu: "#menu",
//   // anchors: ["first_page", "second_page", "third_page"],
//   // scrollingSpeed: 1000,
// });

// love icon
function changeLoveIcon(anchor) {
  var icon = anchor.querySelector("i");
  console.log(icon);
  icon.classList.toggle("fa-solid");
}

function triggerClick() {
  $("#list_filter").on("click", function () {
    console.log("1");
    $("#fp-nav li:nth-child(2)").on("click", function () {});
  });
}
