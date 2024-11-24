import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";

const VerbalMemory = () => {

    const [gameState, setGameState] = useState(0);
    const [loadedWords, setLoadedWords] = useState([]);
    const [seenWords, setSeenWords] = useState([]);
    const [current, setCurrent] = useState("");
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch("/data/words.txt")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => {
                const allWords = data.split("\n").filter(word => word.trim() !== "");
                const shuffledWords = allWords.sort(() => 0.5 - Math.random());
                const uniqueWords = [...new Set(shuffledWords)].slice(0, 220);
                console.log(uniqueWords)
                setLoadedWords(uniqueWords);
                setCurrent(uniqueWords[0]);
                setTimeout(() => {
                    setGameState(1);
                }, 1000);
            })
            .catch((error) => console.error("Error fetching words:", error));
    }, []);

    const checker = (state) => {
        setScore((prevScore) => {
            if (isSeen(current) && state === 1) {
                updateScore(prevScore + 1);
                randomWord();
            } else if (!isSeen(current) && state === 2) {
                setSeenWords((prevSeenWords) => [...prevSeenWords, current]);
                updateScore(prevScore + 1);
                randomWord();
            } else {
                setGameState(3);
            }
    
            return prevScore;
        });
    }

    const randomWord = () => {
        const rand = Math.floor(Math.random() * 2);
        
        if (rand === 0 || seenWords.length === 0) {
            const randomIndex = Math.floor(Math.random() * loadedWords.length);
            const randomWord = loadedWords[randomIndex];
            setCurrent(randomWord)
        } else {
            const randomIndex = Math.floor(Math.random() * seenWords.length);
            const randomWord = seenWords[randomIndex];
            setCurrent(randomWord)
        }
    }

    const updateScore = (newScore) => {
        setScore(newScore);
    };

    const isSeen = (word) => {
        return seenWords.includes(word);
    }

    const verbalMemory = () => {
        if (gameState === 0) {
            return (
                <div className="benchmark">
                    <h2>Loading...</h2>
                    <p>Fetching words...</p>
                </div>
            );
        } else if (gameState === 1) {
            return (
                <div className="benchmark" style={{cursor: "pointer"}} onClick={() => {setGameState(2)}}>
                    <h2>Verbal Memory</h2>
                    <p>Click anywhere to begin!</p>
                </div>
            );
        }
        else if (gameState === 2) {
            return (
                <div className="benchmark" style={{cursor: "pointer"}} onClick={() => {setGameState(2)}}>
                    <div className="game-container">
                        <span className="stats-label">Score: <span className="stats">{score}</span></span> 
                        <h2 className="word-text">{current ? current : "Loading"}</h2>
                        <div>
                            <button className="verbal-button" onClick={() => checker(1)}>SEEN</button>
                            <button className="verbal-button" onClick={() => checker(2)}>NEW</button>
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                <div className="benchmark" style={{cursor: "pointer"}} onClick={() => {window.location.reload()}}>
                    <h2>Your score: {score}</h2>
                    <p>Click anywhere to try again.</p>
                </div>
            );
        }
    }

    return (
        <div className="container">
            <Nav />
            {verbalMemory()}

            <div className="benchmark-tests">
                <div className="benchmark-test">
                    <h3 style={{ color: "#2b87d1" }}>About the Game</h3>
                    <p>Guess correctly as much words as you can</p>

                    <h3 style={{ color: "#2b87d1" }}>How It Works</h3>
                    <p>
                        When you start the game, word will appear and you have to separate them into two groups new and seen.
                    </p>

                </div>
            </div>
 
        </div>
    );
};

export default VerbalMemory;
