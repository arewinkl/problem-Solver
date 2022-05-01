//April-21-2022
//   Task
// N lamps are placed in a line, some are switched on and some are off. What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?
// You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.
// Your task is to find the smallest number of lamps that need to be switched.
function lamps(a) {
  var switch1 = 0;
  var switch2 = 0;
  for (var i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      if (a[i] != 1) {
        switch1++;
      } else {
        switch2++;
      }
    } else {
      if (a[i] != 0) {
        switch1++;
      } else {
        switch2++;
      }
    }
  }

  return Math.min(switch1, switch2);
}

//   Kata Task
//   I have a cat and a dog.
//   I got them at the same time as kitten/puppy. That was humanYears years ago.
//   Return their respective ages now as [humanYears,catYears,dogYears]
var humanYearsCatYearsDogYears = function (humanYears) {
  let newArray = [];

  if (humanYears === 1) {
    newArray.push(1, 15, 15);
  } else if (humanYears === 2) {
    newArray.push(2, 24, 24);
  } else if (humanYears > 2) {
    let catYears = (humanYears - 2) * 4 + 24;
    let dogYears = (humanYears - 2) * 5 + 24;
    newArray.push(humanYears, catYears, dogYears);
  }

  return newArray;
};

// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"
function nameShuffler(str) {
  const newStr = str.split(" ").reverse().join(" ");

  return newStr;
}

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153
function isNarcissistic(n) {
  //your code here
  const newString = n.toString().split("");
  let count = 0;
  for (let i = 0; i < newString.length; i++) {
    count += newString[i] ** newString.length;
  }
  console.log(count);
  if (count === n) {
    return true;
  } else {
    return false;
  }
}

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
function stringClean(s) {
  const string = s.split("");
  const newArray = [];

  for (let i = 0; i < string.length; i++) {
    if (/\d/.test(string[i]) == false) {
      newArray.push(string[i]);
    }
  }
  return newArray.join("");
}

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
function squareOrSquareRoot(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) - Math.floor(Math.sqrt(array[i])) == 0) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] ** 2);
    }
  }

  return newArray;
}

// Complete the function which converts a binary number (given as a string) to a decimal number. takes the first number which is the length of the string and adds it to the sum of the values in the string.
function binToDec(bin) {
  const newArray = [];
  const newBin = bin.split("");
  const length = bin.split("").length;
  let total = 0;

  for (let i = 0; i < bin.length; i++) {
    if (newBin[i] == 1) {
      total++;
    }
  }
  newArray.push(length);
  newArray.push(total);
  if (length < 2) {
    return parseInt(bin.split("")[0]);
  } else {
    return parseInt(newArray.join(""));
  }
}

// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets
function magNumber(info) {
  const PT92 = 17;
  const M4A1 = 30;
  const M16A2 = 30;
  const PSG1 = 5;

  if (info[0] == "PT92") {
    let bullets = info[1] * 3;
    return Math.ceil(bullets / PT92);
  } else if (info[0] == "M4A1") {
    let bullets = info[1] * 3;
    return Math.ceil(bullets / M4A1);
  } else if (info[0] == "M16A2") {
    let bullets = info[1] * 3;
    return Math.ceil(bullets / M16A2);
  } else if (info[0] == "PSG1") {
    let bullets = info[1] * 3;
    return Math.ceil(bullets / PSG1);
  }
}
//? A second solution would be to create a new object of info for the weapons and pass it into the problem as weapons[info[0]].
function magNumber(info) {
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };
  console.log(weapons[info[0]]);
  return Math.ceil((info[1] * 3) / weapons[info[0]]);
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// Hint for R users:
// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output
function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}
//? Here is another solution that uses a turnery to solve the problem and return a different solution based on the length of the strings.
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
function openOrSenior(data) {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      newArray.push("Senior");
    } else newArray.push("Open");
  }
  return newArray;
}

