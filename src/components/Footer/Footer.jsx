import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>Todos los derechos reservados - 2023</p>
      <div id="redes">
        <a href="https://github.com/FrancoTejada1" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/francotejada/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
