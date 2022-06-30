// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6

Problem: function sixToast(num) {
  console.log(num);
  return Math.abs(num - 6);
}
// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
//?This solution works by setting res to whatever is being passed in, and if there is ever a situation where they match than you return 'nothing.

function likeOrDislike(buttons) {
  let res = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === res) {
      res = "Nothing";
    } else {
      res = buttons[i];
      console.log(res);
    }
  }
  console.log(res);
  return res;
}
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
console.log(a, b);
var name = a + b;
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  console.log(dadYearsOld, sonYearsOld);
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template) {
  console.log(`I like ${template.join(", ")}!`);
  return `I like ${template.join(", ")}!`;
}
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  const bmi = weight / (height * height);
  console.log(bmi);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
//? Here is a solution that uses a turnery for all of the cases.
function bmi(weight, height) {
  var bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
//TODO This is a great way to create a function that will be stored in a variable.
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
// Boxlines
// Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)
// Notes
// Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
// X,Y and Z are strictly positive, and can go as large as 2^16 - 1
// This is my first kata, so I hope every one will enjoy it <3
function f(x, y, z) {
  return x * (y + 1) * (z + 1) + y * (z + 1) * (x + 1) + z * (x + 1) * (y + 1);
}
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
// @ @@ @ @@ @ @@ @ @@ @ @@ @
// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.
function countRedBeads(n) {
  console.log(n);
  console.log((n - 1) * 2);
  const answer = (n - 1) * 2;

  return answer < 0 ? 0 : answer;
}
// Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.
// It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:
// a bar has 10 boxes of cigarettes,
// a box has 18 cigarettes,
// out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
// of course the self made cigarettes also have an end which can be used to create a new one...
// Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
function startSmoking(bars, boxes) {
  var total = (bars * 10 + boxes) * 18;

  for (var i = 1; i < total; i++) {
    if (i % 5 === 0) {
      total += 1;
    }
  }

  return total;
}
