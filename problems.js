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

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.
// Note:
// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:
// str = "In 2015, I want to know how much does iPhone 6+ cost?"
// The numbers are 2015, 6
// Sum is 2021.
//?The first variable numbers takes the string and only returns numbers in the string. Once this is done it allows us to use the reduce method, to sum up all of the numbers in the string.
function sumFromString(str) {
  const numbers = str.match(/\d+/g) || [];
  return numbers.map(Number).reduce((a, b) => a + b, 0);
}

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

firstNonConsecutive = (a) =>
  (a = a.filter((e, i) => e - a[i - 1] !== 1)[1]) === undefined ? null : a;

//   Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included)
// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers) {
  let string = numbers.length;
  const max = numbers[string - 1];
  const min = numbers[0];
  const totalLength = max - min;
  const newArray = [];
  for (let i = 0; i <= totalLength; i++) {
    if (numbers[0] + i <= max) {
      newArray.push(numbers[0] + i);
    }
  }
  return newArray;
}
//? This is a second solution that uses the spread operator, and then mapped over the numbers parameter being passed in for this problem.
const pipeFix = (numbers) =>
  [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].map(
    (_, idx) => numbers[0] + idx
  );

//   Given a number n, return the number of positive odd numbers below n, EASY!
//   Examples (Input -> Output)
//   * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
//   * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
function oddCount(n) {
  return Math.floor(n / 2);
}

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
function getAge(inputString) {
  const num = inputString.match(/\d+/g);
  return parseInt(num);
}
//? here is a second solution where you can just parse int to find the number in the string.
function getAge(inputString) {
  return parseInt(inputString);
}

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
function bingo(a) {
  for (let i = 0; i < a.length; i++) {
    if (
      a.includes(2) &&
      a.includes(7) &&
      a.includes(9) &&
      a.includes(14) &&
      a.includes(15)
    ) {
      return "WIN";
    } else {
      return "LOSE";
    }
  }
}
//? This second solutions uses the .every() method that checks to see if it contains every value is included in the array by using the .includes()
function bingo(a) {
  return [2, 9, 14, 7, 15].every((x) => a.includes(x)) ? "WIN" : "LOSE";
}

//! Given a number, find the permutation with the smallest absolute value (no leading zeros).
//! -20 => -20
//! -32 => -23
//! 0 => 0
//! 10 => 10
//! 29394 => 23499
//! The input will always be an integer.
//! I was not able to solve this one, so I need to go back over and understand how they dealt with the zeros in the parameter to return the smallest number that would'nt start with a zero.
function minPermutation(n) {
  if (n < 0) return -minPermutation(-n);
  const digits = [...String(n)].sort((a, b) => a - b);
  const nonzero = digits.findIndex((x) => x > 0);
  [digits[0], digits[nonzero]] = [digits[nonzero], digits[0]];
  return +digits.join`` || 0;
}

// Given a varying number of integer arguments, return the digits that are not present in any of them.
// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)
// * 15  -> '101.25 Chinese Yuan'
// * 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
function usdcny(usd) {
  const Cny = (usd * 6.75).toFixed(2) + " Chinese Yuan";
  return Cny;
}
//?Here is another solution to the problem that is more streamlined.
usdcny = ($) => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const sharkTravel = sharkDistance / sharkSpeed;
  const youTravel = pontoonDistance / youSpeed;
  const dolphinHelp = sharkDistance / (sharkSpeed / 2);
  if (youTravel < sharkTravel) {
    return "Alive!";
  } else if (dolphin == true && youTravel < dolphinHelp) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}
//Here is a fast way to solve this problem using a turnery to determine if you are faster than the shark to the pontoon.
shark = (pD, sD, yS, sS, d) =>
  yS / pD > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";

//   Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//   Examples
//   n = 0  ==> [1]        # [2^0]
//   n = 1  ==> [1, 2]     # [2^0, 2^1]
//   n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
  const newArray = [];
  for (let i = 0; i <= n; i++) {
    newArray.push(2 ** i);
  }
  return newArray;
}

// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:
// array[0] ---> represents $1 bills
// array[1] ---> represents $5 bills
// array[2] ---> represents $10 bills
// array[3] ---> represents $20 bills
// array[4] ---> represents $50 bills
// array[5] ---> represents $100 bills
// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.
function giveChange(amount) {
  var arr = [0, 0, 0, 0, 0, 0];
  while (amount >= 100) {
    arr[5]++;
    amount -= 100;
  }
  while (amount >= 50) {
    arr[4]++;
    amount -= 50;
  }
  while (amount >= 20) {
    arr[3]++;
    amount -= 20;
  }
  while (amount >= 10) {
    arr[2]++;
    amount -= 10;
  }
  while (amount >= 5) {
    arr[1]++;
    amount -= 5;
  }
  while (amount >= 1) {
    arr[0]++;
    amount--;
  }
  return arr;
}
//? here is another solution that uses a .map(). You should review this change to see if you can use a map like this in the future to go through a problem that adjusts the value throughout the map.
const bills = [100, 50, 20, 10, 5, 1];

const giveChange = (amount) =>
  bills
    .map((value) => {
      let result = Math.trunc(amount / value);
      amount = amount % value;

      return result;
    })
    .reverse();

//     Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
function shortcut(string) {
  return string
    .split("")
    .map((x) =>
      x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ? "" : x
    )
    .join("");
}

//? This solution takes the string splits it and filters through the array provided to see if any of the values match if they do it is true and wont push, but if its false those values are pushed and joined.
function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}

// Task
// Given a number N, determine if the sum of N consecutive numbers is odd or even.
// If the sum is definitely an odd number, return Odd.
// If the sum is definitely an even number, return Even.
// If the sum can be either odd or even ( depending on which first number you choose ), return Either.
// Examples
// Odd_or_Even(1) should return Either, because the sum can be odd or even.
// Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
// Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
function oddOrEven(n) {
  let oddNum = 0;
  let meow = n / 2;

  if (n % 2 === 1) {
    return "Either";
  } else if (meow % 2 == 1) {
    return "Odd";
  } else {
    return "Even";
  }
}

//? here is another solution using a turnery that solves it by testing if the halved number has a remainder when divisible by two.
function oddOrEven(n) {
  return n % 2 ? EITHER : (n / 2) % 2 ? ODD : EVEN;
}

// If you've completed this kata already and want a bigger challenge, here's the 3D version
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
const flip = (d, a) => {
  if (d === "R") {
    return a.sort(function (a, b) {
      return a - b;
    });
  } else if (d === "L") {
    return a
      .sort(function (a, b) {
        return a - b;
      })
      .reverse();
  }
};
//? Here is another solution for this problem that uses a turnery to solve the flip and sort of the array.
const flip = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));

// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  return number * -1;
}
