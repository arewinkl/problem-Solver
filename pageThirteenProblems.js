// Task
// Given a circuit with fixed resistors connected in series and/or in parallel, calculate the total effective resistance of the circuit.
// All resistors are given in Ω, and the result should be in Ω too (as a float; tested to ± 1e-6). Assume wires have negligible resistance. The voltage of the battery is irrelevant.
// The circuit is passed to your function in the following form:
// I will define a component as any number of resistors connected in series or in parallel.
// The entire circuit counts as a component.
// Each component is an array.
// A series component will have the boolean true in position zero.
// A parallel component will have the boolean false in position zero.
// The other positions will either contain:
// Numbers, denoting fixed resistors of that resistance.
// Arrays, denoting nested components.
// A series circuit with no other entries represents a single wire
// A parallel circuit with no other entries represents a break in the circuit (see below for more details)
// All circuits will be valid and in the form above (short circuits or broken circuits may appear, though)
// There will be no negative resistances
// Example circuit:
//   [
//     true, // series
//     20, // 20Ω resistor
//     [
//       false, // parallel
//       [
//         true, // series
//         30, // 30Ω resistor
//         40, // 40Ω resistor
//       ],
//       30, // 30Ω resistor
//     ],
//     60, // 60Ω resistor
//   ]

//Todo This is a difficult solution that I dont fully understand, would be a good one to go back and practice, to see if the solution below makes any sense.cd

function calculateResistance(circuit) {
  let x = rec(circuit);
  if (x == 0) {
    throw Error("Short Circuit!");
  }
  if (x == 1 / 0) {
    throw Error("Broken Circuit!");
  }
  return x;
}

function rec(circuit) {
  if (typeof circuit == "number") {
    return circuit;
  } else if (circuit.length == 1) {
    return circuit[0] ? 0 : 1 / 0;
  } else if (circuit[0]) {
    return circuit
      .slice(1)
      .map((x) => rec(x))
      .reduce((a, b) => a + b);
  } else {
    return (
      1 /
      circuit
        .slice(1)
        .map((x) => 1 / rec(x))
        .reduce((a, b) => a + b)
    );
  }
}
// The for loop is a very frequently used loop in JS.
// Recall in lesson 9 we wrote a while loop:
// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it using a for loop, like this:
// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [

function multipleOfIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i == 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
//? This solution filters through the array and only returns values that are divisible by their index. a is each element in the array and b is the index value for the element in the array.
function multipleOfIndex(array) {
  return array.filter((a, b) => a % b == 0);
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value) {
  console.log(value.a + value.b, value.operation);
  switch (value.operation) {
    case "+":
      return value.a + value.b;
    case "-":
      return value.a - value.b;
    case "/":
      return value.a / value.b;
    case "*":
      return value.a * value.b;
    case "%":
      return value.a % value.b;
    case "^":
      return Math.pow(value.a, value.b);
  }
}

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  console.log(n);
  if (n < 0 || n == 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else if (n == 13) {
    return n - 2;
  } else if (n > 13) {
    return n - 2;
  }
}

//? This solution is the simplest and all it takes is a turnery to determine what answer should be returned.
function getRealFloor(n) {
  return n >= 13 ? n - 2 : n <= 0 ? n : n - 1;
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// Input: []
// Output: 0
// Input: [-2.398]
// Output: -2.398
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let newStr = str.toLowerCase();
  for (var i = 0; i <= newStr.length; i++) {
    for (var j = i + 1; j <= newStr.length; j++) {
      if (newStr[j] == newStr[i]) {
        return false;
      }
    }
  }
  return true;
}

//? This solution takes the new Set() function. It takes the string and replaces it with a specific value as long as that value doesn't already exist. Then it matches it to the original string length and if those two numbers match it means that all of the characters dont repeat in the string.
function isIsogram(str) {
  return new Set(str.toUpperCase()).size === str.length;
}
