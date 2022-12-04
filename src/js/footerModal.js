import { team } from '../data/team.js';
import staskarmanov from '../images/team/stanislav-karmanov.jpeg';
import dariapluto from '../images/team/daria-pluto.png';
import maksimshvets from '../images/team/maksim-shviets.jpeg';
import sergeyj from '../images/team/sergey-j.png';
import anton from '../images/team/anton-provorov.jpg';
import ira from '../images/team/ira-rybka.jpeg';
import valentyn from '../images/team/valentyn.jpeg';
import slava from '../images/team/slava.jpeg';
import oleh from '../images/team/oleh.png';
import alex from '../images/team/alex-schlieden.jpeg';
import orest from '../images/team/orest.jpeg';
import natalie from '../images/team/natalie.png';
import iconNets from '../images/icons/icons-social-nets.svg';

console.log(iconNets);

const footerRefs = {
  body: document.querySelector('body'),
  footerModalBtn: document.querySelector('.js-modal'),
  footerModalBackdrop: document.querySelector('.footer__backdrop'),
  teamList: document.querySelector('.team__list'),
  footerModalCloseBtn: document.querySelector('.modal-close__btn'),
};

console.log(footerRefs.body);

footerRefs.footerModalBtn.addEventListener('click', showModalHandler);

function showModalHandler(event) {
  footerRefs.footerModalBackdrop.classList.remove('hidden');

  const teamMarkup = team
    .map(
      item => `
<li class="team__list-item">
  <div class="teammate__card">
    <div class="icons-position">
      <div class="img__thumb">
        <img src=${item.img} alt="" class="teammate__picture">
      </div>
      <div class="social__nets">
        <ul class="team__nets-list">
          <li class="team__nets-list-item">
            <a href=${item.git} class="team__net-icon-link">
              <div class="team__net-icon-thumb">
                <svg class="team__net-icon" width="30px" height="30px">
                  <use href="https://stan-nikola.github.io/filmoteka-take-five-team-project/icons-social-nets.473c5594.svg?1670009233147#icon-git-opt"></use>
                </svg>
              </div>
            </a>
          </li>
          <li class="team__nets-list-item">
            <a href=${item.linkedin} class="team__net-icon-link">
              <div class="team__net-icon-thumb">
                <svg class="team__net-icon" width="30px" height="30px">
                  <use href="https://stan-nikola.github.io/filmoteka-take-five-team-project/icons-social-nets.473c5594.svg?1670009233147#icon-linkedin-opt">
                  </use>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="teammate__info">
      <div class="info__thumb">
        <p class="name">${item.name}</p>
        <p class="role">${item.role}</p>
      </div>
      <p class="responsibilities">${item.responsibilities}</p>
    </div>
  </div>
</li>`
    )
    .join('');

  console.log(teamMarkup);

  footerRefs.teamList.innerHTML = teamMarkup;

  footerRefs.body.style.overflow = 'hidden';

  footerRefs.footerModalCloseBtn.addEventListener(
    'click',
    closeFooterModalHandler
  );
  window.addEventListener('keydown', onKeyCloseFooterModal);
  footerRefs.footerModalBackdrop.addEventListener(
    'click',
    onBackdropClickClose
  );
}

function closeFooterModalHandler() {
  footerRefs.footerModalBackdrop.classList.add('hidden');
  footerRefs.body.style.overflow = 'auto';
  window.removeEventListener('keydown', onKeyCloseFooterModal);
  footerRefs.footerModalBackdrop.removeEventListener(
    'click',
    onBackdropClickClose
  );
}

function onKeyCloseFooterModal(evt) {
  const ESC_KEY_CODE = 'Escape';
  evt.preventDefault();
  if (evt.code === ESC_KEY_CODE) {
    closeFooterModalHandler();
  }
}

function onBackdropClickClose(ev) {
  if (ev.currentTarget === ev.target) {
    closeFooterModalHandler();
  }
}
