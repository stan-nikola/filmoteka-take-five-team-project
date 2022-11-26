let addWatchedBtnRef = document.querySelector("")
let addQueueBtnRef = document.querySelector("")
let watchedBtnRef = document.querySelector("")
let queueBtnRef = document.querySelector("")
let libraryRef = document.querySelector("")


//----------FUNCTIONS------------------------------------

function addWatchedLokalStorage(film) {
    if (localStorage.getItem("filmsWatched") === null) {
        localStorage.setItem("filmsWatched", "");
    }
    let films = localStorage.getItem("filmsWatched");
    films += film;
    localStorage.setItem("filmsWatched", films);
};

function addQueueLokalStorage(film) {

    if (localStorage.getItem("filmsQueue") === null) {
        localStorage.setItem("filmsQueue", "");
    }

    let films = localStorage.getItem("filmsQueue");
    films += film;
    localStorage.setItem("filmsQueue", films);
};


//----------lISTENERS------------------------------------

addWatchedBtnRef.addEventListener("click", () => {
    addWatchedLokalStorage();
})
addQueueBtnRef.addEventListener("click", () => {
    addQueueLokalStorage();
})

watchedBtnRef.addEventListener("click", () => {
    let filmsLibrary = localStorage.getItem("filmsWatched");
    libraryRef.insertAdjacentHTML("beforeend", filmsLibrary);
});

queueBtnRef.addEventListener("click", () => {
    let filmsLibrary = localStorage.getItem("filmsQueue");
    libraryRef.insertAdjacentHTML("beforeend", filmsLibrary);
});
