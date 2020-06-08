import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Who from "./components/Who";
import Contact from "./components/Contact"
import Obras from "./components/Obras"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Main} />
          <Route path="/quienessomos" component={Who} />
          <Route path="/obras" component={Obras} />
          <Route path="/contacta" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
