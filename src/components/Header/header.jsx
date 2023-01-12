import React from "react";
import logo from "../../img/logo2.png";
import "./header.css";

export default function Header() {
  return (
    <section id="inicio-section">
      <div className="content">
    <header>
      <div className="container_header">
        <img src={logo} alt=""/>
        <nav id="nav" className="">
          <ul id="links">
            <li>
              <a href="#inicio" className="active">
                INICIO
              </a>
            </li>
            <li>
              <a href="#tecnologias">TECNOLOGIAS</a>
            </li>
            <li>
              <a href="#proyectos">PROYECTOS</a>
            </li>
            <li>
              <a href="#sobremi">SOBRE MI</a>
            </li>
            <li>
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>

        {/* Iconos del menu resposive */}
        <div id="icono-nav">
          <i class="fa-solid fa-bars"></i>
        </div>
        
        {/* Iconos de las redes sociales */}
        <div id="redes">
          <a href="https://github.com/FrancoTejada1" target="_blank" ><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/francotejada/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </header>
    </div>
    </section>
  );
}
