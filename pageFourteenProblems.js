// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.
// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

function howManyGifts(maxBudget, gifts) {
  const newArray = gifts.sort((a, b) => a - b);
  let totalGifts = 0;
  let meow = 0;
  for (let i = 0; i < newArray.length; i++) {
    meow = meow + newArray[i];
    if (meow <= maxBudget) totalGifts++;
  }
  return totalGifts;
}

//!This solution sorts the gifts array. and then filters through the array and creates a variable item and adds to it as long as it subratracted from max budget is still greater than zero. Also if the array is empty it will simply set its value to zero.
function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b);
  return gifts.filter((item) => (maxBudget -= item) >= 0).length;
}

// Write a function that takes as its parameters one or more numbers which are the diameters of circles.
// The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".
// You don't know how many circles you will be given, but you can assume it will be at least one.
// So:
// sumCircles(2) == "We have this much circle: 3"
// sumCircles(2, 3, 4) == "We have this much circle: 23"
// Translations and comments (and upvotes!) welcome!

function sumCircles() {
  let circleSum = 0;
  let pie = Math.PI;
  for (let i = 0; i < arguments.length; i++) {
    let r = arguments[i] / 2;
    circleSum = circleSum + pie * r ** 2;
  }
  return `We have this much circle: ${Math.round(circleSum)}`;
}

//?This solution takes the argument spread operates it and places it in a one line function to solve. would be a good one to practice repeating.
const sumCircles = (...ds) =>
  `We have this much circle: ${Math.round(
    (Math.PI * ds.reduce((s, d) => s + d * d, 0)) / 4
  )}`;

//   Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}

//This solution creates variables for the current date, and then uses that to check against what is being passed through the function.
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  var cd = new Date(currentDate);
  var ed = new Date(expirationDate);
  return enteredCode === correctCode && ed >= cd;
}

// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.
// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
// You begin with writing a generic Ship class / struct:
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board

//!This function uses the .prototype method that allows you to add on to an original function and add new variables.
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}
Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 > 20;
};

//? This problem takes a different way of solving the problem without the .prototype method and just adds a method inside the original function Ship.

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20;
  };
}

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2
//? This solution creates a new array and then returns that after it is put through a for loop to find the correctly incremented number to the array.

function incrementer(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let cow = nums[i] + i + 1;
    if (cow < 10) {
      newArray.push(cow);
    } else {
      newArray.push(cow % 10);
    }
  }
  return newArray;
}
//! This solution uses a map function to simply increment through the array. the i variable returns the index value and this simply adds that to the arrays initial value and makes sure it isn't returns only the remainder.

function incrementer(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)
reverse = function (array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};

//? This solution uses the reduce function and reverse the position of the elements in the array.
function reverse(array) {
  return array.reduce(function (a, b) {
    return [b].concat(a);
  }, []);
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  let y = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] == x ? y++ : 0;
  }
  if (y > 0) {
    return true;
  } else {
    return false;
  }
}

//? This solution takes the array and then it uses the .includes() function to see if the array contains the value x.
const check = (a, x) => a.includes(x);
