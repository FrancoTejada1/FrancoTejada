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
            <img src={smartify} alt="" />
          </span>
          <h2>Smartify</h2>
          <p>
          EN ESTE PROYECTO, JUNTO A UN EQUIPO, DESARROLLAMOS UN E-COMMERCE PARA LA VENTA DE CELULARES
          </p>
          <div className="btn">
            <button>
              <a href="https://github.com/FinalProyectHenry25a/FinalProyect25a" target="_blank" rel="noopener noreferrer">codigo</a>
            </button>
            <button>
              <a href="https://smartify.vercel.app/" target="_blank" rel="noopener noreferrer">vista</a>
            </button>
          </div>
        </div>
        <div className="proyectos">
          <span className="icono">
            <img src={dogs} alt="" />
          </span>
          <h2>The Dog Clinic APP</h2>
          <p>
          APLICACIÓN PARA OBTENER INFORMACIÓN DETALLADA SOBRE RAZAS DE PERROS
          </p>
          <div className="btn">
            <button>
              <a href="https://github.com/FrancoTejada1/PI-DOGS" target="_blank" rel="noopener noreferrer">codigo</a>
            </button>
          </div>
        </div>
        <div className="proyectos">
          <span className="icono">
            <img src={food} alt="" />
          </span>
          <h2>Cookbook APP</h2>
          <p>
          APLICACIÓN PARA OBTENER INFORMACIÓN DETALLADA SOBRE RECETAS DE COCINA
          </p>
          <div className="btn">
            <button>
              <a href="https://github.com/FrancoTejada1/PI-FOOD" target="_blank" rel="noopener noreferrer">codigo</a>
            </button>
          </div>
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
