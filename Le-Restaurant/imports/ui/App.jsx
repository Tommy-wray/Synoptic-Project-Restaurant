import React from "react";
import Nav from "./Nav";
import { LoginForm } from "./LoginForm";
import { useTracker } from "meteor/react-meteor-data";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <div>
      <img src="/images/restaurant.png" className="c-logo" />
      {user ? <Nav /> : <LoginForm />}
    </div>
  );
};
