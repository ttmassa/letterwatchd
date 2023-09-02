import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={props.coverImage} alt='film cover'/>
            <h4 className='card--title'>{props.title}</h4>
            <p className='card--informations'>{props.director}, {props.releaseDate}</p>
        </div>
    )
}