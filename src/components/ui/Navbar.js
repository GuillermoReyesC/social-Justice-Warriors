import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Hand Justice Warriors
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/funas"
                    >
                        Funas
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Reune"
                    >
                        Reune
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Recovery"
                    >
                        Recupera
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscar"
                    >
                        buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/#"
                    >
                        muro de los funados
                    </NavLink>
                        
                    <span className="nav-item nav-link text-info"> 
                       Usuario:  { name }
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    > 
                        raspar de aqui
                    </button>
                </ul>
            </div>
        </nav>
    )
}