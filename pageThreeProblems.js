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
