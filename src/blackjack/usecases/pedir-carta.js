

// Esta función me permite tomar una carta
//Como en la funcion hacemos uso de deck, vamos a pasarselo como argumento a la funcion pedir carta sin olvidarnos que cuando la llamemos tb tenemos que pasarle el arguemento deck

/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna un string que es una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}