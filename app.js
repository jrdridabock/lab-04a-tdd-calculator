// import functions and grab DOM elements
import { add, subtract, divide, toNumber, multiply } from './calculator.js';


//stretch 1 (didn't understand)

// function init(input1Id, input2Id, buttonId, resultId) {
//     const numberInputOne = document.getElementById(input1Id);
//     const numberInputTwo = document.getElementById(input2Id);
//     const addResult = document.getElementById(resultId);
//     const addButton = document.getElementById(buttonId); 

//     addButton.addEventListener('click', () => 
//     { const x = toNumber(numberInputOne);
//         const y = toNumber(numberInputTwo);
//         addResult.textContent = add(x, y);
 
//     });

// }
       

// add elements
// add listener
// init('add-input-1', 'add-input-2', 'add-result', 'add-button', add);
const numberInputOne = document.getElementById('add-input-1');
const numberInputTwo = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button'); 

addButton.addEventListener('click', () => {
    const x = toNumber(numberInputOne);
    const y = toNumber(numberInputTwo);
    addResult.textContent = add(x, y);
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
