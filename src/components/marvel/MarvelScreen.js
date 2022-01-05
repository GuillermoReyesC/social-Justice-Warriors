
import { HeroList } from '../heroes/HeroList'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import React, { useContext } from 'react';

export const MarvelScreen = (  ) => {

    const { user:{ name }, dispatch } = useContext(AuthContext);

    return (
        <div>
            <h1>Personajes funados</h1>
            <hr />
            <h4> saludos { name }, aqui puedes ver los personajes funados por  robo, estafa y algun engaño en nuestros grupos de venta de hardware  </h4>
            <p>es una info preeliminar, puedes agregar nuevos funados o rectificar la informacion, si eres un funado y quieres aclarar algo, en la otra seccion esta el muro de la verdad</p>
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
