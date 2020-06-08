import React, { Component } from "react";
import ImageCompact from "../components/ImageCompact";
import photo1 from "../obras/1.jpg";
import photo2 from "../obras/2.jpg";
import photo3 from "../obras/3.jpg";
import photo4 from "../obras/4.jpg";
import photo5 from "../obras/5.jpg";
import photo6 from "../obras/6.jpg";
import photo7 from "../obras/7.jpg";
import photo8 from "../obras/8.jpg";
import photo9 from "../obras/9.jpg";
import photo10 from "../obras/10.jpg";
import photo11 from "../obras/11.jpg";
import photo12 from "../obras/12.jpg";
import photo13 from "../obras/13.jpg";
import photo14 from "../obras/14.jpg";
import photo15 from "../obras/15.jpg";
import photo16 from "../obras/16.jpg";
import photo17 from "../obras/17.jpg";
import photo18 from "../obras/18.jpg";
import photo19 from "../obras/19.jpg";
import photo20 from "../obras/20.jpg";
import photo21 from "../obras/21.jpg";
import photo22 from "../obras/22.jpg";
import photo23 from "../obras/23.jpg";
import photo24 from "../obras/24.jpg";
import photo25 from "../obras/25.jpg";
import photo26 from "../obras/26.jpg";
import photo27 from "../obras/27.jpg";

export default class Obras extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
        photo13,
        photo14,
        photo15,
        photo16,
        photo17,
        photo18,
        photo19,
        photo20,
        photo21,
        photo22,
        photo23,
        photo24,
        photo25,
        photo26,
        photo27,
      ],
      opened: 0,
      focusedImage: "",
    };

    this.clickHandle = this.clickHandle.bind(this);
    this.clickDisHandle = this.clickDisHandle.bind(this);
  }

  clickHandle(e) {
    this.setState({
      opened: 1,
      focusedImage: e.target.id,
    });
    console.log(this.state.focusedImage);
  }

  clickDisHandle(e) {
    this.setState({
      opened: 0,
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Obras</h1>
        <div style={styles.containerStyle}>
          {this.state.images.map((image) => {
            return (
              <div
                key={image + 1}
                id={image}
                style={{
                  backgroundImage: "url(" + image + ")",
                  height: "400px",
                  width: "400px",
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 5,
                  cursor: "pointer",
                  boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
                  transition: "all ease-in-out 0.5s",
                }}
                onClick={this.clickHandle}
              ></div>
            );
          })}
        </div>
        <div
          style={{
            opacity: this.state.opened,
            transition: "all ease-in-out 0.5s",
            position: "fixed",
            zIndex: this.state.opened - 1,
            width: "100%",
            bottom: "1px",
          }}
        >
          <ImageCompact
            image={this.state.focusedImage}
            button={this.clickDisHandle}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  imgStyle: {
    height: "400px",
  },
};
