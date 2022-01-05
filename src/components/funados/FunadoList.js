import React, { useMemo } from 'react';
import { getFunadoByObject } from '../../selectors/getFunadosByObject';
import { funadoCard } from './FunadoCard';

export const FunadoList = ({ objeto }) => {

    const funados = useMemo(() => getFunadoByObject( objeto ), [ objeto ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( funado => (
                   <HeroCard 
                        key={ funado.nombre }
                        { ...funado }
                    />
                   
               ))
           } 
        </div>
    )
}
