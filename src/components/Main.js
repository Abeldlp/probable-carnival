import React, { Component } from "react";
import vlad from "../Resources/media/vlad.jpg";
import trabajo from "../Resources/media/trabajo.jpg";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="banner-img">
          <img src={trabajo} alt="" />
        </div>
        <h1 className="banner-text1">Construimos un</h1>
        <h1 className="banner-text2">futuro mejor</h1>
        <h1 style={styles.title}>FJD</h1>
        <h4 style={styles.parragraph}>
          Contamos con un equipo de profesionales que se adapten a tus
          necesidades. Nuestros profesionales de interiorismos pueden diseñar
          tus interiores en todos los estilos. Entregamos tu obra terminada,
          limpia y amueblada (incluso electrodomésticos, etc..) si lo deseas.
        </h4>

        <div className="design-box">
          <div className="design"></div>
        </div>

        <div className="explanation-container">
          <div className="ex-div-container">
            <img className="try" src={vlad} alt="logo" />
          </div>
          <div className="explanation-text">
            <h1 className="explanation-text1">La casa de tus sueños</h1>
            <h1 className="explanation-text2">no tiene porque</h1>
            <h1 className="explanation-text3">ser un sueño</h1>
          </div>
        </div>

        <div className="separator">
          <div className="box2"></div>
          <div className="box1">
            <h1 className="box1-text">EXPERIENCIA</h1>
          </div>
        </div>

        <div>
          <h3 style={styles.titles}>
            Tenemos experiencia en las siguientes cualidades
          </h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Cocinas</li>
            <li style={styles.listItem}>Electricidad</li>
            <li style={styles.listItem}>Cableado</li>
            <li style={styles.listItem}>Tejados</li>
            <li style={styles.listItem}>Piscinas</li>
            <li style={styles.listItem}>Decoracion</li>
            <li style={styles.listItem}>Cuartos de bano</li>
            <li style={styles.listItem}>Tuberias</li>
            <li style={styles.listItem}>Instalacion de electrodomesticos</li>
            <li style={styles.listItem}>Estructuras de hormigon</li>
            <li style={styles.listItem}>Derrumbre</li>
            <li style={styles.listItem}>Desecho de escombros</li>
          </ul>
        </div>

        <div className="separator">
          <div className="box1">
            <h1 className="box1-text">Nos define</h1>
          </div>
          <div className="box2"></div>
        </div>
        <div className="main-container">
          <figure>
            <i className="fa fa-wrench fa-5x"></i>
            <figcaption className="title">PROFESIONALIDAD</figcaption>
            <figcaption className="main-text">
              Ofrecemos asesoramiento para la realización de la reforma, gestión
              integral o construcción de tu vivienda. Nuestra atención es
              personalizada para cada cliente, realizando un seguimiento de la
              reforma o construcción para evitar molestias.
            </figcaption>
          </figure>
          <figure>
            <i className="fa fa-diamond fa-5x"></i>
            <figcaption className="title">CALIDAD</figcaption>
            <figcaption className="main-text">
              Siempre con productos de primera calidad adaptadas a la economía
              de cada cliente. Una calidad dedicada por artesanos profesionales
              los cuales ponen empeno y esfuerzo en entregar un trabajo
              inigualable.
            </figcaption>
          </figure>
          <figure>
            <i className="fa fa-tachometer fa-5x"></i>
            <figcaption className="title">RAPIDEZ</figcaption>
            <figcaption className="main-text">
              La puntualidad en la realización es importante para el cliente,
              nos comprometemos a tener fecha de realización de obra. El cliente
              expone sus necesidades y nosotros ponemos lo medios para se
              realice.
            </figcaption>
          </figure>
        </div>

        <div className="separator">
          <div className="box2"></div>
          <div className="box1">
            <h1 className="box1-text">Ponte en contacto</h1>
          </div>
        </div>

        <h4 style={styles.titles}>
          Si al ver la lista de nuestras dedicaciones siente que podemos serle
          de ayuda por favor pongase en contacto mediante la siguiente
          informacion o envienos un mensaje <Link to="/contacta">aqui</Link>
        </h4>
        <footer>
          <div className="footer-box">
            <h2>Paco Jimenez</h2>
            <p>Gerente y Jefe de empresa</p>
            <p className="info">EMAIL:</p>
            <p>loressfgasdg@gmail.com</p>
            <p className="info">Numero de telefono</p>
            <p>654845515</p>
          </div>
          <div className="footer-box" id="box-perfil">
            <h2>Encarnacion Borrero</h2>
            <p>Administrativa financial</p>
            <p className="info">EMAIL:</p>
            <p>loressfgasdg@gmail.com</p>
            <p className="info">Numero de telefono</p>
            <p>654845515</p>
          </div>
        </footer>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: "auto",
    color: "lightgrey",
    fontFamily: "Montserrat",
    backgroundColor: "rgb(19, 19, 19)",
    paddingTop: "50px",
    letterSpacing: "8px",
    textAlign: "center",
  },
  parragraph: {
    margin: "auto",
    color: "lightgrey",
    paddingBottom: "10%",
    fontFamily: "Montserrat",
    backgroundColor: "rgb(19, 19, 19)",
    width: "100%",
    paddingTop: "50px",
    paddingLeft: "10%",
    paddingRight: "10%",
    letterSpacing: "1px",
  },
  titles: {
    width: "80%",
    textAlign: "center",
    margin: "auto",
    paddingTop: "30px",
    fontFamily: "Montserrat",
  },
  list: {
    columnCount: 2,
    width: "50%",
    margin: "auto",
    listStyle: "square",
    paddingTop: "20px",
    paddingBottom: "80px",
    fontFamily: "Montserrat",
    fontSize: "18px",
  },
  listItem: {
    padding: "5px",
  },
};
