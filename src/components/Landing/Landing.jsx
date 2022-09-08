import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/Hero";
import styled from "styled-components";
import Tech from "../Technologies/technologies";

export default function Landing() {
    const Background = styled.div`
    background: #edf2f4;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    `;
  return (
    <Background>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Tech />
      </div>
    </Background>
  );
}
