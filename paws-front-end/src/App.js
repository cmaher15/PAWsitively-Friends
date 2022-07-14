import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterUser from "./components/RegisterUser";
import RegisterDog from "./components/RegisterDog";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import DogMatches from "./components/DogMatches";
import UsersDogs from "./components/UsersDogs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import DogProfile from "./components/DogProfile";
import Status from "./components/Status";
// import DogProfileTemplate from "./components/DogProfileTemp";

// Helpers
import {
  getCoordinates,
  fetchCoordinates,
  sendCoordinatesToServer,
  // apiLocationSetState
} from "./helpers/getCoordinates";

//Chat
import Chat from "./Chat";

const App = () => {
  // GLOBAL STATE
  const [loggedIn, setLoggedIn] = useState(true);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("Snoopy123");
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  // GET USER LOCATION
  const [userCoordinates, setUserCoordinates] = useState();
  // Update userCoordinates, after async request for location is fulfilled
  const getLongLat = async function () {
    try {
      await fetchCoordinates(getCoordinates).then((results) => {
        console.log("results, App.js: ", results);
        setUserCoordinates(results);
        // After state is set, pass lat/longitude to database
        // sendCoordinatesToServer(userCoordinates, ownerId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLongLat();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          userName={userName}
          setLoggedIn={setLoggedIn}
          setUrlPath={setUrlPath}
          setUserId={setUserId}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage loggedIn={loggedIn} userName={userName} />}
          />
          <Route
            path="/register-user"
            element={<RegisterUser loggedIn={loggedIn} />}
          />
          <Route path="/register-dog" element={<RegisterDog />} />
          <Route path="/login" element={<Login setUserId={setUserId} />} />
          <Route
            path="/user-profile"
            element={
              <UserProfile userName={userName} setUrlPath={setUrlPath} />
            }
          />
          <Route path="/dog-matches" element={<DogMatches />} />
          <Route path="/users-dogs" element={<UsersDogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer urlPath={urlPath} setUrlPath={setUrlPath} />
        <RegisterDog />
        <Status />
        {/* <RegisterUser /> */}
        <DogProfile />
        <UserProfile />
      </BrowserRouter>
    </div>
  );
};

export default App;
