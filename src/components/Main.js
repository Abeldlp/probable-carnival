import React, { Component } from "react";
import vlad from "../Resources/media/vlad.jpg";
import trabajo from "../Resources/media/trabajo.jpg";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="banner-img">
          <img src={trabajo} alt="" />
        </div>
        <h1 className="banner-text1">Construimos un</h1>
        <h1 className="banner-text2">futuro mejor</h1>

        <div className="main-container">
          <figure>
            <i className="fa fa-wrench fa-5x"></i>
            <figcaption className="title">PROFESIONALIDAD</figcaption>
            <figcaption className="main-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolores doloribus dignissimos voluptas ad magni cupiditate
              obcaecati aliquam eveniet labore?
            </figcaption>
          </figure>
          <figure>
            <i className="fa fa-diamond fa-5x"></i>
            <figcaption className="title">CALIDAD</figcaption>
            <figcaption className="main-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos perspiciatis harum laudantium maxime nemo tempora
              numquam aut distinctio porro ipsa!
            </figcaption>
          </figure>
          <figure>
            <i className="fa fa-tachometer fa-5x"></i>
            <figcaption className="title">RAPIDEZ</figcaption>
            <figcaption className="main-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem reiciendis consequuntur tenetur quis cupiditate
              labore corporis provident doloremque, illo dolorem.
            </figcaption>
          </figure>
        </div>
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
          <div className="box1">
            <h1 className="box1-text">Ponte en contacto</h1>
          </div>
          <div className="box2"></div>
        </div>

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
          <div className="footer-box">
            <h2>Abel de la Paz</h2>
            <p>Marketing y contenido digital</p>
            <p className="info">EMAIL:</p>
            <p>loressfgasdg@gmail.com</p>
            <p className="info">Numero de telefono:</p>
            <p>654845515</p>
          </div>
        </footer>
      </div>
    );
  }
}
