let currentResult = 0;
let logEntries = [];

const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

// gets input field for apply input value
function getUserNumberInput() {
    return parseFloat(userInput.value);
}

// generates and writes calculation logic
function operation(operator, resultBeforeCalculate, CalculateNumber) {
    const calcDescription = `${resultBeforeCalculate} ${operator} ${CalculateNumber}`
    outputResult(currentResult, calcDescription)
}

// write to log array and object = video 48
function writeToLog(operation, previewResult, Number, Result) {
    const logEntry = {
        operation: operation,
        previewResult: previewResult,
        Number: Number,
        Result: Result,
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE') {
        return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE') {
        const enteredNumber = getUserNumberInput();
        const initialResult = currentResult;
        let mathOperator;
        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }
        operation(mathOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult)
    // }
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);