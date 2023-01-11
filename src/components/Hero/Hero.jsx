import React, { useState, useEffect } from "react";
import cv from "../../img/CV-SoftwareDeveloper.pdf";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <p className="description">Hola</p>
      <h2>Soy Franco Tejada, Desarrollador Full Stack</h2>
      <button className="btn-cv">
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="Franco Tejada - CV - Software Developer.pdf"
        >
          Descarga CV
        </a>
      </button>
    </div>
  );
}
