const buttonRef = {
    addWatched: document.querySelector(".btn-watched-js"),
    addQueue: document.querySelector(".btn-queue-js")
}

export default function addLocalStorage() {
    function addWatchedlocalStorage(film) {

        if (localStorage.getItem("filmsWatched") === null) {
            localStorage.setItem("filmsWatched", film.outerHTML);
        } else {
            let films = localStorage.getItem("filmsWatched");
            localStorage.setItem("filmsWatched", films + film.outerHTML);
        }
    };

    function addQueuelocalStorage(film) {
        if (localStorage.getItem("filmsQueue") === null) {
            let films = [film];
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
        let currentCard = document.querySelector(".currentCard")
        addWatchedlocalStorage(currentCard);
    })
    buttonRef.addQueue.addEventListener("click", () => {
        let currentCard = document.querySelector(".currentCard")
        addQueuelocalStorage(currentCard);
    })
}

    // const filtrFilm = (films) => {
    //     return films.filter((film, index, films) => films.indexOf(film) === index);
