import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import auth from "./Auth";
import Navbar from "../widgets/Navbar/Navbar";
import {getAuth} from "firebase/auth";
import Loading from "../features/Loading/Loading";

const Layout = () => {

    return (
        <>
            <main className='main-container'>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;
