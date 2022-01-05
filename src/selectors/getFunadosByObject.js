import { funados } from '../data/funados';

export const getFunadoByObject = ( objeto ) => {

    const validObjetos = ['gtx 710', 'ryzon'];

    if ( !validObjetos.includes( objeto ) ) {
        throw new Error(`Objeto  "${ objeto }" not found`);
    }

    return funados.filter( funado => funado.objeto === objeto );

}
