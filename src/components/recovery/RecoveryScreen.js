
import { HeroList } from '../heroes/HeroList'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import React, { useContext } from 'react';
import { ObjectStealed } from '../funados/ObjectStealed';

export const RecoveryScreen = (  ) => {

    const { user:{ name }, dispatch } = useContext(AuthContext);

    return (
        <div>
            <h1>Recuperemos tus cositas</h1>
            <hr />
            <h4> tranquilo { name }, aqui puedes publicar objetos que quieres recuperar, puedes dejar el  objeto y ofrcer algun tipo de recompensa por ello  </h4>
            <p> Atencion: confiamos en la verdad y personas decentes, usa esta herramienta para el bien y no para el mal. </p>
            <ObjectStealed />
        </div>
    )
}
