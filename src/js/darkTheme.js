const refs = {
    dark: document.querySelector('.dark-theme'),
    light: document.querySelector('.light-theme'),
    body: document.querySelector('body'),
    modal: document.querySelector('.modal-card__container-content')
}

refs.dark.addEventListener('click', swithTheme)
refs.light.addEventListener('click', swithTheme)

export function swithTheme(e) {
    if (e.target.value === "dark") {
        refs.body.classList.add('dark');
        refs.modal.classList.add('dark');
    }
    if (e.target.value === "light") {
        refs.body.classList.remove('dark');
        refs.modal.classList.add('dark');
    }
}
