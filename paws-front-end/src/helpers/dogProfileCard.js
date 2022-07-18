import React, { useState } from "react";
import "../styles/DogProfile.css";
import "../styles/ProfileSpinner.css";
import Chat from "../Chat";
import Favourites from "../components/Favourites";

//JSX template for each dog profile

const DogProfileCard = function (props) {
  const [dog, setDog] = useState(props.dog);
  const [owner, setOwner] = useState(props.owner);
  const [isShown, setIsShown] = useState(false);

  // console.log("dog in JSX: ", dog.id);
  // console.log("owner in JSX: ", owner);

  const handleChat = (event) => {
    setIsShown((current) => !current);
  };

  const generateRandomInteger = function (max) {
    return Math.floor(Math.random() * max) + 1;
  };

  return (
    <div className="dog-container">
      <div className="dogProfile">
        <div>
          <img className="dog" src={dog.photo_url} />
        </div>
        <span className="icons">
          <h2 className="dogName">{dog.name}</h2>
          <Favourites dog_id={dog.id} />
          <button className="sendChatBtn" onClick={handleChat}>
            <i
              className="fa-solid fa-message fa-xl"
              onMouseOver={({ target }) => (target.style.color = "cadetblue")}
              onMouseOut={({ target }) => (target.style.color = "gray")}
            ></i>
          </button>
        </span>
        <span className="locationInfo">
          <i className="fa-solid fa-location-dot fa-xl"></i>
          <p className="distance">{generateRandomInteger(8)} km away</p>
        </span>
        <span className="dogInfo">
          <h3>{dog.gender}</h3>
          <h3>{dog.breed}</h3>
          <h3>{dog.age} years</h3>
        </span>
        <p className="description">{dog.description}</p>
        <span className="parent">
          <img className="userThumbnail" src={owner.thumbnail_photo_url} />
          <h4>Parent: {owner.name}</h4>
        </span>
        <div>
          {isShown && (
            <Chat
              owner_photo={owner.thumbnail_photo_url}
              owner_name={owner.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { DogProfileCard };
