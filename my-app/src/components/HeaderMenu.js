import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenu = function (props) {
    return (
        <nav className="navbar has-shadow">
            <div className="navbar-tabs">
                <NavLink className="navbar-item is-tab " to={ {pathname: "/home"}}>Home</NavLink>
                <NavLink className="navbar-item is-tab " to={ {pathname:"/users"}}>Users</NavLink>
                <NavLink className="navbar-item is-tab " to={ {pathname:"/companies"}}>Companies</NavLink>
                <NavLink className="navbar-item is-tab " to={ {pathname:"/portfolio"}}>Portfolio</NavLink>
            </div>
        </nav>
    );
}

export default HeaderMenu;