import React, { useEffect, useState } from "react";
import { ImTarget } from "react-icons/im";
import Nav from "./components/Nav";

const ReactionTime = () => {
    const INITIAL_TARGETS = 30; // Number of targets in the game
    const [gameState, setGameState] = useState(0); // Game state
    const [targets, setTargets] = useState(INITIAL_TARGETS); // Remaining targets
    const [targetPosition, setTargetPosition] = useState({ top: null, left: null }); // Target position
    const [startTime, setStartTime] = useState(null); // Start time
    const [reactionTime, setReactionTime] = useState([]); // Recorded reaction times

    useEffect(() => {
        if (gameState === 1) {
            setStartTime(performance.now());
        }
    }, [gameState]);

    const generateRandomPosition = () => {
        const top = Math.random() * 80 + 10;
        const left = Math.random() * 80 + 10;
        return { top: `${top}%`, left: `${left}%` };
    };

    const handleTargetClick = () => {
        if (targets > 1) {
            const endTime = performance.now();
            const timeTaken = Math.round(endTime - startTime);

            setReactionTime(prevTimes => [...prevTimes, timeTaken]);
            setTargets(targets - 1);
            setStartTime(performance.now());
            setTargetPosition(generateRandomPosition());
        } else {
            const endTime = performance.now();
            const timeTaken = Math.round(endTime - startTime);

            setReactionTime(prevTimes => [...prevTimes, timeTaken]);
            setGameState(2); 
            setTargetPosition({ top: null, left: null });
            console.log(reactionTime);
        }
    };

    const calculateAverageTime = () => {
        if (reactionTime.length === 0) return 0;
        const total = reactionTime.reduce((sum, time) => sum + time, 0);
        return Math.round(total / reactionTime.length);
    };

    const aimTrainerDiv = () => {
        if (gameState === 0) {
            return (
                <div className="benchmark" style={{ cursor: "pointer" }} onClick={() => setGameState(1)}>
                    <h2>Aim Trainer</h2>
                    <p>Shoot the targets as fast as you can. Click anywhere to start.</p>
                </div>
            );
        } else if (gameState === 1) {
            return (
                <div className="benchmark">
                    <span className="stats-label">Remaining: <span className="stats">{targets}</span></span>
                    <div className="game-container">
                        <ImTarget
                            size={80}
                            color="white"
                            style={{
                                cursor: "pointer",
                                position: "absolute",
                                top: targetPosition.top,
                                left: targetPosition.left,
                            }}
                            onClick={handleTargetClick}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="benchmark" style={{ cursor: "pointer" }} onClick={() => {
                    setReactionTime([]);
                    setTargets(INITIAL_TARGETS);
                    setGameState(1);
                }}>
                    <p>Average time per target</p>
                    <h2>{calculateAverageTime()}ms</h2>
                    <p>Click anywhere to try again.</p>
                </div>
            );
        }
    };

    return (
        <div className="container">
            <Nav />
            {aimTrainerDiv()}

            <div className="benchmark-tests">
                <div className="benchmark-test">
                    <h3 style={{ color: "#2b87d1" }}>About the Game</h3>
                    <p>This is a fun reaction time game where your goal is to click on targets as quickly as possible.</p>

                    <h3 style={{ color: "#2b87d1" }}>How It Works</h3>
                    <p>
                        When you start the game, targets will appear in random spots on the screen. Your task is to click on them as fast as you can. Once you've clicked on 30 targets, your average reaction time will be shown.
                    </p>

                    <h3 style={{ color: "#2b87d1" }}>What It Tests</h3>
                    <p>
                        This game is a great way to test your reflexes and hand-eye coordination. The faster you react and the more accurately you click, the better your score!
                    </p>

                    <h3 style={{ color: "#2b87d1" }}>Best Way to Play</h3>
                    <p>
                        For the best results, use a mouse or a touchscreen. Playing with a trackpad might be more challenging, but it’s still a fun way to practice!
                    </p>
                </div>
            </div>
 
        </div>
    );
};

export default ReactionTime;
