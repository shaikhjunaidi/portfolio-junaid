const emojis = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜'];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let timer = null;
let seconds = 0;
let isPlaying = false;
let boardLocked = false;
let currentDifficulty = 'easy';

const boardElement = document.getElementById('game-board');
const movesElement = document.getElementById('moves');
const timeElement = document.getElementById('time');
const diffSelect = document.getElementById('difficulty');
const restartBtn = document.getElementById('restart-btn');
const modal = document.getElementById('win-modal');

const SCORES_KEY = 'memoryPuzzleScores';

// Initialize Game
function initGame() {
    modal.classList.remove('show');
    resetStats();
    
    currentDifficulty = diffSelect.value;
    boardElement.className = `game-board ${currentDifficulty}`;
    
    let pairsCount = getPairsCount(currentDifficulty);
    let gameEmojis = getRandomEmojis(pairsCount);
    cards = shuffle([...gameEmojis, ...gameEmojis]);
    
    renderBoard();
    updateHighScoresUI();
}

function getPairsCount(difficulty) {
    if (difficulty === 'easy') return 8; // 4x4 = 16 cards = 8 pairs
    if (difficulty === 'medium') return 18; // 6x6 = 36 cards = 18 pairs
    if (difficulty === 'hard') return 32; // 8x8 = 64 cards = 32 pairs
}

function getRandomEmojis(count) {
    const shuffled = shuffle([...emojis]);
    return shuffled.slice(0, count);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderBoard() {
    boardElement.innerHTML = '';
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.value = emoji;
        
        card.innerHTML = `
            <div class="card-back"></div>
            <div class="card-front">${emoji}</div>
        `;
        
        card.addEventListener('click', onCardClick);
        boardElement.appendChild(card);
    });
}

function onCardClick() {
    if (boardLocked) return;
    if (this.classList.contains('flipped') || this.classList.contains('matched')) return;

    if (!isPlaying) {
        startTimer();
        isPlaying = true;
    }

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        movesElement.textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    boardLocked = true;
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        flippedCards = [];
        boardLocked = false;
        
        if (matchedPairs === getPairsCount(currentDifficulty)) {
            gameOver();
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            boardLocked = false;
        }, 1000);
    }
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        timeElement.textContent = formatTime(seconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function resetStats() {
    stopTimer();
    seconds = 0;
    moves = 0;
    matchedPairs = 0;
    isPlaying = false;
    boardLocked = false;
    flippedCards = [];
    movesElement.textContent = '0';
    timeElement.textContent = '00:00';
}

function gameOver() {
    stopTimer();
    
    document.getElementById('win-time').textContent = formatTime(seconds);
    document.getElementById('win-moves').textContent = moves;
    
    // Save Score
    let scores = JSON.parse(localStorage.getItem(SCORES_KEY)) || { easy: null, medium: null, hard: null };
    
    const isNewHighScore = !scores[currentDifficulty] || moves < scores[currentDifficulty];
    if (isNewHighScore) {
        scores[currentDifficulty] = moves;
        localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
        document.getElementById('new-highscore-msg').style.display = 'block';
    } else {
        document.getElementById('new-highscore-msg').style.display = 'none';
    }

    updateHighScoresUI();

    setTimeout(() => {
        modal.classList.add('show');
    }, 500);
}

function updateHighScoresUI() {
    let scores = JSON.parse(localStorage.getItem(SCORES_KEY)) || { easy: null, medium: null, hard: null };
    
    document.getElementById('score-easy').textContent = scores.easy ? scores.easy : '-';
    document.getElementById('score-medium').textContent = scores.medium ? scores.medium : '-';
    document.getElementById('score-hard').textContent = scores.hard ? scores.hard : '-';
}

// Event Listeners
diffSelect.addEventListener('change', initGame);
restartBtn.addEventListener('click', initGame);
document.getElementById('play-again-btn').addEventListener('click', initGame);

// Initial Load
initGame();
