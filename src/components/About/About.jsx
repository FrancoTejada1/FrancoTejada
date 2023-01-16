import React from "react";
import foto from "../../img/foto.png";
import cv from "../../img/CV-SoftwareDeveloper.pdf";
import "./About.css";

export default function About() {
  return (
    <section id="sobremi">
      <div className="contenedor-foto">
        <img src={foto} alt="" />
      </div>
      <div className="sobreMi">
        <h2 className="titulo-seccion">SOBRE MI</h2>
        <h3>Franco Tejada - Desarrollador Full Stack</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati
          eveniet temporibus quam. Sequi, aperiam, veritatis quidem ab esse
          asperiores nostrum repudiandae invent ore, ipsum deserunt sint harum
          ratione recusandae in!
        </p>
        <button className="btn-cv">
        <a href={cv} target="_blank" rel="noopener noreferrer" download="Franco Tejada - CV - Software Developer.pdf">
          Descarga CV
        </a>
      </button>
      </div>
    </section>
  );
}
