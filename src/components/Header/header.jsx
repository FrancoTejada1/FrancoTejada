import React from "react";
import logo from "../../img/logo2.png";
import "./header.css";

export default function Header() {

  const seleccionar  = (link) => {
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    var x = document.getElementById("nav");
    x.className = "";
  }
 
  const responsiveMenu = () => {
    var x = document.getElementById("nav");
    var y = document.getElementById("div1");

    if(x.className === ""){
      x.className = "responsive";
      y.className = "responsive";
    }
    else{
      x.className = "";
      y.className = "container_header";
    }
  }

  return (
    <section id="inicio-section">
      <div className="content">
    <header>
      <div id="div1" className="container_header">
        <a href="/"><img src={logo} alt=""/></a>
        <nav id="nav" className="">
          <ul id="links">
            <li>
              <a href="#inicio" className="seleccionado" onClick={() => seleccionar(this)}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#tecnologias" onClick={() => seleccionar(this)}>TECNOLOGIAS</a>
            </li>
            <li>
              <a href="#proyectos" onClick={() => seleccionar(this)}>PROYECTOS</a>
            </li>
            <li>
              <a href="#sobremi" onClick={() => seleccionar(this)}>SOBRE MI</a>
            </li>
            <li>
              <a href="#contacto" onClick={() => seleccionar(this)}>CONTACTO</a>
            </li>
          </ul>
        </nav>

        {/* Iconos del menu resposive */}
        <div id="icono-nav" onClick={() => responsiveMenu()}>
          <i class="fa-solid fa-bars"></i>
        </div>
        
        {/* Iconos de las redes sociales */}
        <div className="redes">
          <a href="https://github.com/FrancoTejada1" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/francotejada/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </header>
    </div>
    </section>
  );
}
