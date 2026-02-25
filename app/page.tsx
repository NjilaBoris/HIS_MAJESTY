"use client";
import React, { useEffect } from "react";
import Preloader from "../components/Preloader/Preloader";
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import Spotlight from "@/components/Spotlight/Spotlight";
import AboutMe from "../components/AboutMe/AboutMe";
import Manifesto from "../components/Manifesto/Manifesto";
import Scholar from "../components/Scholar/Scholar";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import Gallery from "@/components/Gallery";

const page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <>
      <Preloader />
      <Hero />
      <HeroCard />
      <Spotlight />
      <AboutMe />
      <Manifesto />
      <Scholar />
      <MarqueeDemo />
      <Gallery />
    </>
  );
};

export default page;
