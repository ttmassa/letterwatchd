import React, { useState } from 'react';
import '../style.css';
import data from '../watchlist/data';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import { getRandomIndex } from '../functions/utils';

export default function App() {
    const [isCardVisible, setCardVisible] = useState(false);
    const [randomIndex, setRandomIndex] = useState(null);

    const toggleOverlay = () => {
        setCardVisible(!isCardVisible);
    };

    const handleClick = () => {
        const newIndex = getRandomIndex(data.length);
        setRandomIndex(newIndex);
        toggleOverlay();
    }

    return (
        <div className='app'>
            <Header />
            <Button onToggleOverlay={handleClick} />            {isCardVisible && (
                <div className="overlay">
                    <section className={`card--container ${isCardVisible ? 'card-visible' : ''}`}>
                        {randomIndex !== null && (
                            <Card key={data[randomIndex].id} {...data[randomIndex]} />
                        )}
                    </section>
                </div>
            )}
        </div>
    )      
}
