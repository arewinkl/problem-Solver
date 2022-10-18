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
