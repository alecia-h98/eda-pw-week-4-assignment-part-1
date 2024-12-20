console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('+++Personalized Hello+++');

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Mary'));

// 3. Function to add two numbers together & return the result
console.log('+++Adding 2 numbers together+++');

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(2, 3));

// 4. Function to multiply three numbers & return the result
console.log('+++Multiplying within a function+++');

function multiplyThree(a, b, c) {
  let answer = a * b * c;
  return answer;
}

console.log(multiplyThree(3, 4, 7));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('+++Is my number positive or negative?+++');

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Is the amount greater than zero? ' + isPositive(57));
console.log('Is the amount greater than zero? ' + isPositive(-67));
console.log('Is the amount greater than zero? ' + isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('+++Return the last item in an array+++');
function getLast(array) {
  if (array.length === 0) {
    return `undefined`;
  }
  let lastIndex = array.length - 1
  return array[lastIndex];
}
let AleciasArray = [];

console.log('the last item in the empty array is: ' + getLast(AleciasArray));
//returning the last item
AleciasArray = [34, 16, 17, 23];
console.log('the last item in the array is: ' + getLast(AleciasArray));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('+++Finding a value in the array+++');
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
AleciasArray = [13, 4, 7, 8, 378990];
console.log(find(4, AleciasArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
