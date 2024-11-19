import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to={"/"} className="navbar-logo">
                    <FaBolt /> HUMAN BENCHMARK
                </Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <Link to={"/"} onClick={toggleMenu}>Home</Link>
                <Link to={"/register"} onClick={toggleMenu}>SIGN UP</Link>
                <Link to={"/login"} onClick={toggleMenu}>LOGIN</Link>
            </div>
            <div className="navbar-right">
                <Link to={"/register"}>SIGN UP</Link>
                <Link to={"/login"}>LOGIN</Link>
            </div>
        </nav>
    );
};

export default Navbar;
