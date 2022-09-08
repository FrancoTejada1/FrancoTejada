import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCode, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Header() {
  const Background = styled.div`
    display: fixed;
    background: #edf2f4;
    width: 100%;
    height: 100%;
  `;
  const H3 = styled.h3`
    display: inline-block;
    color: #283618;
    margin-inline-end: auto;
    margin: 1.5rem;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  `;
  const Social = styled.div`
    margin-inline-start: auto;
  `;

  return (
    <Background>
      <BsCode
        style={{
          fontSize: "2rem",
          paddingInline: "0.7rem",
          margin: "1.1rem",
          marginInlineEnd: "auto",
          color: "#283618",
        }}
      />
      <Link to="#About" style={{display: "flex", textDecoration: "none" }}>
        <H3>About</H3>
      </Link>
      <Link to="#Technologies" style={{display: "flex", textDecoration: "none" }}>
        <H3>Technologies</H3>
      </Link>
      <Link to="#Proyects" style={{display: "flex", textDecoration: "none"}}>
        <H3>Proyects</H3>
      </Link>

      <Social>
        <a href="https://github.com/FrancoTejada1" target="_black">
          <BsGithub
            style={{
              fontSize: "2rem",
              margin: "1.1rem",
              marginInlineEnd: "0.5rem",
              color: "#283618",
            }}
          />
        </a>
        <BsLinkedin
          style={{
            fontSize: "2rem",
            margin: "1.1rem",
            marginInline: "2rem",
            color: "#283618",
          }}
        />
      </Social>
    </Background>
  );
}
