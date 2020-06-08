import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Resources/media/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-buttons">
          <li>
            <Link style={styles.link} to="/home">
              INICIO
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/quienessomos">
              QUIENES SOMOS
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/obras">
              OBRAS
            </Link>
          </li>
          <li id="last">
            <Link style={styles.link} to="/contacta">
              CONTACTA
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  link: {
    textDecoration: "none",
    color: "black",
  },
};
