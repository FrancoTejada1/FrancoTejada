import React from "react";
import "./technologies.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import bootstrap from "../../img/bootstrap.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import node from "../../img/node.png";
import express from "../../img/express.png";
import sequelize from "../../img/sequelize.png";
import postgres from "../../img/postgres.png";
import mongo from "../../img/mongo.png";
import git from "../../img/git.png";

export default function Tech() {
  return (
    <section id="tecnologias">
      <div className="titulo-tech">
        <h2 className="titulo-seccion">TECNOLOGIAS</h2>
      </div>
      <div className="imgs">
        <div className="imgs-tech">
          <img src={html} alt="" />
          <h3>HTML</h3>
        </div>
        <div className="imgs-tech">
          <img src={css} alt="" />
          <h3>CSS</h3>
        </div>
        <div className="imgs-tech">
          <img src={js} alt="" />
          <h3>JavaScript</h3>
        </div>
        <div className="imgs-tech">
          <img src={bootstrap} alt="" />
          <h3>Bootstrap</h3>
        </div>
        <div className="imgs-tech">
          <img src={react} alt="" />
          <h3>React</h3>
        </div>
        <div className="imgs-tech">
          <img src={redux} alt="" />
          <h3>Redux</h3>
        </div>
        <div className="imgs-tech">
          <img src={node} alt="" />
          <h3>NodeJS</h3>
        </div>
        <div className="imgs-tech">
          <img src={express} alt="" />
          <h3>Express</h3>
        </div>
        <div className="imgs-tech">
          <img src={sequelize} alt="" />
          <h3>Sequelize</h3>
        </div>
        <div className="imgs-tech">
          <img src={postgres} alt="" />
          <h3>PostgreSQL</h3>
        </div>
        <div className="imgs-tech">
          <img src={mongo} alt="" />
          <h3>MongoDB</h3>
        </div>
        <div className="imgs-tech">
          <img src={git} alt="" />
          <h3>Git</h3>
        </div>
      </div>
    </section>
  );
}
