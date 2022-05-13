//This solution uses a turnery to decide what to return based on the placement of 'wolf' in the array. A variable position helps to determine where the wolf is located.
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  console.log(position);
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
function sumStr(a, b) {
  const answer = Number(a) + Number(b);
  return answer.toString();
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
//? this function uses a reducer to get the correct sum.
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function defineSuit(card) {
  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♠")) {
    return "spades";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else {
    return "hearts";
  }
}
