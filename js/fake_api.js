var randomMovieArray = [
  {
    Title: "野雛菊",
    Year: "1966",
    Runtime: "74分鐘",
    Genre: "Comedy",
    Director: "Vera Chytilová",
    Writer: "Vera Chytilová, Pavel Jurácek, Ester Krumbachová",
    Actors: "Ivana Karbanová, Jitka Cerhová, Marie Cesková",
    Plot: "After realizing that all world is spoiled, Marie and Marie are committed to be spoiled themselves. They rip off older men, feast in lavish meals and do all kinds of mischief. But what is all this leading to?",
    Language: "Czech",
    Country: "Czechoslovakia",
    Awards: "2 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGVkNWNmYjktZmI4ZC00OWVhLWIwMDQtNTc3MTBhNzRmNjMzXkEyXkFqcGdeQXVyMTExMTE3NDg5._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "86%" },
    ],
    imdbRating: "7.3",
  },
  {
    Title: "教父",
    Year: "1972",
    Rated: "R",
    Released: "24 Mar 1972",
    Runtime: "175分鐘",
    Genre: "Crime, Drama",
    Director: "Francis Ford Coppola",
    Writer: "Mario Puzo, Francis Ford Coppola",
    Actors: "Marlon Brando, Al Pacino, James Caan",
    Plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    Language: "English, Italian, Latin",
    Country: "United States",
    Awards: "Won 3 Oscars. 32 wins & 30 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "9.2/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "100/100" },
    ],
    imdbRating: "9.2",
  },
  {
    Title: "2001太空漫遊",
    Year: "1968",
    Runtime: "149分鐘",
    Genre: "Adventure, Sci-Fi",
    Director: "Stanley Kubrick",
    Writer: "Stanley Kubrick, Arthur C. Clarke",
    Actors: "Keir Dullea, Gary Lockwood, William Sylvester",
    Plot: "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
    Language: "English, Russian, French",
    Country: "United Kingdom, United States",
    Awards: "Won 1 Oscar. 17 wins & 12 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.3/10" },
      { Source: "Rotten Tomatoes", Value: "92%" },
      { Source: "Metacritic", Value: "84/100" },
    ],
    imdbRating: "8.3",
  },
  {
    Title: "蜘蛛巢城",
    Year: "1957",
    Runtime: "110分鐘",
    Genre: "Drama, History",
    Director: "黑澤明",
    Writer: "Hideo Oguni, Shinobu Hashimoto, Ryûzô Kikushima",
    Actors: "三船敏郎, 千秋實, 山田五十鈴",
    Plot: "A war-hardened general, egged on by his ambitious wife, works to fulfill a prophecy that he would become lord of Spider's Web Castle.",
    Language: "Japanese",
    Country: "Japan",
    Awards: "4 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGYxZjA2M2ItYTRmNS00NzRmLWJkYzgtYTdiNGFlZDI5ZjNmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "東京物語",
    Year: "1953",
    Runtime: "136分鐘",
    Genre: "Drama",
    Director: "小津安二郎",
    Writer: "Kôgo Noda, Yasujirô Ozu",
    Actors: "笠智眾, 東山千榮子, 山村聰, 原節子",
    Plot: "An old couple visit their children and grandchildren in the city, but receive little attention.",
    Language: "Japanese, English",
    Country: "Japan",
    Awards: "3 wins",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ4ZTRiODktNjAzZC00Nzg1LTk1YWQtNDFmNDI0NmZiNGIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.2/10" },
      { Source: "Rotten Tomatoes", Value: "100%" },
    ],
    imdbRating: "8.2",
  },
  {
    Title: "俘虜",
    Year: "1983",
    Runtime: "123分鐘",
    Genre: "Drama, War",
    Director: "大島渚",
    Writer: "Nagisa Ôshima, Paul Mayersberg, Lourens van der Post",
    Actors: "David Bowie, Tom Conti, 坂本龍一",
    Plot: "During W.W. II, a British colonel tries to bridge the cultural divides between a British P.O.W. and the Japanese camp commander in order to avoid blood-shed.",
    Language: "English, Japanese",
    Country: "United Kingdom, New Zealand, Japan",
    Awards: "Won 1 BAFTA Award10 wins & 7 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzY0Zjc4Y2YtNDM4Mi00NmRmLTg4Y2UtYmEyMTU0MmY3ZmM1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.2/10" },
      { Source: "Rotten Tomatoes", Value: "83%" },
      { Source: "Metacritic", Value: "53/100" },
    ],
    imdbRating: "7.2",
  },
  {
    Title: "末代皇帝",
    Year: "1987",
    Runtime: "163分鐘",
    Genre: "Biography, Drama, History",
    Director: "Bernardo Bertolucci",
    Writer: "Enzo Ungari, Mark Peploe, Bernardo Bertolucci",
    Actors: "尊龍, 陳沖, Peter O'Toole",
    Plot: "Dramatization of China's last emperor, Puyi.",
    Language: "English, Mandarin, Japanese",
    Country: "United Kingdom, China, Italy, France, United States",
    Awards: "Won 9 Oscars. 60 wins & 22 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTk0NDU4YmItOTk0ZS00ODc2LTkwNGItNWI5MDJkNTJiYWMxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "87%" },
      { Source: "Metacritic", Value: "76/100" },
    ],
    imdbRating: "7.7",
  },
  {
    Title: "銀翼殺手",
    Year: "1982",
    Runtime: "117分鐘",
    Genre: "Action, Drama, Sci-Fi",
    Director: "Ridley Scott",
    Writer: "Hampton Fancher, David Webb Peoples, Philip K. Dick",
    Actors: "Harrison Ford, Rutger Hauer, Sean Young",
    Plot: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    Language: "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
    Country: "United States",
    Awards: "Nominated for 2 Oscars. 13 wins & 19 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "89%" },
      { Source: "Metacritic", Value: "84/100" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "沙丘",
    Year: "2021",
    Runtime: "155分鐘",
    Genre: "Action, Adventure, Drama",
    Director: "Denis Villeneuve",
    Writer: "Jon Spaihts, Denis Villeneuve, Eric Roth",
    Actors: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
    Plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    Language: "English, Mandarin",
    Country: "Canada, United States",
    Awards: "Won 6 Oscars. 167 wins & 281 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.0/10" },
      { Source: "Rotten Tomatoes", Value: "83%" },
      { Source: "Metacritic", Value: "74/100" },
    ],
    imdbRating: "8.0",
  },
  {
    Title: "狂人皮埃洛",
    Year: "1965",
    Runtime: "110分鐘",
    Genre: "Crime, Drama, Romance",
    Director: "Jean-Luc Godard",
    Writer: "Rémo Forlani, Jean-Luc Godard, Lionel White",
    Actors: "Jean-Paul Belmondo, Anna Karina, Graziella Galvani",
    Plot: "Pierrot escapes his boring society and travels from Paris to the Mediterranean Sea with Marianne, a girl chased by hit-men from Algeria. They lead an unorthodox life, always on the run.",
    Language: "French, English, Italian",
    Country: "France, Italy",
    Awards: "Nominated for 1 BAFTA Award2 wins & 2 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ0OTc4MDcxMl5BMl5BanBnXkFtZTgwNjIzMjA0NzE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "88%" },
    ],
    imdbRating: "7.5",
  },
  {
    Title: "一一",
    Year: "2000",
    Runtime: "173分鐘",
    Genre: "Drama, Romance",
    Director: "楊德昌",
    Writer: "楊德昌",
    Actors: "吳念真, 金燕玲, 尾形一成",
    Plot: "Each member of a middle-class Taipei family seeks to reconcile past and present relationships within their daily lives.",
    Language: "Mandarin, Min Nan, Hokkien, English, Japanese, French",
    Country: "N/A",
    Awards: "15 wins & 25 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDNkMGUyYzUtNjM0ZC00NDM2LWE5ZjEtMjliNzIxMmMzZThhXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Metacritic", Value: "93/100" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "悲情城市",
    Year: "1989",
    Runtime: "157分鐘",
    Genre: "Drama, History",
    Director: "侯孝賢",
    Writer: "T'ien-wen Chu, Nien-Jen Wu",
    Actors: "梁朝偉, 辛樹芬, 陳松勇",
    Plot: 'The story of a family embroiled in the "White Terror" that was wrought on the Taiwanese people by the Kuomintang government after their arrival from mainland China in the late 1940s.',
    Language: "Mandarin, Min Nan, Japanese, Cantonese, Shanghainese",
    Country: "Hong Kong, Taiwan",
    Awards: "8 wins & 6 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzBkNzI3YWYtMWE4MC00Y2JlLWIwOGUtNjVjZDFkMTFhYzhmXkEyXkFqcGdeQXVyNDY5NjU5MDE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "100%" },
    ],
    imdbRating: "7.8",
  },
  {
    Title: "花樣年華",
    Year: "2000",
    Runtime: "98 min",
    Genre: "Drama, Romance",
    Director: "王家衛",
    Writer: "王家衛",
    Actors: "梁朝偉, 張曼玉, 蕭炳林",
    Plot: "Two neighbors form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs.",
    Language: "Cantonese, Shanghainese, French, Spanish",
    Country: "Hong Kong, France",
    Awards: "Nominated for 1 BAFTA Award46 wins & 51 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWVjNjMwZTgtMGYyYy00NmVhLWE1NDItMzFhMmJkYTNjYWIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "91%" },
      { Source: "Metacritic", Value: "86/100" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "重慶森林",
    Year: "1994",
    Runtime: "102分鐘",
    Genre: "Comedy, Crime, Drama",
    Director: "王家衛",
    Writer: "王家衛",
    Actors: "林青霞,王菲,梁朝偉,金城武",
    Plot: "Two melancholy Hong Kong policemen fall in love: one with a mysterious female underworld figure, the other with a beautiful and ethereal waitress at a late-night restaurant he frequents.",
    Language: "Cantonese, English, Japanese, Hindi, Mandarin, Punjabi, Urdu",
    Country: "Hong Kong",
    Awards: "10 wins & 23 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmEyYzUwYTMtYTNiNS00YWE4LWIxZTEtNTVlZDBlNmQ4NGE2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.0/10" },
      { Source: "Rotten Tomatoes", Value: "88%" },
      { Source: "Metacritic", Value: "78/100" },
    ],
    imdbRating: "8.0",
  },
  {
    Title: "雙面薇若妮卡",
    Year: "1991",
    Runtime: "98分鐘",
    Genre: "Drama, Fantasy, Music",
    Director: "Krzysztof Kieslowski",
    Writer: "Krzysztof Kieslowski, Krzysztof Piesiewicz",
    Actors: "Irène Jacob, Wladyslaw Kowalski, Halina Gryglaszewska",
    Plot: "Two parallel stories about two identical women; one living in Poland, the other in France. They don't know each other, but their lives are nevertheless profoundly connected.",
    Language: "French, Polish, Italian",
    Country: "France, Poland, Norway",
    Awards: "11 wins & 13 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmE0ZGRiMDgtOTU0ZS00YWUwLTk5YWQtMzhiZGVhNzViMGZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "83%" },
      { Source: "Metacritic", Value: "86/100" },
    ],
    imdbRating: "7.7",
  },
  {
    Title: "地下社會",
    Year: "1995",
    Runtime: "167分鐘",
    Genre: "Comedy, Drama, Fantasy",
    Director: "Emir Kusturica",
    Writer: "Dusan Kovacevic, Emir Kusturica",
    Actors: "Predrag 'Miki' Manojlovic, Lazar Ristovski, Mirjana Jokovic",
    Plot: "A group of Serbian socialists prepares for the war in a surreal underground filled by parties, tragedies, love, and hate.",
    Language: "Serbian, German, French, English, Russian",
    Country:
      "Federal Republic of Yugoslavia, France, Germany, Bulgaria, Czech Republic, Hungary, United Kingdom, United States",
    Awards: "8 wins & 11 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzI4YTVmMWEtMWQ3MS00OGE1LWE5YjMtNjc4NWJmYjRmZTQyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "86%" },
      { Source: "Metacritic", Value: "79/100" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "郊遊",
    Year: "2013",
    Runtime: "138分鐘",
    Genre: "Drama",
    Director: "蔡明亮",
    Writer: "Peng Fei Song, Ming-liang Tsai, Cheng-Yu Tung",
    Actors: "李康生,陳湘琪,楊貴媚,陸弈靜",
    Plot: "An alcoholic man and his two young children barely survive in Taipei. They cross path with a lonely grocery clerk who might help them make a better life.",
    Language: "Mandarin",
    Country: "Taiwan, France",
    Awards: "17 wins & 20 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI5NjE4NTQyMl5BMl5BanBnXkFtZTgwMjE4NTgyMjE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.9/10" },
      { Source: "Rotten Tomatoes", Value: "86%" },
      { Source: "Metacritic", Value: "84/100" },
    ],
    imdbRating: "6.9",
  },
  {
    Title: "潛行者",
    Year: "1979",
    Runtime: "162分鐘",
    Genre: "Drama, Sci-Fi",
    Director: "Andrei Tarkovsky",
    Writer: "Arkadiy Strugatskiy, Boris Strugatskiy, Andrei Tarkovsky",
    Actors: "Alisa Freyndlikh, Aleksandr Kaydanovskiy, Anatoliy Solonitsyn",
    Plot: "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
    Language: "Russian",
    Country: "Soviet Union",
    Awards: "2 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "100%" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "第七封印",
    Year: "1957",
    Runtime: "96分鐘",
    Genre: "Drama, Fantasy",
    Director: "Ingmar Bergman",
    Writer: "Ingmar Bergman",
    Actors: "Max von Sydow, Gunnar Björnstrand, Bengt Ekerot",
    Plot: "A knight returning to Sweden after the Crusades seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
    Language: "Swedish, Latin",
    Country: "Sweden",
    Awards: "10 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWM3MmE0OGYtOGVlNC00OWE1LTk5ZTAtYmUwMDIwM2ZlNWJiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "88/100" },
    ],
    imdbRating: "8.1",
  },
  {
    Title: "星際效應",
    Year: "2014",
    Runtime: "169分鐘",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "United States, United Kingdom, Canada",
    Awards: "Won 1 Oscar. 44 wins & 148 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.6/10" },
      { Source: "Rotten Tomatoes", Value: "73%" },
      { Source: "Metacritic", Value: "74/100" },
    ],
    imdbRating: "8.6",
  },
  {
    Title: "花火",
    Year: "1997",
    Runtime: "103分鐘",
    Genre: "Crime, Drama, Romance",
    Director: "北野武",
    Writer: "北野武",
    Actors: "北野武, 岸本加世子, 大杉漣",
    Plot: "Nishi leaves the police in the face of harrowing personal and professional difficulties. Spiraling into depression, he makes questionable decisions.",
    Language: "Japanese",
    Country: "Japan",
    Awards: "23 wins & 24 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODk4MzE5NjgtN2ZhOS00YTdkLTg0YzktMmE1MTkxZmMyMWI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
    ],
    imdbRating: "7.7",
  },
  {
    Title: "驚魂記",
    Year: "1960",
    Runtime: "109分鐘",
    Genre: "Horror, Mystery, Thriller",
    Director: "Alfred Hitchcock",
    Writer: "Joseph Stefano, Robert Bloch",
    Actors: "Anthony Perkins, Janet Leigh, Vera Miles",
    Plot: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 4 Oscars. 7 wins & 14 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
      { Source: "Metacritic", Value: "97/100" },
    ],
    imdbRating: "8.5",
  },
  {
    Title: "橡皮頭",
    Year: "1977",
    Runtime: "89分鐘",
    Genre: "Fantasy, Horror",
    Director: "David Lynch",
    Writer: "David Lynch",
    Actors: "Jack Nance, Charlotte Stewart, Allen Joseph",
    Plot: "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
    Language: "English",
    Country: "United States",
    Awards: "3 wins & 2 nominations",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "90%" },
      { Source: "Metacritic", Value: "87/100" },
    ],
    imdbRating: "7.3",
  },
];

