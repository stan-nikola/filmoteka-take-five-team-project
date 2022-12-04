const refsTheme = {
  checkbox: document.querySelector('.switch__input'),
  body: document.querySelector('body'),
  modal: document.querySelector('.modal-card__container-content'),
  closeButtonIcon: document.querySelector('.close-button__icon'),
};
export { refsTheme };
export function addThemeLocalStorage() {
  refsTheme.checkbox.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark")
    }
  })
}

export function useDarkTheme() {
  if (localStorage.getItem("theme") === "dark") {
    refsTheme.checkbox.setAttribute("checked", '');
    refsTheme.body.classList.add("dark");
    refsTheme.modal.classList.add("dark");
    refsTheme.closeButtonIcon.classList.add("dark");
  }
  if (localStorage.getItem("theme") !== "dark") {
    refsTheme.body.classList.remove("dark");
    refsTheme.modal.classList.remove("dark");
    refsTheme.closeButtonIcon.classList.remove("dark");
    refsTheme.closeButtonIcon.classList.remove("dark");
  }
}

export function useDarkThemeModal() {
  const modalUnits = {
    modalPopularity: document.querySelector('.item__popularity-value'),
    modalTitle: document.querySelector('.item__title-value'),
    modalGenre: document.querySelector('.item__genre-value'),
    modalBtnQueue: document.querySelector('.btn__queue'),
    modalBtnWatched: document.querySelector('.btn__watched'),
  }
  if (localStorage.getItem("theme") === "dark") {
    modalUnits.modalPopularity.classList.add("dark")
    modalUnits.modalTitle.classList.add('dark')
    modalUnits.modalGenre.classList.add('dark')
    modalUnits.modalBtnWatched.classList.add('dark')
    modalUnits.modalBtnQueue.classList.add('dark')
  }
  if (localStorage.getItem("theme") !== "dark") {
    modalUnits.modalPopularity.classList.remove("dark")
    modalUnits.modalTitle.classList.remove('dark')
    modalUnits.modalGenre.classList.add('dark')
    modalUnits.modalBtnWatched.classList.add('dark')
    modalUnits.modalBtnQueue.classList.add('dark')
  }
}

export function useDarkPagination() {
  const refsPagination = document.querySelectorAll(".pagination__el");
  const refsPaginationList = document.querySelector(".pagination__list")
  for (let i = 0; i <= refsPagination.length - 1; i++) {
    function paginationThemeChande() {
      if (refsPagination[i].classList.contains("pagination__el--current") !== true) {
        if (localStorage.getItem("theme") === "dark") {
          refsPagination[i].classList.add("dark");
        }
        if (localStorage.getItem("theme") !== "dark") {
          refsPagination[i].classList.remove("dark");
        }
        console.log(refsPagination[i])
      }
    }
    paginationThemeChande();
    refsPaginationList.addEventListener("click", () => {
      paginationThemeChande();
    }
    )
  }
}

