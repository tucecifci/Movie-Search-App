const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const moviesContainer = document.querySelector("#movies");
let sortAscending = true;

searchButton.addEventListener("click", function () {
  const query = searchInput.value;
  searchMovies(query);
});
function searchMovies(query) {
  const apiKey = "befb4c19dd0617e7560221c0a7d21d93";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const movies = data.results;
      // console.log(movies);
      displayMovies(movies);
    })
    .catch((err) => console.log(err));
}

function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  searchInput.value = "";
  //bunu yapmamızın sebebi html içeriğini temizlemek için kullanıyoruz, ikinci bi arama yapıldığında tamamen sıfırdan yapması için yani çıkan sonuçlar üst üste binmesin diye.
  movies.forEach((movie) => {
    // const poster = movie.poster_path;
    // console.log(poster);
    const movieItems = document.createElement("div"); // bunu gelecek olan film bilgisini göstermesi için oluşturuyoruz.
    movieItems.classList.add("movie"); // burada da ona bi classlist atıyoruz ki gelen film özelliklerini css ile düzenliyoruz

    const moviePoster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "no_image_available.png"; //resim yoksa sayfanın daha düzenli gözükmesini sağlıyor- if'li uzun kullanım yerine ternary olarak yapıldı
    // console.log(moviePoster); burada img linkleri geldi

    // const movieText = movie.title;
    const movieText = `
    <img src="${moviePoster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.release_date}</p>
    `;

    movieItems.innerHTML = movieText;
    //Bu satır, movieItems adında oluşturulmuş olan HTML div elemanının içeriğini ayarlar. movieText değişkeni, filmle ilgili dinamik olarak oluşturulan HTML içeriğini içerir.Bu kod, movieItems elemanına movieText değişkenindeki HTML içeriğini ekler, böylece filmle ilgili görseller ve bilgiler bu div içinde görünür.
    moviesContainer.appendChild(movieItems);
    // Bu işlem, movieItems elemanının DOM'da görünmesini sağlar. Bu kod, moviesContainer elemanına movieItems elemanını ekler. Böylece, movieItems içinde oluşturulan HTML içeriği moviesContainer içinde görünür ve sayfada doğru şekilde yer alır.
  });
}
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchMovies(searchInput.value);
  }
});
