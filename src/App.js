import React, { Component } from "react";
import "./App.css";
import Scoreboard from "../src/components/Scoreboard";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import NewGame from "./components/NewGame";
import UserProfile from "./components/UserProfile";
import NewUser from "./components/NewUser";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import SignUp from "./components/auth/SignUp";
import DatabaseOutput from "./components/DatabaseOutput";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./components/Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
    this.listener = auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar authUser={this.state.authUser} />
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Scoreboard} />
              <Route path="/newgame" component={NewGame} />
              <Route path="/profile" component={UserProfile} />
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
