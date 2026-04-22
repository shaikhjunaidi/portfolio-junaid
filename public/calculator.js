class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.history = [];
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') this.currentOperand = '0';
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    computeSingle(action) {
        let current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        
        let result;
        const prevCurrent = current;
        switch (action) {
            case 'sin': result = Math.sin(current); break;
            case 'cos': result = Math.cos(current); break;
            case 'tan': result = Math.tan(current); break;
            case 'sqrt': result = Math.sqrt(current); break;
            case 'pi': result = Math.PI; break;
            default: return;
        }

        // if pi, it just replaces
        if (action === 'pi') {
            this.currentOperand = result.toString();
        } else {
            this.currentOperand = result.toString();
            this.addToHistory(`${action}(${prevCurrent}) = ${result}`);
        }
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+': computation = prev + current; break;
            case '-': computation = prev - current; break;
            case 'multiply': computation = prev * current; break;
            case 'divide': computation = prev / current; break;
            default: return;
        }
        
        const symbol = this.getOperationSymbol(this.operation);
        this.history.push(`${prev} ${symbol} ${current} = ${computation}`);
        this.updateHistoryUI();
        
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
    }

    getOperationSymbol(op) {
        switch(op) {
            case '+': return '+';
            case '-': return '-';
            case 'multiply': return '×';
            case 'divide': return '÷';
            default: return '';
        }
    }

    addToHistory(entry) {
        this.history.push(entry);
        this.updateHistoryUI();
    }

    updateHistoryUI() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        this.history.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('history-item');
            div.innerText = item;
            historyList.appendChild(div);
        });
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.getOperationSymbol(this.operation)}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}

const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Event Listeners
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('num')) {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        }
        
        if (button.hasAttribute('data-action')) {
            const action = button.getAttribute('data-action');
            
            if (action === 'clear') {
                calculator.clear();
            } else if (action === 'delete') {
                calculator.delete();
            } else if (action === 'calculate') {
                calculator.compute();
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
                calculator.chooseOperation(action === 'add' ? '+' : action === 'subtract' ? '-' : action);
            } else if (['sin', 'cos', 'tan', 'sqrt', 'pi'].includes(action)) {
                calculator.computeSingle(action);
            } else if (action === 'history') {
                document.getElementById('history-container').classList.toggle('show');
            }
            calculator.updateDisplay();
        }
    });
});

// Keyboard Support
document.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9' || e.key === '.') {
        calculator.appendNumber(e.key);
    } else if (e.key === 'Backspace') {
        calculator.delete();
    } else if (e.key === 'Escape') {
        calculator.clear();
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
    } else if (e.key === '+') {
        calculator.chooseOperation('+');
    } else if (e.key === '-') {
        calculator.chooseOperation('-');
    } else if (e.key === '*') {
        calculator.chooseOperation('multiply');
    } else if (e.key === '/') {
        calculator.chooseOperation('divide');
    }
    calculator.updateDisplay();
});

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Clear History
document.getElementById('clear-history').addEventListener('click', () => {
    calculator.history = [];
    calculator.updateHistoryUI();
    document.getElementById('history-container').classList.remove('show');
});
