// import functions and grab DOM elements
import { add, subtract, divide, toNumber, multiply } from './calculator.js';

const numberInputOne = document.getElementById('add-input-1');
const numberInputTwo = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button'); 

addButton.addEventListener('click', () => {
    
    addResult.textContent = add(toNumber(numberInputOne), toNumber(numberInputTwo));
});

// subtract elements
// subtract listener

const subInputOne = document.getElementById('subtract-input-1');
const subInputTwo = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subResult = document.getElementById('subtract-result');

subButton.addEventListener('click', () => {
  
    subResult.textContent = subtract(toNumber(subInputOne), toNumber(subInputTwo));

    
});

//multiple elements
// multiple listener
const multInputOne = document.getElementById('mult-input-1');
const multInputTwo = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    
    multResult.textContent = multiply(toNumber(multInputOne), toNumber(multInputTwo));
    
});


// divide elements
// divide listener

const divInputOne = document.getElementById('div-input-1');
const divInputTwo = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    
    divResult.textContent = divide(toNumber(divInputOne), toNumber(divInputTwo));

});
