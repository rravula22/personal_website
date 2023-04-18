
import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";


export default function Example() {
  const color = typeof window !== 'undefined' ? 'red' : 'blue';
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header></Header>
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen py-2 snap-center">
          <Hero></Hero>
        </section>
        {/** Hero */}
        {/** About */}
        {/** Experience */}
        {/** Skils */}
        {/** Projects */}
        {/** Contact Me */}
    </div>
  )
}