// You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.
// So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
// People start giving you their orders.
// Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.
// Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.
function barista(coffees) {
  console.log(coffees);
  const newCoffee = coffees.sort(function (a, b) {
    return a - b;
  });
  const prepTime = [];
  const time = [];

  for (let i = 0; i < newCoffee.length - 1; i++) {
    if (i == 0) {
      prepTime.push(newCoffee[0]);
    }
    prepTime.push(newCoffee[i + 1] + 2);
  }
  time.push(prepTime[0]);

  if (coffees.length < 1) {
    return 0;
  } else if (coffees.length == 1) {
    return coffees[0];
  } else if (coffees.length > 1) {
    prepTime.reduce(function myFunc(a, b) {
      time.push(a + b);
      return a + b;
    });
    return time.reduce(function allDone(a, b) {
      return a + b;
    });
  }
}

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
  const firstLetter = word[0].toUpperCase();
  const length = word.length;
  const part = word.split("").splice(1, length).join("");
  return firstLetter + part;
}

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
  const newArray = [];
  const multiples = Math.floor(limit / integer);

  if (integer * 2 == limit) {
    newArray.push(integer);
    newArray.push(limit);
    return newArray;
  } else if (integer * 2 > limit) {
    newArray.push(integer);
    return newArray;
  } else {
    for (let i = 1; i < multiples + 1; i++) {
      newArray.push(integer * i);
    }
  }
  return newArray;
}
//? Here is a slightly consolidated answer to this problem.
function findMultiples(int, limit) {
  var arr = [];
  for (var i = 1; limit >= i * int; i++) {
    arr.push(i * int);
  }
  return arr;
}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
function stringy(size) {
  let newArray = [];

  for (let i = 1; i < size + 1; i++) {
    if (i / 2 === Math.floor(i / 2)) {
      newArray.push("0");
    } else {
      newArray.push("1");
    }
  }
  return newArray.join("");
}
//? The example below is a second way to solve this problem. it is deconstructed since it takes in only one parameter. What it does is repeats the string "10" the number of times size, and then it slices off all other numbers except for the first three. it starts at index [0] and then keeps the specific number of elements passed in which was size (3).
const stringy = (size) => "10".repeat(size).slice(0, size);

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
const rps = (p1, p2) => {
  if (p1 == "rock" && p2 == "scissors") {
    return "Player 1 won!";
  } else if (p1 == "rock" && p2 == "paper") {
    return "Player 2 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    return "Player 1 won!";
  } else if (p1 == "paper" && p2 == "scissors") {
    return "Player 2 won!";
  } else if (p1 == "scissors" && p2 == "rock") {
    return "Player 2 won!";
  } else if (p1 == "scissors" && p2 == "paper") {
    return "Player 1 won!";
  } else {
    return "Draw!";
  }
};

//? Here is another solution that uses a turnery to evaluate the rock,paper,scissors case. If it matches then player 1 wins but if they are identical its a draw and otherwise player 2 wins the game.
const rps = (p1, p2) => {
  const rules = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  console.log(p1, p2);
  console.log(rules[p1]);
  console.log(rules[p1] === p2);
  return rules[p1] === p2
    ? "Player 1 won!"
    : p1 === p2
    ? "Draw!"
    : "Player 2 won!";
};

// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.
// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.
function toFreud(string) {
  const length = string.split(" ").length;
  if (string === "") {
    return string;
  } else {
    const newString = "sex ".repeat(length);
    const str = newString.substring(0, newString.length - 1);
    return str;
  }
}
//? here is a second solution that uses regex to create the string. Want to pass in the string length and replace it with the regex string.
let toFreud = (s) => s.replace(/\w+/g, "sex");

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.
// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
// *should work also on Leading and Trailing Spaces and caps.
// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space
// "   space WALK   " => "   Space Walk   "
function dropCap(n) {
  const words = n.split(" ");
  const newArray = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").length <= 2) {
      newArray.push(words[i]);
    } else {
      newArray.push(
        words[i].split("")[0].toUpperCase() + words[i].toLowerCase().slice(1)
      );
    }
  }
  return newArray.join(" ");
}
//? This second solution uses a .map(). it maps over the string and if it is longer that 2 characters long it will uppercase the first index, and then it will lower case the rest of the string and return it with the string joined together again.
function dropCap(str) {
  return str
    .split(" ")
    .map(function (w) {
      return w.length > 2 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w;
    })
    .join(" ");
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  const newArray = [];
  for (let x = 0; x < arr.length; x++) {
    if (x % 2 === 0) {
      newArray.push(arr[x]);
    }
  }
  return newArray;
}

// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
// Examples
// x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
// x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
// x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
// x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
// x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25
function root(x, n) {
  console.log(x, n);
  return x ** (1 / n);
}

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Graph
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
function squareArea(A) {
  const radius = (A * 4) / (2 * Math.PI);
  const answer = (radius * radius).toFixed(2);
  return parseFloat(answer);
}

// Implement a function which multiplies two numbers.
function multiply(a, b) {
  return a * b;
  // Write here your multiply-function
}

// Write a function to split a string and convert it into an array of words.
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string) {
  return string.split(" ");
}

// Circle area inside square
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.
// inscribed circle
// You get the blue+red area and need to calculate the red area.
// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.
function squareAreaToCircle(size) {
  const radius = size ** (1 / 2) / 2;
  const circle = Math.PI * radius ** 2;

  return circle;
}

// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).
// The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.
//? Practice working with the reduce method, understand how it works with an array while its also updating a variable that is being used. There are two parts to the reducer. The Accumulator and the updated current value. Also needs an initial value that is set for the reducer, (in our case that was input).
//! const numbers = [175, 50, 25];
//! document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
//! function myFunc(total, num) {
//!  return total - num;
//! }
function chain(input, fs) {
  return fs.reduce(function (a, b) {
    console.log(b(a));
    console.log(b);
    console.log(a);
    return b(a);
  }, input);
}

// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.
function sum(array) {
  return array.reduce((a, b) => {
    return a + b;
  });
}

// You must use the .reduce() method within your answer
// Three sisters run Goodness Gracious Green (a shop selling all things green and lovely).
// Since opening, they've struggled to agree on the sale cost of products. One believes costs should be kept as low as possible, the middle sister wants to keep an average price and the eldest thinks that they should charge more for their one-of-a-kind green things.
// Your task is to create a function called bestPrice which will take an array of 3 prices which should be averaged to return the best and final price.
// With your help the sisters can put an end to their fights once and for all!
function bestPrice(array) {
  //enter code here
  console.log(array);
  return (
    array.reduce(function (a, b) {
      return a + b;
    }) / array.length
  );
}

// Task
// You have a string of length n consisting of zeroes and ones. Consider the following operation:
// Choose any two adjacent positions in the string
// If one of them is 0, and the other one is 1,
// remove these two digits from the string.
// What is the length of the smallest string that you can get after applying this operation multiple times?
//? The for loop is asking if the two index values match add one to out and then loop to the next index.....but if they dont match it wants the for loop to skip tow ahead because those two matching up forces it to cancel each other out.
function zeroAndOne(s) {
  console.log(s);
  let out = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] || i === s.length - 1) {
      out++;
    } else {
      i++;
    }
  }
  //coding and coding..
  return out;
}

