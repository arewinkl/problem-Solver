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
