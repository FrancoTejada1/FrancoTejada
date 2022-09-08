import React from "react";
import styled from "styled-components";
import foto from "../../img/foto.png";

export default function Hero() {
  const Container = styled.div`
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 100%;
    height: 500px;
  `;
  const ContainerText = styled.div`
    display: inline-flex;
    flex-flow: column;
    margin-block: auto;
  `;

  const Text = styled.h1`
    width: max-content;
    height: max-content;
    margin-block: 1rem;
    margin-inline: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 3rem;
  `;
  const ContentImg = styled.div`
    display: inline-flex;
    margin-inline: auto;
    margin: auto;
  `;

  return (
    <Container>
      <ContainerText>
        <Text>Franco Tejada</Text>
        <Text>Full Stack Web Developer</Text>
      </ContainerText>
      <ContentImg>
        <img src={foto} />
      </ContentImg>
    </Container>
  );
}