// Kata Task
// I have a cat and a dog which I got as kitten / puppy.
// I forget when that was, but I do know their current ages as catYears and dogYears.
// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]
// NOTES:
// Results are truncated whole numbers of "human" years
//? You can perform all of the math within the array itself so that it gets returned in the correct format for the problem (had no idea that this was a strategy)
const ownedCatAndDog = (catYears, dogYears) => [
  Math.floor(catYears < 24 ? catYears / 15 : (catYears - 16) / 4),
  Math.floor(dogYears < 24 ? dogYears / 15 : (dogYears - 14) / 5),
];

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
//? the includes function test to see that if in the array (in this case newestArray) contains the value that is being looped through (newArray[i]), if it doesn't exist then push that value to the new array.
function mergeArrays(arr1, arr2) {
  const newArray = arr1.concat(arr2);
  const newestArray = [];

  newArray.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < newArray.length; i++) {
    if (!newestArray.includes(newArray[i])) {
      newestArray.push(newArray[i]);
    }
  }

  return newestArray;
}

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.
function plural(n) {
  if (n == 0) {
    return true;
  } else if (n > 0 && n < 1) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n > 1) {
    return true;
  }
}
//? this solution is much simpler code than the if/else statements above. It just uses a turnery to solve the problem, if n === 1 it returns false and if it isn't 1 then in returns true.
function plural(n) {
  return n === 1 ? false : true;
}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//TODO Here we pushed all the values to the newArray, by filtering through all of the values and only doing it for inputs that were less than zero, and then summed all of those values up.
function countPositivesSumNegatives(input) {
  const newArray = [];
  let positive = 0;
  if (input == null || input == "") {
    return newArray;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positive++;
      }
    }
    newArray.push(positive);
    newArray.push(
      input
        .filter((num) => {
          if (num < 0) {
            return num;
          }
        })
        .reduce(function (a, b) {
          return a + b;
        }, 0)
    );
    return newArray;
  }
}
//? This is a simply version of the code above that uses a simple if statement to push the values into two variables that are then returned as an array.
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

// Odd bits are getting ready for Bits Battles.
// Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.
// Return an array of all the steps.
// 1 <= n <= 8
// NOTE: n != 0, because n represents the number of 1s.
//TODO practice using nested for loops and manipulating arrays values.
function bitMarch(n) {
  console.log("n", n);
  var arr = [];
  for (var i = 7; i >= n - 1; i--) {
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < n; j++) {
      result[i - j] = 1;
    }
    arr.push(result);
  }
  return arr;
}

// Complete the function which converts a binary number (given as a string) to a decimal number.
//?the parseInt() function takes in a string and returns an integer. so this function is used to pass bin in and then you set the base as 2, because in math base 2 is for binary numbers.
function binToDec(bin) {
  console.log(parseInt(bin, 2));
  return parseInt(bin, 2);
}

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
function maps(x) {
  const newArray = [];
  x.map(function (x) {
    newArray.push(x * 2);
  });
  return newArray;
}
//? here is a simpler solution to use the map function and directly return the results.
function maps(x) {
  return x.map((n) => n * 2);
}

// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  const newArray = [];
  const length = cc.length - 4;
  for (let i = 0; i < cc.length; i++) {
    if (i < length) {
      newArray.push("#");
    } else {
      newArray.push(cc[i]);
    }
  }
  return newArray.join("");
}
//? The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
function maskify(cc) {
  console.log(cc.slice(-4).padStart(cc.length, "#"));
  return cc.slice(-4).padStart(cc.length, "#");
}

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
//? The first for loop takes the first string and adds letters to the first variable, but breaks one it matches the parameter (letter). Then the second for loop finds where the string2 matches letter and splices everything before that in the string. Once all of these are completed then first and the new (secondString) are added together and returned.
function stringMerge(string1, string2, letter) {
  const firstString = string1.split("");
  const secondString = string2.split("");
  let first = "";

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] != letter) {
      first += firstString[i];
    } else {
      break;
    }
  }
  for (let x = 0; x < secondString.length; x++) {
    if (secondString[x] == letter) {
      secondString.splice(0, x);
      break;
    }
  }
  const newString = secondString.join("");
  return first + newString;
}
//Todo This is a second solution that simplifies the answer by splicing everything after (letter) in string1. Then the second string slices off only the beginning. Then the first piece is added to the second and returned for the answer.
function stringMerge(string1, string2, letter) {
  return (
    string1.slice(0, string1.indexOf(letter)) +
    string2.slice(string2.indexOf(letter))
  );
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
