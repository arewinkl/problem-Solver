// Task
// Given a circuit with fixed resistors connected in series and/or in parallel, calculate the total effective resistance of the circuit.
// All resistors are given in Ω, and the result should be in Ω too (as a float; tested to ± 1e-6). Assume wires have negligible resistance. The voltage of the battery is irrelevant.
// The circuit is passed to your function in the following form:
// I will define a component as any number of resistors connected in series or in parallel.
// The entire circuit counts as a component.
// Each component is an array.
// A series component will have the boolean true in position zero.
// A parallel component will have the boolean false in position zero.
// The other positions will either contain:
// Numbers, denoting fixed resistors of that resistance.
// Arrays, denoting nested components.
// A series circuit with no other entries represents a single wire
// A parallel circuit with no other entries represents a break in the circuit (see below for more details)
// All circuits will be valid and in the form above (short circuits or broken circuits may appear, though)
// There will be no negative resistances
// Example circuit:
//   [
//     true, // series
//     20, // 20Ω resistor
//     [
//       false, // parallel
//       [
//         true, // series
//         30, // 30Ω resistor
//         40, // 40Ω resistor
//       ],
//       30, // 30Ω resistor
//     ],
//     60, // 60Ω resistor
//   ]

//Todo This is a difficult solution that I dont fully understand, would be a good one to go back and practice, to see if the solution below makes any sense.cd

function calculateResistance(circuit) {
  let x = rec(circuit);
  if (x == 0) {
    throw Error("Short Circuit!");
  }
  if (x == 1 / 0) {
    throw Error("Broken Circuit!");
  }
  return x;
}

function rec(circuit) {
  if (typeof circuit == "number") {
    return circuit;
  } else if (circuit.length == 1) {
    return circuit[0] ? 0 : 1 / 0;
  } else if (circuit[0]) {
    return circuit
      .slice(1)
      .map((x) => rec(x))
      .reduce((a, b) => a + b);
  } else {
    return (
      1 /
      circuit
        .slice(1)
        .map((x) => 1 / rec(x))
        .reduce((a, b) => a + b)
    );
  }
}

function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}
