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
