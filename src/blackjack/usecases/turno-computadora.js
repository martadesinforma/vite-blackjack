import { pedirCarta } from "./pedir-carta.js";
import { valorCarta } from "./valor-carta.js";

//como vemos en esta funcion necesitamos importar la funcion perdirCarta y valorCarta para poder usarla y deck tb tiene que ser un argumento de la funcion turnoComputadora
//como en la funcion necesito hacer uso de puntosComputadora, me puedo crear la variable dentro de la funcion
//como en la funcion necesito hacer uso de puntosHTML, voy a importar la variable como argumento de la funcion
//como en la funcion necesito hacer uso de  divCartasComputadora, voy a importar la variable como argumento de la funcion

/**
 * funcion para cuando sea el turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML,  divCartasComputadora ) => {
    //tenemos que hacer las validaciones:
    if (!puntosMinimos || !deck || !puntosHTML) throw new Error('elemento necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}