import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarMobile extends Component {
  showMenu() {
    const menu = document.getElementById("fullmenu");
    menu.style.transform = "translate(0px)";
  }

  closeMenu() {
    const menu = document.getElementById("fullmenu");
    menu.style.transform = "translate(-450px)";
  }

  render() {
    return (
      <div>
        <div>
          <i
            className="fa fa-bars fa-2x"
            style={styles.buttonOpen}
            onClick={this.showMenu}
          ></i>
        </div>
        <div style={styles.fullMenu} id="fullmenu">
          <div style={styles.hiddenMenu}>
            <Link style={styles.links} to="/">
              INICIO
            </Link>
            <Link style={styles.links} to="/quienessomos">
              QUIENES SOMOS
            </Link>
            <Link style={styles.links} to="/obras">
              OBRAS
            </Link>
            <Link style={styles.links} to="/contacta">
              CONTACTA
            </Link>
          </div>
          <div>
            <i
              className="fa fa-close fa-2x"
              style={styles.button}
              onClick={this.closeMenu}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  fullMenu: {
    display: "flex",
    position: "fixed",
    height: "100%",
    width: "100%",
    zIndex: 10,
    transition: "all ease-in-out 0.5s",
    transform: "translate(-450px)",
    margin: "auto",
  },
  hiddenMenu: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    backgroundColor: "#333333",
    fontSize: "20px",
  },
  links: {
    color: "white",
    textDecoration: "none",
    padding: 30,
  },
  button: {
    padding: 20,
    backgroundColor: "white",
  },
  buttonOpen: {
    position: "fixed",
    padding: 15,
    background: "#333333",
    zIndex: 5,
    color: "white",
    margin: 20,
    borderRadius: "50%",
    width:"50px",
    height:"50px",
    display: "flex",
    justifyContent:"center",
    alignItems:"center"
  },
};
