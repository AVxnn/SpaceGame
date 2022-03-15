import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import AuthGoogle from "../features/authGoogle/AuthGoogle";

const Auth = () => {

    return (
        <>
            <section className='auth-container'>
                <h1 className='auth-title'>Space Game | Vxnn</h1>
                <AuthGoogle />
            </section>
        </>
    );
};

export default Auth;
