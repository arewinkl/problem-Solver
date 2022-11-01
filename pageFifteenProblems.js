// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  const newArray = [];
  let meow = x;
  for (let i = 1; i < n + 1; i++) {
    newArray.push(meow);
    meow = meow ** 2;
  }
  return newArray;
}

//?This solution basically uses the same form but instead of adding the exponents, it just does x *= x which does the sane thing.
function squares(x, n) {
  var ret = [];
  for (var i = 0; i < n; i++) {
    ret.push(x);
    x *= x;
  }
  return ret;
}

//!This solution returns a turnery and within the turnery if the number of times to do the function is greater that 0, then it will use the Math.pow() and does it to the second exponent. Then the i represents the index values// so how many times the code should run.
const squares = (x, n) =>
  n <= 0
    ? []
    : Array(n)
        .fill(x)
        .map((m, i) => Math.pow(m, Math.pow(2, i)));

// Description
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:
//                  ┌────────┐
//                  │-6------│
//                  └────────┘
// ┌────────┐
// │------5-│
// └────────┘  ┌─────► OK!
//             │    ┌────────┐
//             │    │-4------│
//             │    └────────┘
// ┌────────┐  │
// │------3-│  │
// BANG!────┘  ├─────► OK!
//   ▲  |\_/|  │    ┌────────┐
//   │ ("^-^)  │    │-2------│
//   │ )   (   │    └────────┘
// ┌─┴─┴───┴┬──┘
// │------1-│
// └────────┘
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)
// Task
// Find the minimum number of jumps to go from start to finish

const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);

//   Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
//   This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//   All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//   What is considered Valid?
//   A string of braces is considered valid if all braces are matched with the correct brace.
//   Examples
//   "(){}[]"   =>  True
//   "([{}])"   =>  True
//   "(}"       =>  False
//   "[(])"     =>  False
//   "[({})](]" =>  False
//?This solution uses a simple for loop to test if the current character matches the correct order, detailed in the description. If it doesn't then it will return false, instead of true.
function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

//? This uses a switch case to determine if it needs to return false, within the existing for loop.
function validBraces(braces) {
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
      case "[":
      case "{":
        depth.push(braces[i]);
        break;
      case ")":
        if (depth.pop() != "(") return false;
        break;
      case "]":
        if (depth.pop() != "[") return false;
        break;
      case "}":
        if (depth.pop() != "{") return false;
        break;
    }
  }
  return depth.length == 0;
}

// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
// Example
// 123  => 6
// 223  => 7
// 1337 => 14

const getSumOfDigits = (int) => [...(int + "")].reduce((a, b) => a + +b, 0);

function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}
