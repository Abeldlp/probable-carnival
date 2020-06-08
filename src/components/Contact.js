import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Change input handlers
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubjectChange(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: true,
    });
    /*
    await axios.post("http://localhost:3001/api/message", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    });*/
  }

  render() {
    return (
      <div className="secondary-screen">
        <h1 style={{ textAlign: "center", padding: 10 }}>
          Contacta con nosotros
        </h1>
        <form style={styles.formstyle}>
          <input
            style={styles.formitem}
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <input
            style={styles.formitem}
            type="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <input
            style={styles.formitem}
            type="text"
            placeholder="Subject..."
            value={this.state.subject}
            onChange={this.handleSubjectChange}
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Drop me your message"
            style={styles.formitem}
            value={this.state.message}
            onChange={this.handleMessageChange}
            required
          ></textarea>
          <input
            id="sendbutton"
            type="submit"
            value="Send"
            onClick={this.handleSubmit}
          />
        </form>
        <p>Or add me directly on wassap: +31 627 193 590</p>
      </div>
    );
  }
}

const styles = {
  formstyle: {
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "70%",
    width: "50%",
  },
  formitem: {
    padding: 10,
    margin: 5,
    outline: "none",
    borderRadius: 18,
    border: "solid 1px #333333",
    resize: "none",
  },
  sendbutton: {
    padding: 10,
    outline: "none",
    borderRadius: 18,
    color: "white",
    backgroundColor: "#333333",
    border: "none",
    cursor: "pointer",
  },
  sns: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "10px",
  },
  sent_icon: {
    height: "200px",
  },
};
