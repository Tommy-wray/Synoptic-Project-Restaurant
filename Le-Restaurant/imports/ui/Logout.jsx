import React from "react";

export default () => {
  const logout = () => {
    Meteor.logout();
    if (Meteor.user() === null) {
      console.log("logout successful");
    }
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
