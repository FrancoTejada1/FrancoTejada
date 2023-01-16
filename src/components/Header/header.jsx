import React from "react";
import logo from "../../img/logo2.png";
import "./header.css";

export default function Header() {
 
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
        <div id="icono-nav" onClick={() => responsiveMenu()}>
          <i class="fa-solid fa-bars"></i>
        </div>
        
        {/* Iconos de las redes sociales */}
        <div className="redes">
          <a href="https://github.com/FrancoTejada1" target="_blank" ><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/francotejada/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </header>
    </div>
    </section>
  );
}
