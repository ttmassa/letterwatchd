import React from 'react'
import { useState } from 'react'

export default function Button() {
    const [buttonClass, setButtonClass] = useState('button--main')

    function toToggle() {
        if (buttonClass === 'button--main') {
            setButtonClass('button--hovered');
        } else {
            setButtonClass('button--main');
        }
    }

    return (
        <div className='button'>
            <button 
            className={buttonClass} 
            onMouseEnter={toToggle} 
            onMouseLeave={toToggle}>
                Watch me
            </button>
        </div>
    )
}
