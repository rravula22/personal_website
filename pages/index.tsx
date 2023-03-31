
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Projects from "./projects";
import { useEffect, useState } from 'react'

export default function Example() {
  const color = typeof window !== 'undefined' ? 'red' : 'blue';
  return (
    <>
          <Navbar></Navbar>
          <Layout></Layout>
          <Projects></Projects>
    </>
  )
}