import React from 'react'
import { Link } from 'react-router-dom';

export const ObjectStealed = (id) => {
    return (
        <>
            <h1>objetos robados</h1>

            <ul>
                <li className="list-group-item"> procesador ryzon   <Link to={ `./hero/${ id }` } > ver..</Link> </li>
                <li className="list-group-item"> monitor SQNY  <Link to={ `./hero/${ id }` }> ver..</Link> </li>
                <li className="list-group-item"> GTX 710 nunca oc full bundle nunca taxi  <Link to={ `./hero/spider-man` }> ver..</Link> </li>
            </ul>
            
            
        </>
    )
}


