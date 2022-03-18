import React from 'react';
import {clickData} from "../../shared/data";
import star from "../../img/star.png";
import card from "../../img/card.png";
import locker from "../../img/locker.png";
import {useSelector} from "react-redux";
import {store} from "../../store";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../../shared/api/firebase";
import {getAuth} from "firebase/auth";

const ClickShop = () => {

    const money = useSelector(state => state.money)
    const auth = getAuth()

    const buyShop = (item) => {
        console.log(item)
        console.log(money)
    }

    const addClick = async () => {
        store.dispatch({ type: 'CLICK', payload: 0.001})
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
            id: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            count: money
        });
    }

    return (
        <>
            {clickData.map((item, index) => {
                if (money >= item.price) {
                    return (
                        <section key={index} onClick={() => buyShop(item)} className='open shop-item'>
                            <section className='shop-info-main'>
                                <img className='shop-star_img' src={star} alt="star"/>
                                <section className='shop-info_item'>
                                    <h3 className='shop-item_title'>{item.name}</h3>
                                    <span className='shop-item_description'>{item.description}</span>
                                </section>
                            </section>
                            <section className='shop-info_price'>
                                <img className='shop-price_img' src={card} alt="card"/>
                                <span className='shop-price_price'>{item.price}</span>
                            </section>
                        </section>
                    )
                } else {
                    return (
                        <section key={index} onClick={() => buyShop(item)} className='close shop-item'>
                            <section className='shop-info-main'>
                                <section className='shop-info_item'>
                                    <h3 className='shop-item_title'>Скоро откроется</h3>
                                </section>
                            </section>
                            <section className='shop-info_price'>
                                <img className='shop-price_img' src={locker} alt="card"/>
                                <span className='shop-price_price'></span>
                            </section>
                        </section>
                    )
                }

            })}
        </>
    );
};

export default ClickShop;
