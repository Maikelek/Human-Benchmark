import React, { useState } from "react";
import { FaBolt } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#" className="navbar-logo">
                    <FaBolt /> HUMAN BENCHMARK
                </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <a href="#dashboard" onClick={toggleMenu}>DASHBOARD</a>
                <a href="#signup" onClick={toggleMenu}>SIGN UP</a>
                <a href="#login" onClick={toggleMenu}>LOGIN</a>
            </div>
            <div className="navbar-right">
                <a href="#signup">SIGN UP</a>
                <a href="#login">LOGIN</a>
            </div>
        </nav>
    );
};

export default Navbar;
