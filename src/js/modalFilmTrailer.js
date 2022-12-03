import { renderTrailerModal } from "./renderMovieTrailerModal";
import { fetchTrailer } from './apiService';

refs = {
    btnTrailer: document.querySelector('.btn__trailer__modal__js'),
    modalTrailer: document.querySelector('.backdrop_trailer'),
    btnCloseTrailer: document.querySelector('.close-btn-js'),
}
// const visibleBtn = btnTrailer.style.visibility
// if (visibleBtn==="visible") {
refs.btnTrailer.addEventListener('click', openModalTrailer);
// }
export function openModalTrailer() {
    refs.modalTrailer.classList.remove('.is-hidden');
}