import { funados } from '../data/funados';


export const getFunadoByNombre = ( nombre = '' ) => {

    if ( nombre === '' ) {
        return [];
    }

    nombre = nombre.toLocaleLowerCase();
    return funados.filter( funado => nombre.funado.toLocaleLowerCase().includes( nombre )  );

}