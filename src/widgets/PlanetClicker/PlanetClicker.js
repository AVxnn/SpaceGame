import React from 'react';
import planet from './img/planet.png'
import {store} from "../../store";
import {setDoc, doc} from "firebase/firestore";
import {db} from "../../shared/api/firebase";
import {useSelector} from "react-redux";
import {getAuth} from "firebase/auth";

const PlanetClicker = () => {

    const money = useSelector(state => state.money)
    const click = useSelector(state => state.click)
    const auth = getAuth()

    const addClick = async () => {
        store.dispatch({ type: 'ADD_MONEY', payload: click})
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
            id: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            count: money
        });
    }

    return (
        <>
            <img onClick={addClick} className='planet' src={planet} alt="planet"/>
        </>
    );
};

export default PlanetClicker;
