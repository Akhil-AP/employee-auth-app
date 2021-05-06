import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <nav>
      <ul>
        <li
          className={location.pathname === "/" ? "active-nav" : "inactive-nav"}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li
          className={
            location.pathname === "/dashboard" ? "active-nav" : "inactive-nav"
          }
        >
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>
        <li
          className={
            location.pathname === "/login" ? "active-nav" : "inactive-nav"
          }
        >
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
