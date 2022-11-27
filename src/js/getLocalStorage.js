// const Ref = {
//     watchedBtn: document.querySelector(".header__watched__btn__js"),
//     queueBtn: document.querySelector(".header__queue__btn__js"),
//     library: document.querySelector(".library__gallery__js")
// }

// if (localStorage.getItem("filmsWatched") !== null) {
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
//     Ref.library.insertAdjacentHTML("beforeend", markup.join(""));

//     Ref.watchedBtn.addEventListener("click", () => {
//         Ref.library.textContent = "";
//         let filmsLibrary = JSON.parse(localStorage.getItem("filmsWatched"));
//         let markup = filmsLibrary.map((film) => {
//             return `<li class=""card-container>
//         <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genre}
//         </span>
//         </p>
//         </li>`
//         })
//         Ref.library.insertAdjacentHTML("beforeend", markup.join(""));
//     });

//     Ref.queueBtn.addEventListener("click", () => {
//         Ref.library.textContent = "";
//         let filmsLibrary = JSON.parse(localStorage.getItem("filmsQueue"));
//         let markup = filmsLibrary.map((film) => {
//             return `<li class=""card-container>
//   <img class="image-poster" src="${film.src}" alt="">
//         <p class="movie-data">
//         ${film.title} <br>
//         <span class="genre-year">
//         ${film.genre}
//         </span>
//         </p>
//         </li>`
//         })
//         Ref.library.insertAdjacentHTML("beforeend", markup.join(""));
//     });
// } else {
//     Ref.library.insertAdjacentHTML("beforeend", "Gallery is empy");
//     Ref.library.classList.remove("movie-cards-gallery");
//     Ref.library.setAttribute("style", `display:flex;margin:auto;justify-content: center`)
// }