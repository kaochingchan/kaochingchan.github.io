// 宣告隨機電影陣列randomMovieArray，裡面放電影IMDB_ID
var randomMovieArray = [
  "0118694",
  "0068646 ",
  "0062622",
  "1856101",
  "1160419",
  "0114787",
  "0050613",
  "0085933",
  "0093389",
];
// 先取出亂數n
var randomOrig = Math.random() * randomMovieArray.length - 1;
var randomNumber = Math.floor(randomOrig + 1);
// 取randomArray中第n項
var randomMovie = randomMovieArray[randomNumber];

// http://www.omdbapi.com/?t=${movieName}&apikey=${key}
function autoSelected() {
  console.log(randomMovie);
  fetch("http://www.omdbapi.com/?i=tt" + randomMovie + "&apikey=cbc86fab")
    .then(function (response) {
      // 返還json資料
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var selectedImg = data.Poster;
      $("#selected_poster").css("background-image", "url(" + selectedImg + ")");
      var output_temp =
        '<h1 id="output_t">' +
        data.Title +
        "</h1>" +
        '<div class="output-text">' +
        "<h2>導演</h2>" +
        '<h2 id="output_dir">' +
        data.Director +
        "</h2>" +
        "</div>" +
        '<div class="output-text">' +
        "<h2>主演</h2>" +
        '<h2 id="output_str">' +
        data.Actors +
        "</h2>" +
        "</div>" +
        '<div class="output-text">' +
        "<h2>片長</h2>" +
        '<h2 id="output_min"> ' +
        data.Runtime +
        "</h2>" +
        "</div>" +
        '<div class="output-text">' +
        "<h2>年份</h2>" +
        '<h2 id="output_yr">' +
        data.Year +
        "</h2>" +
        "</div>";

      $(".selected_con").html("");
      $(".selected_con").append(output_temp);
    });
}
