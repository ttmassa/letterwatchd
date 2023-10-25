import React, { useState } from "react";
import "../style.css";
import Header from "./Header";
import Button from "./Button";
import Card from "./Card";
import Login from "./Login";
import filmData from "../watchlist/data";
import { getRandomIndex } from "../functions/utils";

export default function App() {
  const [isCardVisible, setCardVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);
  const [randomIndex, setRandomIndex] = useState(null);
  const [username, setUsername] = useState(""); 

  const toggleOverlay = () => {
    setCardVisible(!isCardVisible);
  };

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  const handleUsernameSubmit = (newUsername) => {
    setUsername(newUsername);
    toggleLogin();
  };

  const handleClick = () => {
    const newIndex = getRandomIndex(filmData.length);
    setRandomIndex(newIndex);
    toggleOverlay();
  };

  const resetState = () => {
    setCardVisible(false);
    setRandomIndex(null);
  };

  return (
    <div className="app">
      <Header />
      {isLoginVisible && (
        <div>
          <Login onUsernameSubmit={handleUsernameSubmit} />
        </div>
      )}
      <Button onToggleOverlay={handleClick} />
      {isCardVisible && (
        <div className="overlay">
          <section
            className={`card--container ${isCardVisible ? "card-visible" : ""}`}
          >
            {randomIndex !== null && (
              <div>
                <Card
                  key={filmData[randomIndex].id}
                  {...filmData[randomIndex]}
                  resetState={resetState}
                />
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
