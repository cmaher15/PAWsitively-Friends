import React from "react";
import '../styles/DogProfile.scss'

export default function DogProfile() {
  return (
    <main className="dogProfile">
    <div>
      <img className="dog"
      src="images/happy_baby.jpeg"/>
    </div>
    <h2>Rocky</h2>
    <p>Rocky is a good boy who likes jumping in puddles! He would absolutely love to go on a walk with you.</p>
    <p className="icons">
    <i className="fa-solid fa-location-dot fa-xl" id="location"></i>
    <i className="fa-solid fa-heart fa-xl" id="heart"></i>
    <i className="fa-solid fa-message fa-xl" id="chat"></i>
    </p>
  </main>
  )
}