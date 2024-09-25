import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Projects />
      <Contact />
    </>
  );
}
