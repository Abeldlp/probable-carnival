import React, { Component } from "react";

export default class ImageCompact extends Component {
  render() {
    return (
      <div style={styles.main}>
        <img style={styles.image} src={this.props.image} alt="logo" />
        <i
          className="fa fa-close fa-2x"
          style={styles.button}
          onClick={this.props.button}
        ></i>
      </div>
    );
  }
}

const styles = {
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 8,
  },
  image: {
    height: "100vh",
  },
  button: {
    padding: 15,
    color: "white",
    position: "fixed",
    right: "20px",
    top: "20px",
    cursor: "pointer",
    background: "#333333",
    borderRadius: "18px",
  },
};
