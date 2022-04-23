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