function autoSelected() {
  // 先取出亂數n
  var randomOrig = Math.random() * randomMovieArray.length - 1;
  var randomNumber = Math.floor(randomOrig + 1);
  // 取randomArray中第n項
  var randomMovie = randomMovieArray[randomNumber];
  var selectedImg = randomMovie.Poster;
  console.log(randomMovie);
  $("#selected_poster").html("");
  $("#selected_poster").css("background-image", "url(" + selectedImg + ")");
  var output_temp =
    '<h1 id="output_t">' +
    randomMovie.Title +
    "</h1>" +
    '<div class="output-text">' +
    "<h2>導演</h2>" +
    '<h2 class="light" >' +
    randomMovie.Director +
    "</h2>" +
    "</div>" +
    '<div class="output-text">' +
    "<h2>主演</h2>" +
    '<h2 class="light" >' +
    randomMovie.Actors +
    "</h2>" +
    "</div>" +
    '<div class="output-text">' +
    "<h2>片長</h2>" +
    '<h2 class="light" > ' +
    randomMovie.Runtime +
    "</h2>" +
    "</div>" +
    '<div class="output-text">' +
    "<h2>年份</h2>" +
    '<h2 class="light">' +
    randomMovie.Year +
    "</h2>" +
    "</div>" +
    '<div class="output-text">' +
    "<h2>IMDB評分</h2>" +
    '<h2 class="light">' +
    randomMovie.imdbRating +
    "</h2>" +
    "</div>";

  $(".selected_con").html("");
  $(".selected_con").append(output_temp);
}
