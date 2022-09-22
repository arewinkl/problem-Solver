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

function generateShape(integer) {
  console.log(("+".repeat(integer) + "\n").repeat(integer).slice(0, -1));
  return ("+".repeat(integer) + "\n").repeat(integer).slice(0, -1);
}
