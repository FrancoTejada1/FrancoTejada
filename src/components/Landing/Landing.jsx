import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/Hero";
import Tech from "../Technologies/technologies";
import Proyects from "../Proyects/Proyects";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Landing() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Tech />
      </div>
      <div>
        <Proyects />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}
