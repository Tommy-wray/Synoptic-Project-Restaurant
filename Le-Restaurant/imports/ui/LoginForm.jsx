import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
    if (Meteor.user() === null) {
      console.log("Please login");
    } else {
      console.log("you are logged in as", Meteor.user().username);
    }
  };

  return (
    <div>
      <h1>Welcome to LeRestaurant! <br/>Please login</h1>
      <form onSubmit={submit} className="c-login-form">
        <label className="c-loginForm-label">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="c-loginForm-inputs"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label className="c-loginForm-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="c-loginForm-inputs"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="c-loginForm-Button">
          Log In
        </button>
      </form>
    </div>
  );
};
