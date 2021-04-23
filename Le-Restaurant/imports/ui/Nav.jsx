import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";
import BookTable from "./BookTable";
import CurrentOrder from "./CurrentOrder";

export default function Nav() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logout = () => {
    Meteor.logout();
    if (Meteor.user() === null) {
      console.log("logout successful");
    }
  };

  return (
    <Router>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="disable"
          textColor="primary"
          width="device-width"
          centered
        >
          <Link to="/Home">
            <Tab label="Home" />
          </Link>
          <Link to="/Menu">
            <Tab label="Menu" />
          </Link>
          <Link to="/Current-Order">
            <Tab label="Current  order" />
          </Link>
          <Link to="/Book-Table">
            <Tab label="Book Table" />
          </Link>
          <Link to="/Contact-us">
            <Tab label="Contact us" />
          </Link>
          <Link to="/Logout" onClick={logout}>
            <Tab label="Logout" />
          </Link>
        </Tabs>
      </Paper>

      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Menu">
        <Menu />
      </Route>
      <Route path="/Current-Order">
        <CurrentOrder />
      </Route>
      <Route path="/Book-Table">
        <BookTable />
      </Route>
      <Route path="/Contact-us">
        <Contact />
      </Route>
    </Router>
  );
}
