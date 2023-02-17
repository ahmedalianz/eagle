import React from "react";
import { Routes, Route } from "react-router-dom";
import InteriorDesign from "./pages/InteriorDesign/InteriorDesign";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interior-design" element={<InteriorDesign />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
