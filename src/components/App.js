import React from 'react'
import data from '../watchlist/data';
import Header from './Header';
import Button from './Button';
import Card from './Card';

export default function App() {
    const cards = data.map(element => {
        return (
            <Card 
                key={element.id}
                {...element}
            />
        )
    })

    return (
        <div className='app'>
            <Header />
            <Button />
            <section className='card--container'>
                {cards}
            </section>
        </div>
    )      
}