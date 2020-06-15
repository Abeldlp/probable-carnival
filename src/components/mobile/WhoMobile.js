import React, { Component } from "react";

import image1 from "../../Resources/media/sevilla-desde-arriba.jpg";
import image2 from "../../Resources/media/calle-bares.jpg";
import image3 from "../../Resources/media/casa-rustica.jpg";

export default class WhoMobile extends Component {
  render() {
    return (
      <div>
        <div style={styles.image1}></div>

        <div style={styles.text}>
          <h2>Una empresa nacida de las raices de sevilla capital</h2>
          <p>
            Una empresa nacida de las raices de Sevilla con mas de 20 años de
            experiencia. Con una gran cartelera de clientes satisfechos por
            nuestro trabajo.
          </p>
        </div>

        <div style={styles.image2}></div>

        <div style={styles.text}>
          <h2>Construimos la casa de tus sueños</h2>
          <p>
            Contamos con un equipo profesional para diseñar tu construcción, te
            asesoramos en tus reformas integrales y reformas en general.
          </p>
        </div>

        <div style={styles.image3}></div>

        <div style={styles.text}>
          <h2>Sector</h2>
          <p>Nos desplazamos hasta Sevilla, Huelva, Cadiz y Cordoba.</p>
        </div>
      </div>
    );
  }
}

const styles = {
  image1: {
    backgroundImage: "url(" + image1 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  },
  image2: {
    backgroundImage: "url(" + image2 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  },
  image3: {
    backgroundImage: "url(" + image3 + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  },
  text: {
    textAlign: "center",
    padding: " 20px 10px",
    backgroundColor: "rgb(19, 19, 19)",
    color: "whitesmoke",
  },
};
