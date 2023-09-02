import React from 'react'
import { useState } from 'react'

export default function Button({ onToggleOverlay }) {
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
            onMouseLeave={toToggle}
            onClick={onToggleOverlay}>
                Watch me
            </button>
        </div>
    )
}
