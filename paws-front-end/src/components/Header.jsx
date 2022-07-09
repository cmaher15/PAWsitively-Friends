import React from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

const Header = function (props) {
  return (
    <div className="header-div">
      <h1>
        <Link to={"/"} onClick={() => props.setUrlPath("/")}>
          PAWs
        </Link>
      </h1>
      <span className="title-descrition">Pups. Awaiting. Walks.</span>

      {props.loggedIn ? (
        <HeaderLoggedIn
          userName={props.userName}
          setLoggedIn={props.setLoggedIn}
        />
      ) : (
        <HeaderLoggedOut />
      )}
    </div>
  );
};

export default Header;
