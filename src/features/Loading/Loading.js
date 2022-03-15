import React from 'react';
import loadingGif from './img/loading.gif'

const Loading = () => {
    return (
        <>
            <img className='loading' src={loadingGif} alt="loading..."/>
        </>
    );
};

export default Loading;
