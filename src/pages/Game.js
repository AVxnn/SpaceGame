import React from 'react';
import {getAuth} from "firebase/auth";
import Navbar from "../widgets/Navbar/Navbar";
import InfoBar from "../widgets/Infobar/InfoBar";
import PlanetClicker from "../widgets/PlanetClicker/PlanetClicker";

const Game = () => {

    const auth = getAuth()
    return (
        <>
            <section className='game-container'>
                <InfoBar />
                <PlanetClicker />
                <Navbar />
            </section>
        </>
    );
};

export default Game;
