const objectFilmRef = {
    picture: document.querySelector("picture"),
    title: document.querySelector(".name-film"),
    genre: document.querySelector(".genre-value-list"),
    popularity: document.querySelector(".popularity-value-list")
}

const buttonRef = {
    addWatched: document.querySelector(".btn-watched"),
    addQueue: document.querySelector(".btn-queue")
}

function addWatchedlocalStorage(film) {
    if (localStorage.getItem("filmsWatched") === null) {
        let films = { film };
        localStorage.setItem("filmsWatched", JSON.stringify(films));
    } else {
        let films = Array.from(JSON.parse(localStorage.getItem("filmsWatched")));
        films.push(film);
        localStorage.setItem("filmsWatched", JSON.stringify(films));
    }
};

function addQueuelocalStorage(film) {
    if (localStorage.getItem("filmsQueue") === null) {
        let films = { film };
        localStorage.setItem("filmsQueue", JSON.stringify(films));
    } else {
        let films = Array.from(JSON.parse(localStorage.getItem("filmsQueue")));
        console.log(films);
        films.push(film);
        localStorage.setItem("filmsQueue", JSON.stringify(films));
    }
};
//----------lISTENERS------------------------------------

buttonRef.addWatched.addEventListener("click", () => {
    addWatchedlocalStorage(objectFilmRef);
})
buttonRef.addQueue.addEventListener("click", () => {
    addQueuelocalStorage(objectFilmRef);
})