import React from "react";
import "./Proyects.css";
import dogs from "../../img/DOGS.jpg";
import food from "../../img/FOOD.png";
import smartify from "../../img/SMARTIFY.jpg";

export default function Proyects() {
  return (
    <section id="proyectos">
      <h2 className="titulo-seccion">PROYECTOS</h2>
      <div className="fila">
        <div className="proyectos">
          <span className="icono">
            <img src={dogs} alt="" />
          </span>
          <h2>The Dog Clinic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            omnis reiciendis quam nisi velit. Quasi possimus ex aperiam
            perferendis, et incidunt quo id iure quidem ab dolore nesciunt
            corporis. Quis.
          </p>
        </div>
        <div className="proyectos">
          <span className="icono">
            <img src={food} alt="" />
          </span>
          <h2>Cookbook</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            omnis reiciendis quam nisi velit. Quasi possimus ex aperiam
            perferendis, et incidunt quo id iure quidem ab dolore nesciunt
            corporis. Quis.
          </p>
        </div>
        <div className="proyectos">
          <span className="icono">
            <img src={smartify} alt="" />
          </span>
          <h2>Smartify</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            omnis reiciendis quam nisi velit. Quasi possimus ex aperiam
            perferendis, et incidunt quo id iure quidem ab dolore nesciunt
            corporis. Quis.
          </p>
        </div>
      </div>
      {/* <div className="titulo-seccion">
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
      </div>  */}
    </section>
  );
}
