import React from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { FaBolt, FaBullseye, FaSortAlphaDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
    return (

        <div className="container">

            <Nav/>
            
            <div className="benchmark">
                <h2>Smarter than monkey?</h2>
                <p>Scroll down to find out!</p>
            </div>

            <div className="benchmark-tests">

                <Link to={"/reaction-time"} className="benchmark-test">
                    <div className="benchmark-test-icon"><FaBolt/></div>
                    <h3>Reaction Time</h3>
                    <p>Test your visual reflexes</p>
                </Link>

                <Link to={"/aim-trainer"} className="benchmark-test">
                    <div className="benchmark-test-icon"><FaBullseye/></div>
                    <h3>Aim Trainer</h3>
                    <p>Hit all the targets in shortest time</p>
                </Link>

                <Link to={"verbal-memory"} className="benchmark-test">
                    <div className="benchmark-test-icon"><FaSortAlphaDown/></div>
                    <h3>Verbal Memory</h3>
                    <p>Keep as many words in short term memory as possible</p>
                </Link>
                
            </div>

            <Footer/>

        </div>
        
    );
}

export default Index;