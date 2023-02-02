import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/Hero";
import Tech from "../Technologies/technologies";
import Proyects from "../Proyects/Proyects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <div style={{backgroundColor: "#42464830"}}>
        <Header />
        <Hero />
        <Tech />
        <Proyects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
