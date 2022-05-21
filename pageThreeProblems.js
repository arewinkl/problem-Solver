// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Ahoy Matey!
// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?
// Your task is to check if the gunners are loaded and ready, if they are: Fire!
// If they aren't ready: Shiver me timbers!
// Your gunners for each test case are 2, 3 or 4.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!
const cannonsReady = (gunners) => {
  let bang = 0;
  Object.keys(gunners).forEach(function (key) {
    if (gunners[key] == "nay") {
      bang++;
    } else {
      bang + 0;
    }
  });
  return bang > 0 ? "Shiver me timbers!" : "Fire!";
};
//? This uses a for loop to check if the value nay exists.
const cannonsReady = (gunners) => {
  for (var i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};
//TODO This solution is very simple and uses the .some() to check to see if the value nay exists.
const cannonsReady = (gunners) => {
  return Object.values(gunners).some((m) => m === "nay")
    ? "Shiver me timbers!"
    : "Fire!";
};

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
};

// You have cultivated a plant, and after months of hard work, the time has come to reap the flowers of your hard work. When it was growing, you added water and fertilizer, and kept a constant temperature. It's time check how much your plant has grown.
// A plant is represented horizontally, from the base to the left, to the end to the right:
// ---@---@---
// The stem is represented by hyphens -, and the flowers are represented by symbols. A plant always starts with the stem, and always ends with flowers.
// Four parameters will be given. The four parameters are:
// seed (string) - determines the type of flowers generated by the plant.
// water (integer) - each unit of water extends the portion of stem between the flowers. It also gives how many times the stems + flower clusters should be repeated
// fert (integer) - each unit of fertilizer increases the amount of flowers, grouped in clusters
// temp (integer) - if the temperature given is in the range of 20°C and 30°C, the plant grows normally, otherwise, all the flowers die except for one flower at the end of the stem.
// Given the above parameters, your task is to return a string representing the plant.
function plant(seed, water, fert, temp) {
  let string = "";

  if (temp >= 20 && temp <= 30) {
    for (let x = 0; x < water; x++) {
      for (let x = 0; x < water; x++) {
        string += "-";
      }

      for (let x = 0; x < fert; x++) {
        string += seed;
      }
    }
  } else {
    for (let x = 0; x < water; x++) {
      for (let x = 0; x < water; x++) {
        string += "-";
      }
    }
    string += seed;
  }
  return string;
}
//? This answer uses the .repeat() that allows you to create a long string based on the variables that are passed in to the function.
function plant(seed, water, fert, temp) {
  let stem = "-".repeat(water);
  let flower = seed.repeat(fert);
  if (temp < 20 || temp > 30) return stem.repeat(water) + seed;
  return (stem + flower).repeat(water);
}

// Your job is to create a class called Song.
// A new Song will take two parameters, title and artist.
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'
// You will also have to create an instance method named howMany() (or how_many()).
// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".
// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
// // day 1 (or test 1)
// mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// // These are all new since they are the first listeners.
// // day 2
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// // Luke and Amanda are new, john already listened to it the previous day
// Also if the same person listened to it more than once a day it should only count them once.
function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  let array = [];
  this.howMany = function (x) {
    let count = 0;
    x.map((i) => {
      array.includes(i.toUpperCase())
        ? ""
        : array.push(i.toUpperCase()) && (count = count + 1);
    });
    return count;
  };
}

// #Description
// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:
// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”
// Where x <= 1000 and y <=1000
// #Task
// Assuming there are no other types of animals, work out how many of each animal are there.
// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages
// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.
// In the form:
// [Heads, Legs] = [72, 200]
// VALID - [72, 200] =>             [44 , 28]
//                              [Chickens, Cows]
// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
// There are many different ways to solve this, but they all give the same answer.
// You will only be given integers types - however negative values (edge cases) will be given.
