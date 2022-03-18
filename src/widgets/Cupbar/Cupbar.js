import React from 'react';
import {NavLink} from "react-router-dom";

const CupBar = () => {
    return (
        <>
            <section className='cupbar-container' >
                <NavLink to='/' className='active' >
                    <span className='item cup-nav-item'>Рейтинг</span>
                </NavLink>
            </section>
        </>
    );
};

export default CupBar;
