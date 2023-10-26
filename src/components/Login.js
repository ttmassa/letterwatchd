import React, { useState } from 'react';


const inputValue = ''; 
export default function Login({ onUsernameSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onUsernameSubmit(inputValue);
  };

  return (
    <div className="login--container">
      <h2 className='login--title'>Letterboxd username?</h2>
      <input
        className='login--input-username'
        required
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button className='submit-form--button' onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export { inputValue };
