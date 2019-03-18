import React, { Component } from "react";
import "./App.css";
import Scoreboard from "../src/components/Scoreboard";
import User from "../src/components/User";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import NewGame from "./components/NewGame";
import NewUser from "./components/NewUser";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import DatabaseOutput from "./components/DatabaseOutput";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Scoreboard} />
              <Route path="/newgame" component={NewGame} />
              <Route path="/adduser" component={User} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/newuser" component={NewUser} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
