import React, {useEffect, useState} from 'react';
import Navbar from "../widgets/Navbar/Navbar";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../shared/api/firebase";
import card from "../img/card.png";
import Loading from "../features/Loading/Loading";
import Cupbar from "../widgets/Cupbar/Cupbar";

const Cup = () => {

    const [profiles, setProfiles] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        const querySnapshot = await getDocs(collection(db, "users"));
        let data = []
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        setProfiles(data)
        console.log(profiles)
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <section className='cup-container'>
                <Cupbar/>
                <section className='cup-list'>
                    {profiles ? profiles.map((profile, i) => {
                        return (
                            <>
                                <section className='cup-item'>
                                    <section className='cup-info-main'>
                                        <img className='cup-star_img' src={`${profile.photoURL}`} alt="avatar"/>
                                        <section className='cup-info_item'>
                                            <h3 className='cup-item_title'>{profile.username}</h3>
                                            <span className='cup-item_description'>{profile.count.toFixed(3)}</span>
                                        </section>
                                    </section>
                                    <section className='cup-info_price'>
                                        <img className='cup-price_img' src={card} alt="card"/>
                                    </section>
                                </section>
                            </>
                        )
                    }) : <h1>Пусто</h1>}
                </section>
                <Navbar />
            </section>
        </>
    );
};

export default Cup;
