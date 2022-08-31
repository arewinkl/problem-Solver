// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
// For example,
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:
// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F.

function brightest(colors) {
  let colorIndex = 0,
    maxValue = 0;
  console.log(colors);
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i],
      r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16),
      value = Math.max(r, g, b);
    console.log(r, g);
    if (value > maxValue) {
      maxValue = value;
      colorIndex = i;
    }
  }
  return colors[colorIndex];
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  // Your solution here
  console.log(d);
  if (d < 3) {
    return d * 40;
  } else if (d < 7) {
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  }
}
//? this solutions writes it as a variable function and creates a ternary that passes the argument through 3 potential circumstances.
const rentalCarCost = (d) => 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0);

// Wilson primes satisfy the following condition. Let P represent a prime number.
// Then,
// ((P-1)! + 1) / (P * P)
// should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.
const amIWilson = (p) => [5, 13, 563].includes(p);

//? This solution is written as a turnery and is checking for the only possible true values and if that is not what the variable is it will return false.
function amIWilson(p) {
  return p === 5 || p === 13 || p === 563 ? true : false;
}

// The national go-kart racing competition is taking place in your local town and you've been called for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, number of blocks are always at least 6.
// Remember a classic racing podium have three platforms for first, second and third places. First place is the highest and second place is higher than third. Also notice that platforms are arranged as 2nd - 1st - 3rd.
// The organizers want a podium that satisfies:
// The first place platform has the minimum height posible
// The second place platform has the closest height to first place
// All platforms have heights greater than zero.
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

function racePodium(blocks) {
  let first = Math.ceil(blocks / 3) + 1;
  let second = first - 1;
  let third = blocks - first - second;
  console.log(first, second, third);
  if (third == 0) {
    third = 1;
    second -= 1;
  }
  return [second, first, third];
}

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0-2.
function elevator(left, right, call) {
  console.log(left, right, call);
  let decOne = Math.abs(call - left);
  let decTwo = Math.abs(call - right);
  console.log(decOne, decTwo);

  if (decOne < decTwo) {
    return "left";
  } else {
    return "right";
  }
}

//? This solution writes the return as a turnery and returns either left or right.
const elevator = (left, right, call) =>
  Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";

//   Area of an arrow
//   An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
//   arrow
//   a and b are integers and > 0
//   Write a function which returns the area of the arrow.
function arrowArea(a, b) {
  console.log(a, b);
  // your code
  return (a * b) / 2 / 2;
}

// Four Seven
// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).
// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.
function fourSeven(n) {
  while (n == 4) return 7;
  while (n == 7) return 4;
  return 0;
}
//? This solution creates an object and returns the value if the argument matches the value in the object, or else it simply returns zero.
function fourSeven(n) {
  // Your Code Here
  let results = {
    7: 4,
    4: 7,
  };
  return results[n] || 0;
}

// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)
const unusualFive = () =>
  ["Putin", "huilo", "lalala", "lalala", "lalala"].length;
//This is another solution using the length parameter on a string instead of a array.
function unusualFive() {
  return "catts".length;
}

// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
//TODO To solve this problem first you need to sort the numbers in the array from smallest to largest, this will allow you to most easily determine if the triangle is a pythagorean triangle. If it is then return true and if not just return false.
function isPythagoreanTriple(integers) {
  console.log(integers);
  const cow = integers.sort((a, b) => a - b);

  console.log(cow);

  return integers[0] ** 2 + integers[1] ** 2 == integers[2] ** 2;
}
//! This solution takes the nums parameter and creates three variables a,b,c and gives them each a value from the array which it can run the test on which were explained above.
function isPythagoreanTriple(nums) {
  const [a, b, c] = nums.sort((a, b) => a - b);

  return a ** 2 + b ** 2 === c ** 2;
}

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
function divisibleBy(numbers, divisor) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

//!This solution filters through the values to see if it is divisible by the divisor. If the value is divisible by the divisor it will result in zero which is true. it will return an array that only has those filtered values left.
function divisibleBy(numbers, divisor) {
  console.log(numbers.filter((n) => n % divisor === 0));
  return numbers.filter((n) => n % divisor === 0);
}

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  console.log(beast[0], beast.length - 1);
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

function feast(beast, dish) {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}
