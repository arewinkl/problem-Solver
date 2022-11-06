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
