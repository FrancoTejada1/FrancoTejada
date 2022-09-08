import React from "react";
import styled from "styled-components";
import html from "../../img/html-1.svg";
import css from "../../img/css-3.png";
import js from "../../img/js.png";
import bootstrap from "../../img/bootstrap-5.svg";
import react from "../../img/react.svg";
import redux from "../../img/redux.svg";
import node from "../../img/nodejs-icon.svg";
import express from "../../img/express.svg";
import postgres from "../../img/postgresql.svg";

export default function Tech() {
  const Container = styled.div`
    width: 100%;
    height: 400px;
  `;

  const Subcontainer = styled.div`
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;  
    max-width: 100%;
    max-height: 100%;
  `;

  const Images = styled.img`
    width: 5%;
    height: 5%;
    margin: 1rem;
  `;

  return (
    <Container>
      <h1 style={{fontFamily: `Montserrat, sans-serif`}}>Tecnologias</h1>
      <Subcontainer>
        <Images src={html} />
        <Images src={css} />
        <Images src={js} />
        <Images src={bootstrap} />
        <Images src={react} />
        <Images src={redux} />
        <Images src={node} />
        <Images src={express} />
        <Images src={postgres} />
      </Subcontainer>
    </Container>
  );
}
