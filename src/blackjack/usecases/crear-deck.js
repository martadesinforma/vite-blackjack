
import _ from 'underscore';

// Esta función crea un nuevo deck
//como vemos dentro de la funcion hacemos referencia a variables que para poder ser usadas las tenemos que mandar como argumento de la funcion y luego no olvidar poner los argumentos a la hora de llamar a la funcion en el archivo index.js
//como en la funcion crearDeck estamos haciendo referencia a deck, tenemos que crear la variable deck dentro de la funcion 
//tb tenemos que importar la libreria underscore para hacer uso de shuffle

/** escribimos a que se refieren los argumentos de la funcion
 * 
 * @param {Array<String>} tiposDeCarta Ej: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ej: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un array de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales ) => {
    //hacemos las validaciones
    if(!tiposDeCarta || !tiposEspeciales) throw new Error('tiposDeCarta es obligatorio');
    if(tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta tiene que ser un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}