import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1> Reune personas dispuestas a crear justicia con presencia masiva, sin daños. (guiño) </h1>
            <p>  pero con cuidado! bajo tu propio riesgo </p>
            <hr />

            <HeroList publisher="DC Comics" />

        </div>
    )
}
