import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="contenainer_header">
        <img src={logo} alt=""/>
        <nav id="nav" className="">
          <ul id="links">
            <li>
              <a href="#inicio" className="active">
                Inicio
              </a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologias</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#sobremi">Sobre Mi</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Iconos del menu resposive */}
        <div id="icono-nav">
          <i class="fa-solid fa-bars"></i>
        </div>
        
        {/* Iconos de las redes sociales */}
        <div id="redes">
          <a href><i class="fa-brands fa-github"></i></a>
          <a href><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}
