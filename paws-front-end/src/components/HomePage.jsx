import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const HomePage = function (props) {
  // JSX to be displayed if user is logged out
  const guestGreeting = function () {
    return (
      <p>
        No account? Sign up <Link to="/register-user">here</Link>
      </p>
    );
  };

  return (
    <div>
      {/*Display profile page if user logged in, else prompt user to sign up */}
      {props.loggedIn ? (
        <UserProfile userName={props.userName} />
      ) : (
        guestGreeting()
      )}
    </div>
  );
};

export default HomePage;
