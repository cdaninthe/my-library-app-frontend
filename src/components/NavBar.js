import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <NavLink exact to="/" activeStyle={{background: "gold"}}>My Library |</NavLink>
            <NavLink exact to="/form" activeStyle={{background: "gold"}}>  Add New Book  |</NavLink>
            <NavLink exact to="/author" activeStyle={{background: "gold"}}>  Add New Author  |</NavLink>
            <NavLink exact to="/genre" activeStyle={{background: "gold"}}>  Add New Genre  |</NavLink>
            <NavLink exact to="/stats" activeStyle={{background: "gold"}}>  My Library Stats  </NavLink>

        </div>
    );
}

export default NavBar;