
import React, { useEffect } from 'react';
import '../assets/css/puzzle.css';

export default function Puzzle() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/puzzle.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div data-theme="dark" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
    <div className="game-container">
        <header>
            <h1>Memory Puzzle</h1>
            <div className="stats">
                <div className="stat-box">
                    <i className="fas fa-stopwatch"></i> <span id="time">00:00</span>
                </div>
                <div className="stat-box">
                    <i className="fas fa-shoe-prints"></i> Moves: <span id="moves">0</span>
                </div>
            </div>
            <div className="controls">
                <select id="difficulty">
                    <option value="easy">Easy (4x4)</option>
                    <option value="medium">Medium (6x6)</option>
                    <option value="hard">Hard (8x8)</option>
                </select>
                <button id="restart-btn" className="btn"><i className="fas fa-redo"></i> Restart</button>
            </div>
        </header>

        <main className="board-container">
            <div id="game-board" className="game-board easy"></div>
        </main>

        <div className="high-scores">
            <h3><i className="fas fa-trophy text-gold"></i> High Scores (Fewest Moves)</h3>
            <div className="score-grid">
                <div className="score-card">
                    <h4>Easy</h4>
                    <span id="score-easy">-</span>
                </div>
                <div className="score-card">
                    <h4>Medium</h4>
                    <span id="score-medium">-</span>
                </div>
                <div className="score-card">
                    <h4>Hard</h4>
                    <span id="score-hard">-</span>
                </div>
            </div>
        </div>
    </div>

    {/* Win Modal */}
    <div id="win-modal" className="modal">
        <div className="modal-content">
            <h2>You Won! 🎉</h2>
            <p>Time: <span id="win-time">00:00</span></p>
            <p>Moves: <span id="win-moves">0</span></p>
            <p id="new-highscore-msg" style={{"display":"none","color":"#10b981","fontWeight":"bold","marginTop":"10px"}}>New High Score!</p>
            <button id="play-again-btn" className="btn btn-primary" style={{"marginTop":"20px"}}>Play Again</button>
        </div>
    </div>

    

        </div>
    );
}
