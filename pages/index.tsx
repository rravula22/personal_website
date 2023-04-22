
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";


export default function Example() {
  const color = typeof window !== 'undefined' ? 'red' : 'blue';
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header/>
        <section id="hero" className="snap-start">
          <Hero/>
        </section>
        {/** Hero */}
        {/** About */}
        <section id="about" className="snap-center">
          <About/>
        </section>
        <section id="experience" className="snap-center">
          <Experience/>
        </section>
        {/** Skils */}
        {/** Projects */}
        {/** Contact Me */}
    </div>
  )
}