import React from "react";
import "./Proyects.css";
import dogs from "../../img/DOGS.jpg";
import food from "../../img/FOOD.png";
import smartify from "../../img/SMARTIFY.jpg";

export default function Proyects() {
  return (
    <section id="proyectos">
      <h2 className="titulo-seccion">PROYECTOS</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={smartify} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Smartify</h5>
              <p className="card-text">EN ESTE PROYECTO, JUNTO A UN EQUIPO, DESARROLLAMOS UN E-COMMERCE PARA LA VENTA DE CELULARES.</p>
              <a href="https://github.com/FinalProyectHenry25a/FinalProyect25a" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Codigo</a>
              <a href="https://smartify.vercel.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Vista</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={dogs} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">The Dog Clinic APP</h5>
              <p className="card-text">APLICACIÓN PARA OBTENER INFORMACIÓN DETALLADA SOBRE RAZAS DE PERROS.</p>
              <a href="https://github.com/FrancoTejada1/PI-DOGS" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Codigo</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={food} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Cookbook APP</h5>
              <p className="card-text">APLICACIÓN PARA OBTENER INFORMACIÓN DETALLADA SOBRE RECETAS DE COCINA.</p>
              <a href="https://github.com/FrancoTejada1/PI-FOOD" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Codigo</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="fila">
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
      </div> */}

      
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
