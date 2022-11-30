import team from '../data/team.json';


const modalBtn = document.querySelector( '.js-modal' );
console.log( modalBtn );

const modalBackdrop = document.querySelector( ".footer__backdrop" );
console.log( modalBackdrop );

const teamList = document.querySelector( ".team__list" );
console.log( teamList );

console.log( team );



modalBtn.addEventListener( "click", showModalHandler );

function showModalHandler( event )
{
    console.log( modalBackdrop );
    console.log( team );
    modalBackdrop.classList.remove( "hidden" );

    const phe = [ 1, 2, 3, 4 ]
    
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
                                        <use href="./images/icons/icons-opt.svg#icon-instagram-opt"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="./images/icons/icons.svg#icon-twitter"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="./images/icons/icons.svg#icon-facebook"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>

                        <li class="team__nets-list-item">
                            <a href="" class="team__net-icon-link">
                                <div class="team__net-icon-thumb">
                                    <svg class="team__net-icon" width="20px" height="20px">
                                        <use href="./images/icons/icons.svg#icon-linkedin"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>



                    </ul>


                </div>


            </div>

            </li>`).join( "" );
    
    teamList.innerHTML = teamMarkup;

    
    

    
}




            // <li class="team__list-item">

            //         <div class="teammate__card">
            //     <div class="img__thumb">
            //         <img src="./images/team/default-img-team.jpeg" alt="Никто, абсолютно никто" class="teammate__picture">

            //     </div>

            //     <div class="teammate__info">
            //         <div class="info__thumb">
            //             <p class="name">Станислав Карманов</p>
            //             <p class="role">Тим лид</p>
            //         </div>
            //         <p class="responsibilities">Архитектура проекта, определение единых практик разработки, сode review,
            //             наставничество команды, распределение скоупа проекта между разработчиками</p>


            //     </div>

            //     <div class="social__nets">

            //         <ul class="team__nets-list">

            //             <li class="team__nets-list-item">
            //                 <a href="" class="team__net-icon-link">
            //                     <div class="team__net-icon-thumb">
            //                         <svg class="team__net-icon" width="20px" height="20px">
            //                             <use href="./images/icons/icons-opt.svg#icon-instagram-opt"></use>
            //                         </svg>
            //                     </div>
            //                 </a>
            //             </li>

            //             <li class="team__nets-list-item">
            //                 <a href="" class="team__net-icon-link">
            //                     <div class="team__net-icon-thumb">
            //                         <svg class="team__net-icon" width="20px" height="20px">
            //                             <use href="./images/icons/icons.svg#icon-twitter"></use>
            //                         </svg>
            //                     </div>
            //                 </a>
            //             </li>

            //             <li class="team__nets-list-item">
            //                 <a href="" class="team__net-icon-link">
            //                     <div class="team__net-icon-thumb">
            //                         <svg class="team__net-icon" width="20px" height="20px">
            //                             <use href="./images/icons/icons.svg#icon-facebook"></use>
            //                         </svg>
            //                     </div>
            //                 </a>
            //             </li>

            //             <li class="team__nets-list-item">
            //                 <a href="" class="team__net-icon-link">
            //                     <div class="team__net-icon-thumb">
            //                         <svg class="team__net-icon" width="20px" height="20px">
            //                             <use href="./images/icons/icons.svg#icon-linkedin"></use>
            //                         </svg>
            //                     </div>
            //                 </a>
            //             </li>



            //         </ul>


            //     </div>


            // </div>

            // </li>