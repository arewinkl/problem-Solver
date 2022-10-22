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

function sumCircles() {
  let circleSum = 0;
  let pie = Math.PI;
  for (let i = 0; i < arguments.length; i++) {
    let r = arguments[i] / 2;
    circleSum = circleSum + pie * r ** 2;
  }
  return `We have this much circle: ${Math.round(circleSum)}`;
}
