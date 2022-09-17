// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
function arr(N) {
  console.log(N);
  const newArray = [];
  for (let i = 0; i < N; i++) {
    newArray.push(i);
  }
  console.log(newArray);
  return newArray;
}
//This method uses a spread operator and then uses the keys method to create an array full of all of the numbers less than the argument that is passed in.
//! The keys that are returned are the index values of the undefined properties that are pushed into the new array.
const arr = (n = 0) => [...Array(n).keys()];
//or
function arr(n = 0) {
  console.log([...Array(n)]);
  return [...Array(n).keys()];
}

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.
// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.
function weatherInfo(temp) {
  function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
  }
  var c = convertToCelsius(temp);
  if (c < 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}
//!Study this style of writing a function and a solution. This creates a function that in its arguments it passes in values from a second function that changes temperatures from far to cel. then it answers the problem with a simple turnery.
const weatherInfo = (temp, celsius = convertToCelsius(temp)) =>
  `${celsius} is ${celsius > 0 ? "above " : ""}freezing temperature`;

const convertToCelsius = (temp) => (temp - 32) * (5 / 9);

// ASC Week 1 Challenge 4 (Medium #1)
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// Note that spaces should be ignored in this case.
// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
function vaporcode(string) {
  const meow = string.replace(/[^A-Za-z0-9]/g, "");
  const cat = meow.toUpperCase().split("");

  const newArray = [];

  for (let i = 0; i < meow.length; i++) {
    if (i < meow.length - 1) {
      newArray.push(cat[i] + "  ");
    } else {
      newArray.push(cat[i]);
    }
  }
  return newArray.join("");
}
//?This solution makes this a one line solution, and doesn't need to use a for loop or if statement.
function vaporcode(string) {
  return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}

// This kata is from check py.checkio.org
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n) {
  console.log(array, n);
  console.log(array.length);
  if (array.length - 1 >= n) {
    console.log(array[n] ** n);
    return array[n] ** n;
  } else {
    return -1;
  }
}

//! This solution uses the Math.pow() to return the appropriate answer and it is written in a simple single line of code with a turnery statement. if the array[n] doesn't exist it should just return -1.
function index(array, n) {
  return array.length > n ? Math.pow(array[n], n) : -1;
}

// The wide-mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
// When he meets the alligator, it then makes a tiny mouth.
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
  console.log(animal);
  let cow = animal.toUpperCase();
  console.log(cow);
  return cow == "ALLIGATOR" ? "small" : "wide";
}

// Task
// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.
// At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
// Example
// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.
// The answer was obtained as 5 + 1 + 2 + 3 = 11.

function houseNumbersSum(inputArray) {
  const newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      newArray.push(inputArray[i]);
    } else {
      let answer = newArray.reduce((a, b) => a + b, 0);
      return answer;
      break;
    }
  }
}

//!This solution takes the array [inputArray] and it slices the rest of the array off once it has a value of zero. then it uses the .reduce() to sum all of the digits in that new array after the slice took place.
function houseNumbersSum(inputArray) {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((s, v) => s + v, 0);
}

function houseNumbersSum(inputArray) {
  for (let sum = 0, i = 0; ; i++)
    if (inputArray[i] === 0) return sum;
    else sum += inputArray[i];
}
