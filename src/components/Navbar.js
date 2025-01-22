import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <Link to="/">Feed</Link> | <Link to="/profile">Profile</Link> |{" "}
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
}

export default Navbar;
