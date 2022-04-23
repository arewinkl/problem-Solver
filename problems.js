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
