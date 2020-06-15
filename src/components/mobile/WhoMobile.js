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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            exercitationem magni nisi tenetur odio corporis quas quisquam
            accusamus, tempora quo consequatur mollitia ipsam! Accusantium
            quibusdam, voluptatibus modi reiciendis unde laborum velit a quis
            non, sit magni eligendi officia nulla dolorum facere! Quod
            praesentium laborum fugit? Cum, modi, dolorem, officiis et
            voluptates enim corrupti assumenda voluptatem rem fugit quos sed
            reiciendis omnis dignissimos error magni tempora eos est
            exercitationem fugiat corporis nostrum pariatur velit unde.
            Laboriosam, laborum explicabo culpa aliquam praesentium corporis
            harum minus eos tempora quo itaque? At dolores corrupti, beatae
            repudiandae incidunt, similique illo ipsam voluptate, cum iusto
            assumenda?
          </p>
        </div>

        <div style={styles.image2}></div>

        <div style={styles.text}>
          <h2>
            Construimos la casa de tus sueños entre las estrechas calles de
            sevilla
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            exercitationem magni nisi tenetur odio corporis quas quisquam
            accusamus, tempora quo consequatur mollitia ipsam! Accusantium
            quibusdam, voluptatibus modi reiciendis unde laborum velit a quis
            non, sit magni eligendi officia nulla dolorum facere! Quod
            praesentium laborum fugit? Cum, modi, dolorem, officiis et
            voluptates enim corrupti assumenda voluptatem rem fugit quos sed
            reiciendis omnis dignissimos error magni tempora eos est
            exercitationem fugiat corporis nostrum pariatur velit unde.
            Laboriosam, laborum explicabo culpa aliquam praesentium corporis
            harum minus eos tempora quo itaque? At dolores corrupti, beatae
            repudiandae incidunt, similique illo ipsam voluptate, cum iusto
            assumenda?
          </p>
        </div>

        <div style={styles.image3}></div>

        <div style={styles.text}>
          <h2>Alrededores</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            exercitationem magni nisi tenetur odio corporis quas quisquam
            accusamus, tempora quo consequatur mollitia ipsam! Accusantium
            quibusdam, voluptatibus modi reiciendis unde laborum velit a quis
            non, sit magni eligendi officia nulla dolorum facere! Quod
            praesentium laborum fugit? Cum, modi, dolorem, officiis et
            voluptates enim corrupti assumenda voluptatem rem fugit quos sed
            reiciendis omnis dignissimos error magni tempora eos est
            exercitationem fugiat corporis nostrum pariatur velit unde.
            Laboriosam, laborum explicabo culpa aliquam praesentium corporis
            harum minus eos tempora quo itaque? At dolores corrupti, beatae
            repudiandae incidunt, similique illo ipsam voluptate, cum iusto
            assumenda?
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  image1: {
    backgroundImage: "url(" + image1 + ")",
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "50vh",
  },
  image2: {
    backgroundImage: "url(" + image2 + ")",
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "50vh",
  },
  image3: {
    backgroundImage: "url(" + image3 + ")",
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "50vh",
  },
  text:{
      textAlign:"center",
      padding:" 20px 10px",
      backgroundColor:"rgb(19, 19, 19)",
      color:"whitesmoke"
  }
};
