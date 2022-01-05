import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';


import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { RecoveryScreen } from '../components/recovery/RecoveryScreen';
import { FunadoScreen } from '../components/funados/FunadoScreen';


export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/funas" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/funado/:funadoNombre" component={ FunadoScreen } />
                    <Route exact path="/Reune" component={ DcScreen } />
                    <Route exact path="/Recovery" component={ RecoveryScreen } />
                    <Route exact path="/Buscar" component={ SearchScreen } />

                    <Redirect to="/funas" />
                </Switch>
            </div>


        </>
    )
}
