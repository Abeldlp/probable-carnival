import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Resources/media/fjdlogo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img style={{height: "55px"}} src={logo} alt="logo" />
        </div>
        <ul className="nav-buttons">
          <li>
            <Link id="navitem" to="/">
              INICIO
            </Link>
          </li>
          <li>
            <Link id="navitem" to="/quienessomos">
              QUIENES SOMOS
            </Link>
          </li>
          <li>
            <Link id="navitem" to="/obras">
              OBRAS
            </Link>
          </li>
          <li id="last">
            <Link id="navitem" to="/contacta">
              CONTACTA
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

