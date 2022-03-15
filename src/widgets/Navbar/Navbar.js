import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <section className='navbar-container'>
                <NavLink className='navbar-item game' to='/game'></NavLink>
                <NavLink className='navbar-item shop' to='/shop'></NavLink>
                <NavLink className='navbar-item cup' to='/cup'></NavLink>
            </section>
        </>
    );
};

export default Navbar;
