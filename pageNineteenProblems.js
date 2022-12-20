// DESCRIPTION:
// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

//! Create a function called args_count that returns the number of arguments provided
function args_count() {
  console.log(arguments.length);
  return arguments.length;
}

//! Puzzle
//! If you don't know who Waldo is, he's a nice guy who likes to be in crowded places. But he's also a bit odd as he always likes to hide in plain sight. Can you spot Waldo in the crowd?
//! Task
//! Given crowd, an array of strings of equal length, representing a crowded place, return an array with two integers representing the coordinates [y, x] where Waldo can be found ([0, 0] is top-left, y being the row and x being the column ).
// Examples
// We've spotted Waldo a couple of times in the past. Below is what we found out. Note that he's been in much more crowded places lately.
// #1 Waldo at the beach
// "             "          Air
// "         w   "           Air with a bird
// "   w         "           Air with a bird
// "~~~~~~~~~~~~~"           Sea
// ".~..~~.~~~..~"           Waves on beach
// "...P......P.."           Beach with some people
// "......P..P..."           Beach with some people
// "..PW........."           Beach with Waldo and presumably a friend next to him
// Unredacted report: Waldo can be found at [7, 3], wearing his usual outfit
// #2 Waldo visiting the Great Pyramid
// "                              "          Air
// "                              "           Air
// "            _                 "           Top of pyramid
// "          _____               "           Layer of pyramid
// "        _________             "           Layer of pyramid
// "  B  _______________   G   GG "           Ground layer of pyramid with several people, including Waldo
// Unredacted report: Waldo can be found at [5, 2], wearing special clothes protecting him from the sun

function findWaldo(crowd) {
  let count = new Map();
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      count.set(crowd[y][x], (count.get(crowd[y][x]) || 0) + 1);
    }
  }
  for (let y = 0; y < crowd.length; y++) {
    for (let x = 0; x < crowd[y].length; x++) {
      if (count.get(crowd[y][x]) == 1) {
        return [y, x];
      }
    }
  }
}

// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results = { sanity: "Hello" };
  console.log(results.sanity);
  return results;
}

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  console.log(a, b);
  return 180 - (a + b);
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
  let newArray = [];
  for (let i = 1; i < n + 1; i++) {
    newArray.push(i);
  }
  return newArray;
}

//!This solution takes the inital number and fills an array with the values for the correct number of monkeys.
function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));

  return arr;
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  console.log(n);
  if (n < 10) return "Keep at it until you get it";
  if (n > 9) return "Great, now move on to tricks";
}

//? This solution is just as simple as the one above, but it uses a turnery to determin which answer to send to the kid.s
function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}
