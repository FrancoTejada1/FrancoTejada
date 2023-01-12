import React from "react";
import "./Proyects.css";
import dogs from "../../img/DOGS.jpg";
import food from "../../img/FOOD.png";

export default function Proyects() {
  return (
    <section id="proyectos">
      <div className="titulo-seccion">
        <h2>PROYECTOS</h2>
      </div>
      <div className="carrousel">
        <ul>
          <li>
            <img src={dogs} alt="" />
          </li>
          <li>
            <img src={food} alt="" />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
