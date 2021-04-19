import React from "react";
import { LoginForm } from "./Login";
import  Logout  from "./Logout";


export default () => {
  return (
    <div>
      <h1>Menu</h1> <LoginForm />
      <Logout />
    </div>
  );
};
