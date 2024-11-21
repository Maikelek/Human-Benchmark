import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";


const ReactionTime = () => {

    /*
    0. Initial state
    1. Wait for green - is red
    2. Wait for click -> start timer -> is green
    3. Click -> stop timer -> display time
    -1. Too soon
    */
    const [gameState, setGameState] = useState(0);

    const [startTime, setStartTime] = useState(null); // Track start time
    const [reactionTime, setReactionTime] = useState(null); // Track reaction time

    useEffect(() => {
        if (gameState === 1) {
            const randomDelay = Math.random() * 4000 + 1000;
            const timeout = setTimeout(() => {
                setGameState(2); 
                setStartTime(performance.now());
            }, randomDelay);

            return () => clearTimeout(timeout);
        }
    }, [gameState]);

    const handleClick = () => {
        if (gameState === 2) {
            const endTime = performance.now();
            setReactionTime(Math.round(endTime - startTime));
            setGameState(3);
        }
    };

    const reactionTimeDiv = () => {
        if (gameState === 0) {
            return  <div className="benchmark" style={{cursor: "pointer"}} onClick={() => setGameState(1)}>
                        <h2>Reaction Time</h2>
                        <p>When the red box turns green, click as quickly as you can. Click anywhere to begin.</p>
                    </div>
        } 

        else if (gameState === 1) {
            return  <div className="benchmark" style={{backgroundColor: "#ce2636", cursor: "pointer"}} onClick={() => setGameState(-1)}>
                        <h2>Wait for green</h2>
                    </div>
        }

        else if (gameState === 2) {
            return  <div className="benchmark" style={{backgroundColor: "#4bdb6a", cursor: "pointer"}} onClick={handleClick}>
                        <h2>CLICK!</h2>
                    </div>
        }

        else if (gameState === 3) {
            return  <div className="benchmark" style={{cursor: "pointer"}} onClick={() => setGameState(1)}>
                        <h2>{reactionTime} ms</h2>
                        <p>Click to try again.</p>
                    </div>
        }

        else if (gameState === -1) {
            return  <div className="benchmark" style={{cursor: "pointer"}} onClick={() => setGameState(1)}>
                        <h2>Too Soon!</h2>
                        <p>Click to try again.</p>
                    </div>
        }
    }

    return (

        <div className="container">

            <Nav/>
            
            {reactionTimeDiv()}

            <div className="benchmark-tests">
                <div className="benchmark-test">
                    <h3 style={{color: "#2b87d1"}}>About the Test</h3>
                    <p>This is a simple tool to measure your reaction time.</p>

                    <h3 style={{color: "#2b87d1"}}>Average Reaction Time</h3>
                    <p>The average (median) reaction time is 273 milliseconds, according to the data collected so far.</p>

                    <h3 style={{color: "#2b87d1"}}>Factors Affecting Reaction Time</h3>
                    <p>
                        In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. 
                        Using a fast computer and low latency / high framerate monitor will improve your score.
                    </p>
                </div>
            </div>

        </div>
        
    );
}

export default ReactionTime;