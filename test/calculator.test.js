// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add, subtract, multiply, divide, dividezero, toNumber } from '../calculator.js';

const test = QUnit.test;



test('time to test addition function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('test subtraction', (expect) => {
    const x = 10;
    const y = 8;
    const expected = 2;

    const actual = subtract(x, y);
    expect.equal(actual, expected);

});

test('test multiplication', (expect) => {
    const x = 5;
    const y = 4;
    const expected = 20;

    const actual = multiply(x, y);
    expect.equal(actual, expected); 

});

test('test division', (expect) => {
    const x = 20;
    const y = 4;
    const expected = 5;

    const actual = divide(x, y);
    expect.equal(actual, expected); 

});

test('toNumber', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;

    const actual = toNumber(input);

    expect.equal(actual, expected);

});

test('dividezero', (expect) => {
    const x = 0;
    const y = 0;
    const expected = NaN;

    const actual = dividezero(x, y);
    expect.equal(actual, expected); 

});