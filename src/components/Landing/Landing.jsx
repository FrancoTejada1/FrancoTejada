import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/Hero";
import Tech from "../Technologies/technologies";
import About from "../About/About";

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
      {/* <div>
        <About />
      </div> */}
      <div>
        <About />
      </div>
    </>
  );
}
