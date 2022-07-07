// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6

Problem: function sixToast(num) {
  console.log(num);
  return Math.abs(num - 6);
}
// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
//?This solution works by setting res to whatever is being passed in, and if there is ever a situation where they match than you return 'nothing.

function likeOrDislike(buttons) {
  let res = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === res) {
      res = "Nothing";
    } else {
      res = buttons[i];
      console.log(res);
    }
  }
  console.log(res);
  return res;
}
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
console.log(a, b);
var name = a + b;
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  console.log(dadYearsOld, sonYearsOld);
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template) {
  console.log(`I like ${template.join(", ")}!`);
  return `I like ${template.join(", ")}!`;
}
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  const bmi = weight / (height * height);
  console.log(bmi);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
//? Here is a solution that uses a turnery for all of the cases.
function bmi(weight, height) {
  var bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
//TODO This is a great way to create a function that will be stored in a variable.
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
// Boxlines
// Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)
// Notes
// Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
// X,Y and Z are strictly positive, and can go as large as 2^16 - 1
// This is my first kata, so I hope every one will enjoy it <3
function f(x, y, z) {
  return x * (y + 1) * (z + 1) + y * (z + 1) * (x + 1) + z * (x + 1) * (y + 1);
}
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
// @ @@ @ @@ @ @@ @ @@ @ @@ @
// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.
function countRedBeads(n) {
  console.log(n);
  console.log((n - 1) * 2);
  const answer = (n - 1) * 2;

  return answer < 0 ? 0 : answer;
}
// Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.
// It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:
// a bar has 10 boxes of cigarettes,
// a box has 18 cigarettes,
// out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
// of course the self made cigarettes also have an end which can be used to create a new one...
// Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
function startSmoking(bars, boxes) {
  var total = (bars * 10 + boxes) * 18;

  for (var i = 1; i < total; i++) {
    if (i % 5 === 0) {
      total += 1;
    }
  }

  return total;
}
// Description:
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
function greet() {
  return "hello world!";
}
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
  console.log(employed, vacation);

  return (employed == true) & (vacation == false) ? true : false;
}
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
// Please note the following:
// When a is close to b, return 0.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as zero.
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function () {
  console.log(this > 10);
  console.log(/^[0-9]+$/.test(this));
  return this > 10 ? false : /^[0-9]+$/.test(this);
};
//?This check if it is a single digit number and if it is it returns true else it returns false.
String.prototype.digit = function () {
  return /^\d$/.test(this);
};
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
//TODO This takes the new variable operator and matches it to operations, then it takes the other new variables left and right and chooses to measure their length and multiply/divide/add/subtract based on what is the operator.This then repeats based on the number returned '.' the correct number of times.
const dotCalculator = (equation) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(" ");
  console.log(left, operator, right);
  console.log(operations[operator](left.length, right.length));
  return ".".repeat(operations[operator](left.length, right.length));
};
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
// If the tail is right return true, else return false.
// The arguments will always be non empty strings, and normal letters.
function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);
  console.log(bod, tail, sub);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}
//? This is another solution to the problem that returns the end of the string and compares it to the variable tail.
function correctTail(bod, tail) {
  return bod[bod.length - 1] === tail;
}

function scrabbleScore(word) {
  const array = word.toUpperCase().split("");
  let score = 0;

  var dict = {
    " ": 0,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };

  array.forEach(function (key, index, cow) {
    console.log(dict[key]);
    console.log(cow);
    console.log(key);
    return (score += dict[key]);
  });

  return score;
}
