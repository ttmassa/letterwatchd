import React, { useState, useEffect } from 'react';
import '../style.css';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import filmData from '../watchlist/data';
import { getRandomIndex } from '../functions/utils';

export default function App() {
    const [isCardVisible, setCardVisible] = useState(false);
    const [randomIndex, setRandomIndex] = useState(null);

    const toggleOverlay = () => {
        setCardVisible(!isCardVisible);
    };

    const handleClick = () => {
        const newIndex = getRandomIndex(filmData.length);
        setRandomIndex(newIndex);
        toggleOverlay();
    }

    const resetState = () => {
        setCardVisible(false);
        setRandomIndex(null);
    }

    return (
        <div className='app'>
            <Header />
            <Button onToggleOverlay={handleClick} />
            {isCardVisible && (
                <div className="overlay">
                    <section className={`card--container ${isCardVisible ? 'card-visible' : ''}`}>
                        {randomIndex !== null && (
                            <div>
                                <Card key={filmData[randomIndex].id} {...filmData[randomIndex]}
                                    resetState={resetState} />
                            </div>
                        )}
                    </section>
                </div>
            )}
        </div>
    )
}
