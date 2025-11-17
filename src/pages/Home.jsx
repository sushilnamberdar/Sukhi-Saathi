    import React from "react";
import Hero from "../components/Hero";
import SupportSection from "../components/SupportSection";
import LogoShowcase from "../components/LogoShowcase";
import SukhiSaathi from "./Sukhisaathi";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Hero/>
      <SupportSection/>
      <LogoShowcase/>
      <Services/>
      <SukhiSaathi/>
    </>
  );
}
