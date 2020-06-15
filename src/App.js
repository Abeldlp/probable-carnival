import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Obras from "./components/Obras";

/*MOBILE COMPONETS*/
import NavbarMobile from "./components/mobile/NavbarMobile";
import MainMobile from "./components/mobile/MainMobile";
import WhoMobile from "./components/mobile//WhoMobile";
import ContactMobile from "./components/mobile/ContactMobile";

function App() {
  let width = window.innerWidth;
  if (width > 500) {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/quienessomos" component={Who} />
            <Route path="/obras" component={Obras} />
            <Route path="/contacta" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  } else if (width < 500) {
    return (
      <div>
        <Router>
          <NavbarMobile />
          <Switch>
            <Route path="/" exact component={MainMobile} />
            <Route path="/quienessomos" component={WhoMobile} />
            <Route path="/obras" component={Obras} />
            <Route path="/contacta" component={ContactMobile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
