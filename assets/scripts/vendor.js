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
    return parseInt(userInput.value);
}

// generates and writes calculation logic
function operation(operator, resultBeforeCalculate, CalculateNumber) {
    const calcDescription = `${resultBeforeCalculate} ${operator} ${CalculateNumber}`
    outputResult(currentResult, calcDescription)
}

// write to log array and object = video 48
function writeToLog(operation,previewResult,Number,Result) {
    const logEntry = {
        operation: operation,
        previewResult: previewResult,
        Number: Number,
        Result: Result,
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    operation('+', initialResult, enteredNumber);
    writeToLog('Add', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    operation('-', initialResult, enteredNumber);
    writeToLog('Subtract', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  operation('*', initialResult, enteredNumber);
  writeToLog('multiply', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  operation('/', initialResult, enteredNumber);
  writeToLog('divide', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);