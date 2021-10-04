import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import Locations from "./components/Locations";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="*">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
