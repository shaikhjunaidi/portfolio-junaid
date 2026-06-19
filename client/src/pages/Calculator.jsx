
import React, { useEffect } from 'react';
import '../assets/css/calculator.css';

export default function Calculator() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/calculator.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div data-theme="dark" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
    <div className="calculator-container">
        <div className="calc-header">
            <h2>Calculator</h2>
            <button id="theme-btn"><i className="fas fa-sun"></i></button>
        </div>
        
        <div className="history-container" id="history-container">
            <div className="history-list" id="history-list"></div>
            <button id="clear-history">Clear</button>
        </div>

        <div className="display">
            <div id="previous-operand"></div>
            <div id="current-operand">0</div>
        </div>

        <div className="keypad">
            <button className="btn fn" data-action="sin">sin</button>
            <button className="btn fn" data-action="cos">cos</button>
            <button className="btn fn" data-action="tan">tan</button>
            <button className="btn fn" data-action="pi">π</button>
            
            <button className="btn ac" data-action="clear">AC</button>
            <button className="btn" data-action="delete">DEL</button>
            <button className="btn fn" data-action="sqrt">√</button>
            <button className="btn op" data-action="divide">÷</button>
            
            <button className="btn num">7</button>
            <button className="btn num">8</button>
            <button className="btn num">9</button>
            <button className="btn op" data-action="multiply">×</button>
            
            <button className="btn num">4</button>
            <button className="btn num">5</button>
            <button className="btn num">6</button>
            <button className="btn op" data-action="subtract">-</button>
            
            <button className="btn num">1</button>
            <button className="btn num">2</button>
            <button className="btn num">3</button>
            <button className="btn op" data-action="add">+</button>
            
            <button className="btn fn" data-action="history"><i className="fas fa-history"></i></button>
            <button className="btn num">0</button>
            <button className="btn num">.</button>
            <button className="btn equals" data-action="calculate">=</button>
        </div>
    </div>

    

        </div>
    );
}
