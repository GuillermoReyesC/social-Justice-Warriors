import React from 'react';
import { Link } from 'react-router-dom';
import { funadoImages } from '../../helpers/funadosImages';


export const FunadoCard = ({
        nombre,
        apodo,
        edad,
        rrss,
        direccion,
        responsableFuna,
        objeto,
        valoracion


}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ funadoImages(`./${ nombre }.jpg`) } className="card-img" alt={ nombre } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { nombre } </h5>
                        <p className="card-text"> { apodo} </p>

                        {
                            ( apodo !== nombre ) 
                                && <p className="card-text"> { apodo } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { direccion } </small>
                        </p>

                        <Link to={ `./funado/${ nombre }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
