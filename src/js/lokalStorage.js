// const Ref = {
//     addWatchedBtnRef: document.querySelector("include"),
//     addQueueBtnRef: document.querySelector(""),
//     watchedBtnRef: document.querySelector(""),
//     queueBtnRef: document.querySelector(""),
//     libraryRef: document.querySelector("")
// }
// //----------FUNCTIONS------------------------------------

// function addWatchedlocalStorage(film) {
//     if (localStorage.getItem("filmsWatched") === null) {
//         let films = { film };
//         localStorage.setItem("filmsWatched", JSON.stringify(films));
//     } else {
//         let films = Array.from(JSON.parse(localStorage.getItem("filmsWatched")));
//         films.push(film);
//         localStorage.setItem("filmsWatched", JSON.stringify(films));
//     }
// };

// function addQueuelocalStorage(film) {
//     if (localStorage.getItem("filmsQueue") === null) {
//         let films = { film };
//         localStorage.setItem("filmsQueue", JSON.stringify(films));
//     } else {
//         let films = Array.from(JSON.parse(localStorage.getItem("filmsQueue")));
//         console.log(films);
//         films.push(film);
//         localStorage.setItem("filmsQueue", JSON.stringify(films));
//     }
// };



// //----------lISTENERS------------------------------------

// addWatchedBtnRef.addEventListener("click", () => {
//     addWatchedlocalStorage(обєкт);
// })
// addQueueBtnRef.addEventListener("click", () => {
//     addQueuelocalStorage(обєкт);
// })

// watchedBtnRef.addEventListener("click", () => {
//     let filmsLibrary = JSON.parse(localStorage.getItem("filmsWatched"));
//     let markup = filmsLibrary.map((film) => {
//         return `<li class=""card-container>
//         <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genreYear}
//         ${film.release_date.slice(0, 4)}
//         </span>
//         </p>
//         </li>`
//     })

//     libraryRef.insertAdjacentHTML("beforeend", markup.join(""));
// });

// queueBtnRef.addEventListener("click", () => {
//     let filmsLibrary = JSON.parse(localStorage.getItem("filmsQueue"));
//     let markup = filmsLibrary.map((film) => {
//         return `<li class=""card-container>
//         <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genreYear}
//         ${film.release_date.slice(0, 4)}
//         </span>
//         </p>
//         </li>`
//     })

//     libraryRef.insertAdjacentHTML("beforeend", markup.join(""));
// });
