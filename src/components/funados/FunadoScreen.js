import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { funadoImages } from '../../helpers/funadosImages';
import { getFunadoByApodo } from '../../selectors/getFunadosByApodo';
import { getFunadoByNombre } from '../../selectors/getFunadosByNombre';


// import batman from '../../assets/heroes/dc-batman.jpg'; // estático
// const heroImages = require.context('../../assets/heroes', true );



export const FunadoScreen = ({ history }) => {

    const { funadoNombre } = useParams();

    const funado = useMemo(() => getFunadoByNombre( funadoNombre ), [ funadoNombre ]);


    if ( !funado ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        nombre,
        direccion,
        edad,
        apodo,
        rrss,
        responsableFuna,
        objeto,
        valoracion
    } = funado;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={ `../assets/heroes/${ heroeId }.jpg` } // desde public/assets
                    // src={ batman } // import
                    src={ funadoImages(`./${ funadoNombre }.jpg`) }
                    alt={ nombre }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { nombre } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Edad: </b> { edad } </li>
                    <li className="list-group-item"> <b> Apodo </b> { apodo } </li>
                    <li className="list-group-item"> <b> Direccion: </b> { direccion } </li>
                    <li className="list-group-item"> <b> Objeto: </b> { objeto } </li>
                    <li className="list-group-item"> <b> Funador </b> { responsableFuna } </li>
                    <li className="list-group-item"> <b> Valoracion </b> { valoracion } </li>
                    <li className="list-group-item"> <b> Perfil de red social </b> { rrss } </li>
                </ul>

                <h5> funado : </h5>
                <p> { nombre } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
