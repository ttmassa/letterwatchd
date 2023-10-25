import React from 'react';

export default function Login() {
    return (
        <div className="login--container">
            <h2 className='login--title'>Letterboxd username?</h2>
            <input className='login--input-username' required autoFocus></input>
        </div>
    )
}