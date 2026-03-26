import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar;
