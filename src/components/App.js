import React, { useState } from 'react';
import data from '../watchlist/data';
import Header from './Header';
import Button from './Button';
import Card from './Card';
import { getRandomIndex } from '../functions/utils';

export default function App() {
    const [isCardVisible, setCardVisible] = useState(false);
    const [randomIndex, setRandomIndex] = useState(null); // Store the random index here

    const toggleOverlay = () => {
        setCardVisible(!isCardVisible);
    };

    const handleClick = () => {
        const newIndex = getRandomIndex(data.length);
        setRandomIndex(newIndex); // Update the random index in the state
        toggleOverlay(); // Show the card when the button is clicked
    }

    return (
        <div className='app'>
            <Header />
            <Button onToggleOverlay={handleClick} /> {/* Pass the handleClick function */}
            <section className='card--container'>
                {isCardVisible && randomIndex !== null && (
                    <Card key={data[randomIndex].id} {...data[randomIndex]} />
                )}
            </section>
        </div>
    )      
}
