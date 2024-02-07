

/**
 * esta funcion nos proporciona el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

//En este caso aunque en la funcion estamos usando como argumento carta y carta no esta importado en el documento esta bien, porque carta tiene que existir en el documento en el que llames a la funcion
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}