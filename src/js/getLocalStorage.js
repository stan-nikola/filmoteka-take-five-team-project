// const Ref = {
//     watchedBtn: document.querySelector(""),
//     queueBtn: document.querySelector(""),
//     library: document.querySelector(".library__gallery")
// }

// watchedBtnRef.addEventListener("click", () => {
//     let filmsLibrary = JSON.parse(localStorage.getItem("filmsWatched"));
//     let markup = filmsLibrary.map((film) => {
//         return `<li class=""card-container>
//         <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genre}
//         </span>
//         </p>
//         </li>`
//     })

//     libraryRef.insertAdjacentHTML("beforeend", markup.join(""));
// });

// queueBtnRef.addEventListener("click", () => {
// let filmsLibrary = JSON.parse(localStorage.getItem("filmsQueue"));
// let markup = filmsLibrary.map((film) => {
//     return `<li class=""card-container>
//   <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genre}
//         </span>
//         </p>
//         </li>`
// })

// Ref.library.insertAdjacentHTML("beforeend", markup.join(""));
// });
