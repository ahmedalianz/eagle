import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens";

export default function Navigation() {
  return (
    <Routes>
      {/* <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
