const upBtn = document.getElementById('btn-up-js');
const target = document.querySelector('.js-scrollOnSubmit');
const footerTarget = document.getElementById('js-footer');

upBtn.addEventListener('click', onUpBtnClick);

export function scrollOnSubmit() {
  const { height: cardHeight } =
    target.firstElementChild.getBoundingClientRect();

  setTimeout(() => {
    upBtn.classList.remove('is-hidden');

    window.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    });
  }, 500);
}

export function onUpBtnClick() {
  upBtn.classList.add('is-hidden');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && footerTarget) {
      upBtn.classList.remove('is-hidden');
    }
    if (!entry.isIntersecting) {
      upBtn.classList.add('is-hidden');
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '0px',
});
observer.observe(footerTarget);
