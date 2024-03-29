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

//? This solution to the problem reduces the array and the variable b== true, then it will add 1 and if not it will add 0 to the variable a. and variable a is initialized with a value of 0.

function countSheeps(arrayOfSheep) {
  let power = arrayOfSheep.reduce((a, b) => a + (b == true ? 1 : 0), 0);
  return power;
}

// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
// For example:
// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

function inAscOrder(arr) {
  let cow = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      cow++;
    } else {
      cow = 0;
      break;
    }
  }

  return cow > 0 ? true : false;
}
//? the array.every() runs a test for each element in the array to make sure that it passes every test.
function inAscOrder(arr) {
  return arr.every((a, b) => b == 0 || arr[b] > arr[b - 1]);
}

// This Kata is intended as a small challenge for my students
// All Star Code Challenge #18
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1
function strCount(str, letter) {
  let cow = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      cow++;
    } else {
      0;
    }
  }
  return cow;
}

//? This solution checks to see how many times the letter appears in the string.
function strCount(str, letter) {
  return str.split(letter).length - 1;
}

//Todo Thus solution takes the arr and splits it, then filters through it and will only return the elements of the array match letter. once that is created from the array it tests to see the length of the new array and that ends up being the answer.
function strCount(str, letter) {
  return str.split("").filter((a) => a == letter).length;
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
