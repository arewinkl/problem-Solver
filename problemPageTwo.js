//This solution uses a turnery to decide what to return based on the placement of 'wolf' in the array. A variable position helps to determine where the wolf is located.
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  console.log(position);
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
function sumStr(a, b) {
  const answer = Number(a) + Number(b);
  return answer.toString();
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//? this function uses a reducer to get the correct sum.
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
function defineSuit(card) {
  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♠")) {
    return "spades";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else {
    return "hearts";
  }
}
//? this answer uses an object with the possible answers, and return what character is in the string card.
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}

// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b) {
  return b === true ? "true" : "false";
}
// converts the boolean to a string that returns the words true or false.
function booleanToString(b) {
  return b.toString();
}

// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr(n, s) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(s);
  }
  return newArray.join("");
}
//? this solution uses the repeat function for the string to return it several times for the answer.
function repeatStr(n, s) {
  return s.repeat(n);
}

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
function points(games) {
  const newArray = [];

  for (let i = 0; i < games.length; i++) {
    if (games[i].split(":")[0] > games[i].split(":")[1]) {
      newArray.push(3);
    } else if (games[i].split(":")[0] === games[i].split(":")[1]) {
      newArray.push(1);
    } else {
      newArray.push(0);
    }
  }
  return newArray.map(Number).reduce((a, b) => {
    return a + b;
  });
}
//? This solution takes the input games, and uses the reduce() to take output which is set to zero nad then compares the values and pushes 0,1,3 for the total.
const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

//   My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.
// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.
// The answer should be rounded to the nearest 2 decimal places.
function howMuchWater(water, load, clothes) {
  const answer = (water * 1.1 ** (clothes - load)).toFixed(2);

  if (load * 2 < clothes) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes";
  } else {
    return Number(answer);
  }
}
//? This answer uses a turnery to solve and return the appropriate answer.
const howMuchWater = (water, load, clothes) =>
  clothes > 2 * load
    ? "Too much clothes"
    : clothes < load
    ? "Not enough clothes"
    : Math.round(water * Math.pow(1.1, clothes - load) * 100) / 100;

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]
const reverseSeq = (n) => {
  const newArray = [];
  for (let i = n; i > 0; i--) {
    newArray.push(i);
  }
  return newArray;
};

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
// Examples:
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"
function hello(name) {
  return name == "" || !name
    ? "Hello, World!"
    : `Hello, ${
        name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1)
      }!`;
}
//? this is a more complicated solution that uses regex and separate replacement functions, thata use both .call.blind on each of the strings.
hello = (n) =>
  `Hello, ${
    n
      ? n
          .replace(/./, Function.call.bind(String.prototype.toUpperCase))
          .replace(/(?<=.).+/, Function.call.bind(String.prototype.toLowerCase))
      : "World"
  }!`;

//   In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]
function reverseList(list) {
  const newList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    newList.push(list[i]);
  }
  return newList;
}

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
const stringToNumber = function (str) {
  return Number(str);
};

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
function doubleChar(str) {
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    newStr.push(str[i]);
    newStr.push(str[i]);
  }

  return newStr.join("");
}

//? This function solves for the doubleChar() by mapping over the split string and doubles it up. after the mapping is done it is joined together, to return a single string.
function doubleChar(str) {
  console.log(str.split(""));
  console.log(
    str
      .split("")
      .map((c) => c + c)
      .join("")
  );
  return str
    .split("")
    .map((c) => c + c)
    .join("");
}
