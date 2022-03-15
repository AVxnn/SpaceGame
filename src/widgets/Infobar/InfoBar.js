import React from 'react';
import {useSelector} from "react-redux";

const InfoBar = () => {

    const money = useSelector(state => state.money)

    return (
        <>
            <span className='infobar text-item'>{money.toFixed(3)}</span>
        </>
    );
};

export default InfoBar;
