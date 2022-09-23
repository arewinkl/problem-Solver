// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
// +++
// +++
// +++
function generateShape(integer) {
  const newArray = [];
  const newwerArray = [];

  for (let i = 0; i < integer; i++) {
    newArray.push("+");
  }
  for (let x = 0; x < integer; x++) {
    newwerArray.push(newArray.join("") + "\n");
  }
  return newwerArray.join("").slice(0, -1);
}

//? This solution returns the correct array with the correct string in the array. But simplifies it to a single line of code, by using the .repeat() function.
function generateShape(integer) {
  console.log(("+".repeat(integer) + "\n").repeat(integer).slice(0, -1));
  return ("+".repeat(integer) + "\n").repeat(integer).slice(0, -1);
}

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  return days;
}
