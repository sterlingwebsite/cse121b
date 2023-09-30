/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
  }
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector('#difference').value = difference;
  };
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    let product = multiply(multiplyNumber1, multiplyNumber2);
    document.querySelector('#product').value = product;
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2
}
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    let quotient = divide(divideNumber1, divideNumber2);
    document.querySelector('#quotient').value = quotient;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
let currentDate = new Date();
let currentYear = new Date().getFullYear();
let year = currentYear
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numbersArray.join(", ");
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0;
});
document.getElementById("odds").textContent = oddNumbers.join(", ");
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers.join(", ");
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");
/* Output Sum of Multiplied by 2 Array */
let multipliedArray2 = numbersArray.map(number => number * 2);
let sumOfMultiplied = multipliedArray2.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;