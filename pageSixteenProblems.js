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

// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.
// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
// "not picking" --> "pot nicking"
// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.
// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
// Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

function spoonerize(words) {
  let word = words.split(" ");
  console.log(word[1][0], word[0].slice(1));
  //?This solution first gets the first letter from the second word and places it on the first word after slicing the first letter from that word.
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(
    " "
  );
}
//! This solution sets each leter to one of the words in the strigns.
function spoonerize(words) {
  let [a, b] = words.split(" ");
  console.log(a, b)[(a, b)] = [b[0] + a.slice(1), a[0] + b.slice(1)];

  return [a, b].join(" ");
}

// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
function numberJoy(n) {
  var s = n
    .toString()
    .split("")
    .reduce((s, v) => s + +v, 0);
  var sr = +s.toString().split("").reverse().join("");
  return s * sr == n;
}

// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]
//! This is a great challenge to practice with and is a good test for refactoring code for a quciker answer with less code.
function fizzbuzz(n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        newArray.push("FizzBuzz");
      } else {
        newArray.push("Fizz");
      }
    } else if (i % 5 == 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}

//? This solution creates variables and depending on if the are true or false it will either return fizz, buzz, or both.
function fizzbuzz(n) {
  var i = 1,
    arr = [];
  while (i <= n) {
    var fizz = i % 3 == 0;
    var buzz = i % 5 == 0;
    if (fizz || buzz) {
      arr.push((fizz ? "Fizz" : "") + (buzz ? "Buzz" : ""));
    } else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

//?This is my attempt at recreating the above solution, it could be done with the while function or it could also be created with a for loop as well.
function fizzbuzz(n) {
  //TODO Begin by creating the variable one that you will itterate and one that you will push answers into.
  var i = 1,
    arr = [];
  //TODO Secondly create a while loop that will runn as long as i is less than n, and besure to increment i each time.
  while (i <= n) {
    //TODO thirdly create variables that will test the value of i to see weather it is devisable by 3 or 5.
    var fizzy = i % 3 === 0;
    var buzzy = i % 5 === 0;
    //TODO Fourthly create a if statement that if either of the above variables fizzy or buzzy are true will push to the array fizz, buzz, or fizzbuzz based on the turnery that was created. And finaly return the new array that was created for the answer to this problem.
    if (fizzy || buzzy) {
      arr.push((fizzy ? "Fizz" : "") + (buzzy ? "Buzz" : ""));
    } else arr.push(i);
    i++;
  }
  return arr;
}
