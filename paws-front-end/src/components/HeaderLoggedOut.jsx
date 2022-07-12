import React from "react";
import { useState } from "react";
import axios from "axios";

// We will show a login option on top of the header, or perhaps no header?
const HeaderLoggedOut = function () {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = function (e) {
    // Prevent page refresh on for submit
    e.preventDefault();

    // Axios post request below, submit to /login with username + password
    const sendCredentials = data => {
      axios.post(`/api/login/`, data).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    };

    sendCredentials();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          onChange={e => e.target.value}
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button>Sign In</button>
      </form>
    </>
  );
};

export default HeaderLoggedOut;
