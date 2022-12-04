import { team } from '../data/team.js';
import staskarmanov from '../images/team/stanislav-karmanov.jpg';
console.log(staskarmanov);
import dariapluto from '../images/team/daria-pluto.jpg';
console.log(dariapluto);
import maksimshvets from '../images/team/maksim-shviets.jpg';
console.log(maksimshvets);
import sergeyj from '../images/team/sergey-j.jpg';
console.log(sergeyj);
import anton from '../images/team/anton-provorov.jpg';
console.log(anton);
import ira from '../images/team/ira-rybka.jpg';
console.log(ira);
import valentyn from '../images/team/valentyn.jpg';
console.log(valentyn);
import slava from '../images/team/slava.jpg';
console.log(slava);
import oleh from '../images/team/oleh.jpg';
console.log(oleh);
import alex from '../images/team/alex-schlieden.jpg';
console.log(alex);
import orest from '../images/team/orest.jpg';
console.log(orest);
import natalie from '../images/team/natalie.jpg';
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
                  <use href="https://stan-nikola.github.io/filmoteka-take-five-team-project/icons-social-nets.aba2537c.svg#icon-git-opt"></use>
                </svg>
              </div>
            </a>
          </li>
          <li class="team__nets-list-item">
            <a href=${item.linkedin} class="team__net-icon-link">
              <div class="team__net-icon-thumb">
                <svg class="team__net-icon" width="30px" height="30px">
                  <use href="https://stan-nikola.github.io/filmoteka-take-five-team-project/icons-social-nets.aba2537c.svg#icon-linkedin-opt">
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
