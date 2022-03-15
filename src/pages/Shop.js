import React from 'react';
import Navbar from "../widgets/Navbar/Navbar";
import ShopBar from "../widgets/Shopbar/Shopbar";
import {Outlet} from "react-router-dom";

const Shop = () => {
    return (
        <>
            <section className='shop-container'>
                <ShopBar />
                <section className='shop-list'>
                    <Outlet />
                </section>
                <Navbar />
            </section>
        </>
    );
};

export default Shop;
