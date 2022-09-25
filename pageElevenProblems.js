// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++
function generateShape(integer) {
  const newArray = [];
  const newwerArray = [];

  for (let i = 0; i < integer; i++) {
    newArray.push("+");
  }
  for (let x = 0; x < integer; x++) {
    newwerArray.push(newArray.join("") + "\n");
  }
  return newwerArray.join("").slice(0, -1);
}

//? This solution returns the correct array with the correct string in the array. But simplifies it to a single line of code, by using the .repeat() function.
function generateShape(integer) {
  console.log(("+".repeat(integer) + "\n").repeat(integer).slice(0, -1));
  return ("+".repeat(integer) + "\n").repeat(integer).slice(0, -1);
}

// switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. default is always entered if you've reached it.
// In some instances, the switch statement is clearer than the if..else statement.
// For example, we can write a function to calculate what day today is, like this:
function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  return days;
}
//This solution eliminates extra lines of code and returns the correct number of days for each month.
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be
// seatsInTheater(nCols, nRows, col, row) === 96
// Here is what the theater looks like:
function seatsInTheater(nCols, nRows, col, row) {
  const height = nCols - (col - 1);
  const width = nRows - row;
  return height * width;
}

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  const newArray = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      newArray.push(i);
    }
  }
  return newArray.length;
}
//!This solution takes the number and checks how many numbers it is divisible by and then returns it as a number. The previous example had to push it out of a for loop and isn't the best way to do it, and having the answer returned in the for loop is better.
function getDivisorsCnt(n) {
  for (let i = 0, x = 1; x <= n; x++) {
    if (n % x === 0) {
      i++;
    }
    if (x == n) {
      return i;
    }
  }
}

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function (num) {
  for (let i = 0, x = 0; i <= num; i++) {
    if (i < num) {
      x = x + i;
    } else return x + num;
  }
};
