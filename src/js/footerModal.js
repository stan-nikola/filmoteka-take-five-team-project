console.log( "ku-ku" );

const modalBtn = document.querySelector( '.js-modal' );
console.log( modalBtn );

const modalBackdrop = document.querySelector( ".backdrop" );
console.log( modalBackdrop );

modalBtn.addEventListener( "click", showModal );

function showModal( event )
{
    modalBackdrop.classList.remove( "is-hidden" ); 
}