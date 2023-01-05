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
// classlist 在鑽研

// function triggerClick() {
//   $("#list_filter").on("click", function () {
//     console.log("1");
//     $("#fp-nav li:nth-child(2)").on("click", function () {});
//   });
// }

// sound icon
function changeSoundIcon(anchor) {
  var icon2 = anchor.querySelector("i");
  console.log(icon2);
  icon2.classList.toggle("fa-volume-xmark");
  icon2.classList.toggle("fa-volume-high");
}

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

// audio play/toggle play audio
var audio = new Audio("../audio/song-yumejis-theme-shigeru-umebayashi.mp3");
var isPlaying = false;

function togglePlay() {
  // 條件運算子
  isPlaying ? audio.pause() : audio.play();
}
// 播放(onplaying)時,isPlaying為true
audio.onplaying = function () {
  isPlaying = true;
};
// 暫停(onpause)時,isPlaying為false
audio.onpause = function () {
  isPlaying = false;
};
