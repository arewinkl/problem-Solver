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
