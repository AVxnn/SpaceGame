import React, {useState} from 'react';
import loginImg from './img/login.png'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Loading from "../Loading/Loading";
import { doc, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import {db} from "../../shared/api/firebase";
import {store} from "../../store";

const AuthGoogle = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const auth = getAuth()

    const login = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/game')
                setLoading(false)
            });

        const querySnapshot = await getDocs(query(collection(db, "users"), orderBy('count')));
        querySnapshot.forEach((doc) => {
            if (doc.data().id === auth.currentUser.uid) {
                store.dispatch({ type: 'ADD_MONEY', payload: doc.data().count})
            }
        });
        console.log(auth.currentUser)
        await addDoc(doc(db, 'users', auth.currentUser.uid), {
            id: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            photo: auth.currentUser.photoURL,
        });

    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <section
                onClick={() => login()}
                className='auth-btn'>
                <img className='auth-btn_img' src={loginImg} alt="login"/>
                <span className='auth-btn_title'>Войти через Google</span>
            </section>
        </>
    );
};

export default AuthGoogle;
