import { funados } from '../data/funados';

export const getFunadoByApodo = ( apodo ) => {

    return funados.find( funado => funado.apodo === apodo );

}
