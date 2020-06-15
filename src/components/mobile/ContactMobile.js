import React, { Component } from "react";

export default class ContactMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      when: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleWhenChange = this.handleWhenChange.bind(this);
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

  handleWhenChange(e) {
    this.setState({
      when: e.target.value,
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
        <h1
          style={{ textAlign: "center", padding: "30px 20px", margin: "auto" }}
        >
          Contacta
        </h1>
        <form id="contact-form" style={styles.formstyle}>
          <input
            style={styles.formitem}
            type="text"
            placeholder="Nombre..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <input
            style={styles.formitem}
            type="email"
            placeholder="Correo Electronico..."
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <input
            style={styles.formitem}
            type="text"
            placeholder="Tema..."
            value={this.state.subject}
            onChange={this.handleSubjectChange}
            required
          />
          <label htmlFor="timing">¿Para cuando seria la obra?</label>
          <select
            name="timing"
            id="timing"
            style={styles.formitem}
            onChange={this.handleWhenChange}
          >
            <option value="ahora">AHORA</option>
            <option value="tres meses">TRES MESES</option>
            <option value="mas adelante">MAS ADELANTE</option>
          </select>
          <textarea
            cols="30"
            rows="10"
            placeholder="Deja tu mensaje"
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
    width: "80%",
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
