import React, { Component } from "react";

export default class ImageCompact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.main}>
        <img style={styles.image} src={this.props.image} alt="logo" />
        <button style={styles.button} onClick={this.props.button}>
          {" "}
          Cerrar{" "}
        </button>
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
  },
  image: {
    height: "100vh",
  },
  button: {
    padding: 10,
    backgroundColor: "grey",
    position: "absolute",
    right: "20px",
    top: "20px",
    borderRadius: "18px",
  },
};
