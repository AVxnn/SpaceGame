import React from 'react';
import {NavLink} from "react-router-dom";

const ShopBar = () => {
    return (
        <>
            <section className='shopbar-container'>
                <NavLink to='second'><span className='shopbar text-item'>0.223 в сек</span></NavLink>
                <NavLink to='click'><span className='shopbar text-item'>12.023 за клик</span></NavLink>
                <NavLink to='bonus'><span className='shopbar text-item'>Бонусы</span></NavLink>
            </section>
        </>
    );
};

export default ShopBar;
