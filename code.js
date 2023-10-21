function sum(num1,num2) {
    result = num1 + num2;
 }

function sus(num1,num2) {
    result = num1 - num2;
 }
 
function multi(num1,num2) {
    result = num1 * num2;
 }
 
function divi(num1,num2) {
    result = num1 / num2;
 }
 

let firstNumberArray = []
let firstNumberString;
let firstNumber;
let operator;
let secondNumberArray = [];
let secondNumberString;
let secondNumber;
let pushSecondNumber = false;
let result;
let addNumberValidation = false;
let displayContent = [];
let operatorEqual = false;
let equalValidation = true;

function operate(){
    if (operator == "+") {
        sum(firstNumber,secondNumber);
        display.value = result;
        
    }

    else if (operator == "-") {
        sus(firstNumber,secondNumber);
        display.value = result;

    }

    else if (operator == "*") {
        multi(firstNumber,secondNumber);
        display.value = result;
    }
    else if (operator == "/") {
        divi(firstNumber,secondNumber);
        display.value = result;
    }

}

const number0 = document.getElementById('0');
const number1 = document.getElementById('1');
const number2 = document.getElementById('2');
const number3 = document.getElementById('3');
const number4 = document.getElementById('4');
const number5 = document.getElementById('5');
const number6 = document.getElementById('6');
const number7 = document.getElementById('7');
const number8 = document.getElementById('8');
const number9 = document.getElementById('9');
const sumBtn = document.getElementById('+');
const susBtn = document.getElementById('-');
const multBtn = document.getElementById('*');
const diviBtn = document.getElementById('/');
const equalBtn = document.getElementById('=');
const eraseBtn = document.getElementById('c');
const display = document.getElementById('display');

number0.addEventListener('click', addNumber0);
number1.addEventListener('click', addNumber1);
number2.addEventListener('click', addNumber2);
number3.addEventListener('click', addNumber3);
number4.addEventListener('click', addNumber4);
number5.addEventListener('click', addNumber5);
number6.addEventListener('click', addNumber6);
number7.addEventListener('click', addNumber7);
number8.addEventListener('click', addNumber8);
number9.addEventListener('click', addNumber9);
sumBtn.addEventListener('click',sumOperator);
susBtn.addEventListener('click', susOperator);
multBtn.addEventListener('click',multiOperator);
diviBtn.addEventListener('click', diviOperator);
equalBtn.addEventListener('click', equalFunction);
eraseBtn.addEventListener('click', erase);


function addNumber0(){
    if (addNumberValidation == true){
        addNumber(0);
    }
}

function addNumber1(){
    addNumber(1)
    addNumberValidation = true;
}

function addNumber2(){
    addNumber(2)
    addNumberValidation = true;
  
}

function addNumber3(){
    addNumber(3)
    addNumberValidation = true;
  
}

function addNumber4(){
    addNumber(4)
    addNumberValidation = true;
   
}

function addNumber5(){
    addNumber(5)
    addNumberValidation = true; 
 
}

function addNumber6(){
    addNumber(6)
    addNumberValidation = true;
    
}

function addNumber7(){
    addNumber(7)
    addNumberValidation = true;  
   
}

function addNumber8(){
    addNumber(8)
    addNumberValidation = true;
   
}

function addNumber9(){
    addNumber(9)
    addNumberValidation = true;
   
}

function sumOperator(){
    operatorFunction("+")
    
    
}

function susOperator(){
  operatorFunction("-")
}

function multiOperator(){
   operatorFunction("*")
}

function diviOperator(){
    operatorFunction("/")
    
}

function erase(){
    window.location.reload()
}

function equalFunction(){
    if (equalValidation == true) {
    firstNumberString = firstNumberArray.join('');
    firstNumber = parseInt(firstNumberString);
    secondNumberString = secondNumberArray.join('');
    secondNumber = parseInt(secondNumberString);
    operate();
    operatorEqual = false;
    firstNumberArray = [];
    firstNumberArray.push(result);
    secondNumberArray = [];
    displayContent = [];
    equalValidation = false;
    }
    
  
    
}

function updateDisplay() {
    const displayString = displayContent.join('');
    display.value = displayString;
    console.log(displayString);
}

function addNumber(number) {
    if (pushSecondNumber == true) {
        secondNumberArray.push(number);
        displayContent.push(number);
        updateDisplay();
        equalValidation = true;
    }
    else {
        firstNumberArray.push(number);
        displayContent.push(number);
        updateDisplay();
        equalValidation = true;

    }  

}

function operatorFunction(op) {
    if (operatorEqual == true){
        equalFunction();
        firstNumberArray = [];
    firstNumberArray.push(result);
    secondNumberArray = [];
    displayContent = [];

    }
    else {
    operator = op;
    displayContent.push(op);
    pushSecondNumber = true;
    addNumberValidation = false;
    updateDisplay();
    operatorEqual = true;
    }

}