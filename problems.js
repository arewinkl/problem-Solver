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
