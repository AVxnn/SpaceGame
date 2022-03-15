import React from 'react';
import { getAuth } from "firebase/auth";
import {Navigate, Route} from "react-router-dom";


const PrivateRoute = ({children}) => {

    const auth = getAuth().currentUser

    if(!auth) {
        console.log(!!auth)
        return <Navigate to='/' />
    }



    return (
        <div className={'app'}>
            {children}
        </div>
    );
};

export default PrivateRoute;
