import React, { Component } from "react";
import vlad from "../../Resources/media/vlad.jpg";
import { Link } from "react-router-dom";
import logo from "../../Resources/media/fjdlogo.png";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ height: "200px", marginBottom: "20px" }}
            src={logo}
            alt="logo"
          />
        </div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Montserrat Subrayada",
            padding: "0px 10px",
          }}
        >
          Construimos
        </h1>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Montserrat Subrayada",
            padding: "0px 10px",
          }}
        >
          un
        </h1>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Montserrat Subrayada",
            marginBottom: "20px",
          }}
        >
          futuro mejor
        </h1>
        <h1 style={styles.title}>FJD</h1>
        <h4 style={styles.parragraph}>
          Contamos con un equipo de profesionales que se adapten a tus
          necesidades. Nuestros profesionales de interiorismos pueden diseñar
          tus interiores en todos los estilos. Entregamos tu obra terminada,
          limpia y amueblada (incluso electrodomésticos, etc..) si lo deseas.
        </h4>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img style={{ width: "100%" }} src={vlad} alt="logo" />

          <div style={{ paddingBottom: "20px" }}>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Montserrat Subrayada",
                padding: "0px 10px",
              }}
            >
              La casa de tus sueños
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Montserrat Subrayada",
                padding: "0px 10px",
              }}
            >
              no tiene porque
            </h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Montserrat Subrayada",
                padding: "0px 10px",
              }}
            >
              ser un sueño
            </h1>
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
            <li style={styles.listItem}>Amueblados</li>
            <li style={styles.listItem}>Cuartos de bano</li>
            <li style={styles.listItem}>Tuberias</li>
            <li style={styles.listItem}>Instalacion de electrodomesticos</li>
            <li style={styles.listItem}>Amueblado</li>
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
          <div className="footer-box" id="box-perfil">
            <h2
              style={{
                textAlign: "center",
                position: "relative",
                right: "40%",
              }}
            >
              Encarnacion
            </h2>
            <p>Administrativa financial</p>
            <p className="info">EMAIL:</p>
            <p>encarniborrero@gmail.com</p>
            <p className="info">Numero de telefono</p>
            <p>630910900</p>
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
    letterSpacing: "8px",
    textAlign: "center",
    padding: "20px",
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
    width: "50%",
    margin: "auto",
    listStyle: "square",
    paddingTop: "20px",
    paddingBottom: "80px",
    fontFamily: "Montserrat",
  },
  listItem: {
    padding: "5px",
  },
};
