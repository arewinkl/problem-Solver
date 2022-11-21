// Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.
// Now imagine there is a sequence which follows these rules:
// None of the people have their arms raised at first
// Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
// Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
// The first 10 steps of the sequence represented as a table are:
// Step   P1   P2   P3
// --------------------
//  0     0    0    0
//  1     1    0    0
//  2     2    0    0
//  3     0    1    0
//  4     1    1    0
//  5     2    1    0
//  6     0    2    0
//  7     1    2    0
//  8     2    2    0
//  9     0    0    1
// Given a number, return an array with the number of hands raised by each person at that step.

const getPositions = (s) => {
  const firstPerson = Math.trunc(s % 3);
  const secondPerson = Math.trunc((s / 3) % 3);
  const thirdPerson = Math.trunc((s / 9) % 3);
  console.log(s, [firstPerson, secondPerson, thirdPerson]);
  return [firstPerson, secondPerson, thirdPerson];
};

//This solution simplifys by doing all of the math within the return and instead of using math.trunc it uses math.floor.
function getPositions(s) {
  return [s % 3, Math.floor(s / 3) % 3, Math.floor(s / 9) % 3];
}

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
function humanReadable(seconds) {
  let h, rs, m, ss, s;

  rs = seconds % 3600;
  h =
    Math.floor(seconds / 3600) < 10
      ? "0" + Math.floor(seconds / 3600)
      : Math.floor(seconds / 3600);
  m =
    Math.floor(rs / 60) < 10 ? "0" + Math.floor(rs / 60) : Math.floor(rs / 60);
  ss = seconds - (m * 60 + h * 3600);
  s = ss < 10 ? "0" + ss : ss;

  return h + ":" + m + ":" + s;
}

//?This solution is an alternate to the solution to the problem above. This time it maps over the function to determin the length and returns the answers in the correct order. Would be a good one to go back and look at/ practice.
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

//new problem
//7 katas and harder

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

//?This is a different way to solve the problem by using a turnery instead of a if else statement.
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
//! in the solution below the n is split into a string and then the reducce function is used to sum all of the numbers, then the sr variable is split and reversed so that the numbers can be multiplied together to determin if they can be summed up to equal the initial value of n.
function numberJoy(n) {
  var s = n
    .toString()
    .split("")
    .reduce((s, v) => s + +v, 0);
  var sr = +s.toString().split("").reverse().join("");
  return s * sr == n;

  console.log(n);
}

function numberJoy(n) {
  let numbers = n.toString().split("");
  let sum = numbers.map(Number).reduce((a, c) => a + c, 0);
  let reverse = sum.toString().split("").reverse().join("");

  return reverse * sum == n;
}
