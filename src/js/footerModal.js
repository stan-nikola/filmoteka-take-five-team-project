import { team } from '../data/team.js';

import staskarmanov from '../images/team/stanislav-karmanov.jpeg';
console.log( staskarmanov );

import dariapluto from '../images/team/daria-pluto.png';
console.log( dariapluto );

import maksimshvets from '../images/team/maksim-shviets.jpeg';
console.log( maksimshvets )

import sergeyj from '../images/team/sergey-j.png'
console.log( sergeyj );

import anton from '../images/team/anton-provorov.jpg';
console.log( anton );

import alex from '../images/team/alex-schlieden.jpeg'
console.log( alex );

import natalie from '../images/team/natalie.jpeg';
console.log( natalie );

import icons from '../images/icons/icons-opt.svg'
console.log( icons );


console.log( team );

const footerRefs = {
footerModalBtn: document.querySelector( '.js-modal' ),
footerModalBackdrop: document.querySelector( ".footer__backdrop" ),
teamList: document.querySelector( ".team__list" ),
footerModalCloseBtn: document.querySelector( '.modal-close__btn' ),
}


footerRefs.footerModalBtn.addEventListener( "click", showModalHandler );


function showModalHandler( event )
{
   
    footerRefs.footerModalBackdrop.classList.remove( "hidden" );

        
    const teamMarkup = team.map( ( item ) => ` <li class="team__list-item">

                    <div class="teammate__card">
                <div class="img__thumb">
                    <img src=${item.img} alt="" class="teammate__picture">

                </div>

                <div class="teammate__info">
                    <div class="info__thumb">
                        <p class="name">${item.name}</p>
                        <p class="role">${item.role}</p>
                    </div>
                    <p class="responsibilities">${item.resposibilities}</p>


                </div>

                <div class="social__nets">

                    <ul class="team__nets-list">

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="http://localhost:1234/icons-opt.8f2041b2.svg?1669854856927#icon-instagram-opt"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="http://localhost:1234/icons-opt.8f2041b2.svg?1669854856927#icon-twitter-opt"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="http://localhost:1234/icons-opt.8f2041b2.svg?1669854856927#icon-facebook-opt"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="http://localhost:1234/icons-opt.8f2041b2.svg?1669854856927#icon-linkedin-opt"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>



                    </ul>


                </div>


            </div>

            </li>`).join( "" );
    
    console.log( teamMarkup );
    
    footerRefs.teamList.innerHTML = teamMarkup;

    footerRefs.footerModalCloseBtn.addEventListener( 'click', closeFooterModalHandler );
    window.addEventListener( 'keydown', onKeyCloseFooterModal );
    footerRefs.footerModalBackdrop.addEventListener( 'click', onBackdropClickClose );
  
}

function closeFooterModalHandler()
{
    footerRefs.footerModalBackdrop.classList.add('hidden');
    window.removeEventListener('keydown', onKeyCloseFooterModal);
    footerRefs.footerModalBackdrop.removeEventListener('click', onBackdropClickClose);
 }



function onKeyCloseFooterModal(evt) {
  const ESC_KEY_CODE = 'Escape'
  evt.preventDefault();
  if (evt.code === ESC_KEY_CODE) {
    closeFooterModalHandler()
  }
}


function onBackdropClickClose (ev) {
  if(ev.currentTarget === ev.target) {
    closeFooterModalHandler();
  }
}