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
