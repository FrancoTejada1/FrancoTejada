import React from "react";
import foto from "../../img/foto.png";
import "./About.css";

export default function About() {
  return (
    <section id="sobremi">
      <div className="contenedor-foto">
        <img src={foto} alt="" />
      </div>
      <div className="sobreMi">
        <h2 className="titulo-seccion">SOBRE MI</h2>
        <h2>Franco Tejada</h2>
        <p>Desarrollador Full Stack</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati
          eveniet temporibus quam. Sequi, aperiam, veritatis quidem ab esse
          asperiores nostrum repudiandae invent ore, ipsum deserunt sint harum
          ratione recusandae in!
        </p>
      </div>
    </section>
  );
}
