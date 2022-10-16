// In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:
// nameThatNumber(4)   // returns "four"
// nameThatNumber(19)  // returns "nineteen"
// nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

function nameThatNumber(num) {
  let double = Math.floor(num / 10);
  let doubleDown = num - double * 10;
  let nums = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num == 0) {
    return "zero";
  } else if (num < 20 && num > 0) {
    return nums[num];
  } else if (num >= 20) {
    return num % 10 == 0
      ? tens[double - 1]
      : tens[double - 1] + " " + nums[doubleDown];
  }
}

//?Here is an alternative solution to the nameThatNumber problem that is able to solve the problem in one line of code.
function nameThatNumber(n) {
  var a = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    b = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  return n ? a[n] || b[~~(n / 10)] + (n % 10 ? " " + a[n % 10] : "") : "zero";
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//?This is an alternative solution that is able to skip the step of using the split() function, by mapping over the names and returning the first letter from each word.
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
function move(position, roll) {
  return position + roll * 2;
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!
function fixTheMeerkat(arr) {
  const newArray = arr.reverse();
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(newArray[i]);
  }
  return answer;
}
//?This is the easiest way to solve this problem, but the above solution is another way to solve it with a for loop.
function fixTheMeerkat(arr) {
  return arr.reverse();
}

//Return the type of the sum of the two arguments
//!This solution is simple because it uses the typeof() to evaluate what type the argument is being passed into the function.
function typeOfSum(a, b) {
  console.log(typeof (a + b));
  return typeof (a + b);
}
//? This solution evaluates the arguments passed in by using a turnery function.
function typeOfSum(a, b) {
  return typeof a != "string" && typeof b != "string" ? "number" : "string";
}

// Our spaceship has crashed on an unknown planet many light years away from earth. Thankfully we were able to send out a distress signal right before the crash. Help will be here shortly but we need to gather as much information about this planet as we can before we're rescued.
// Before our control panels were destroyed, we were able to gather the duration of this planet's orbit around it's planetary system's star.
// Among other things, we need to determine if a given year is a leap year on this planet.
// Your Task:
// Given the duration of the planet's orbit (in days) and a specific year on this planet, determine if the given year is a leap year here.
// For example:
// On Earth, a single rotation around the sun takes 365.25 days. Therefore, each year takes 365 days but every forth year is a leap year and takes 366 days. The next leap year on Earth will occur in 2020.
// Notes: To make things easier, the period of the leap years will always be a power of 2. Good luck!
function isLeapYear(duration, year) {
  const sum = 1 / (duration - Math.floor(duration));
  return (year / sum) % 1 == 0;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  //   console.log(arrayOfSheep)
  //   arrayOfSheep.map((x,y=0)=> { if(x ===true){ y+ 1} else{ 0}
  //                              console.log(y)
  //                              },0)
  let meow = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      meow++;
    } else {
      0;
    }
  }
  return meow;
}

function countSheeps(arrayOfSheep) {
  let power = arrayOfSheep.reduce((a, b) => a + (b == true ? 1 : 0), 0);
  return power;
}
