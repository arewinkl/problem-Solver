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

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
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

Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 > 20;
};
