import React from 'react';
import star from '../../img/star.png'
import card from '../../img/card.png'
import {secondData} from '../../shared/data'

const SecondShop = () => {
    return (
        <>
            {secondData.map((item, index) => {
                return (
                    <section className='shop-item'>
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
            })}
        </>
    );
};

export default SecondShop;
