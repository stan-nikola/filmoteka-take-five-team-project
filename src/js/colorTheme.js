const refsTheme = {
  checkbox: document.querySelector('.switch__input'),
  body: document.querySelector('body'),
  modal: document.querySelector('.modal-card__container-content'),
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
    refsTheme.body.style.backgroundColor = "#111111";
    refsTheme.body.style.color = "white";
    refsTheme.modal.style.backgroundColor = "#111111";
    refsTheme.modal.style.color = "white";
  }
  if (localStorage.getItem("theme") !== "dark") {
    refsTheme.body.style.backgroundColor = "white";
    refsTheme.body.style.color = "black";
    refsTheme.modal.style.backgroundColor = "white";
    refsTheme.modal.style.color = "black";
  }
}

