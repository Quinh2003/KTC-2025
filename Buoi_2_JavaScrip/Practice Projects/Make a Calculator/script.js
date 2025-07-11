let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression === '' && operator !== '-') return;

    let lastChar = expression.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        expression = expression.slice(0, -1);
    }

    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(expression);
        display.innerText = result;
        expression = result.toString();
    } catch {
        display.innerText = 'Lỗi';
        expression = '';
    }
}

function updateDisplay() {
    display.innerText = expression || '0';
}
