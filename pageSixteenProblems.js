// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number)
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  console.log(operation, value1 + value2);
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else return value1 / value2;
}
//?This solution uses a switch case instead of a else if statement like the solution above. Not the best answer to the problem, but another way to solve it.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

// The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
  return Math.floor(time * 0.5);
}

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
  let newArray = [];
  let cat = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (cat[i].toLowerCase() == "e") {
    } else if (cat[i].toLowerCase() == "i") {
    } else if (cat[i].toLowerCase() == "a") {
    } else if (cat[i].toLowerCase() == "o") {
    } else if (cat[i].toLowerCase() == "u") {
    } else newArray.push(cat[i]);
  }
  return newArray.join("");
}

//!This is a simple solution that uses regex to remove the vowels from the string.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

//? This creates a variable outside of the function and then when the function runs it filters to see if the str contains any vowels and if so it doesnt get returned.
const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
function switchItUp(number) {
  switch (number) {
    case (number = 0):
      return "Zero";
      break;
    case (number = 1):
      return "One";
      break;
    case (number = 2):
      return "Two";
      break;
    case (number = 3):
      return "Three";
      break;
    case (number = 4):
      return "Four";
      break;
    case (number = 5):
      return "Five";
      break;
    case (number = 6):
      return "Six";
      break;
    case (number = 7):
      return "Seven";
      break;
    case (number = 8):
      return "Eight";
      break;
    case (number = 9):
      return "Nine";
      break;
  }
}
//This solution takes an array of ;possible answers and they corispond with their index value.
switchItUp = (n) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];

//   altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
// Note: your function should have a default parameter.
// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18
function howManyLightsabersDoYouOwn(name) {
  return name == "Zach" ? 18 : 0;
}
