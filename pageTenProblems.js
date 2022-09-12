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

function vaporcode(string) {
  return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ");
}
