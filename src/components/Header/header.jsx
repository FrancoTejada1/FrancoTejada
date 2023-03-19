import React from "react";
import "./header.css";

export default function Header() {
  return (
    <nav id="inicio-section" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fa-solid fa-terminal"></i>
        </a>
        <div className="screen-large">
          <ul class="nav justify-content-center">
          <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobremi">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#tecnologias">
                Tecnologias
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#sobremi">
                Sobre Mi
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobremi">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div> */}
        <div className="redes">
          <a
            href="https://github.com/FrancoTejada1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/francotejada/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* const seleccionar = (link) => {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //desaparece el menu cuando se selecciona uno en el modo responsive
    var z = document.getElementById("nav");
    z.className = "";
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

        {/* Iconos del menu resposive 
        <div id="icono-nav" onClick={() => responsiveMenu()}>
          <i className="fa-solid fa-bars"></i>
        </div>
        
        {/* Iconos de las redes sociales 
        <div className="redes">
          <a href="https://github.com/FrancoTejada1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/francotejada/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </header>
    </div>
    </section>
  ); */
