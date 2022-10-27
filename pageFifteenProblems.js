function squares(x, n) {
  const newArray = [];
  let meow = x;
  for (let i = 1; i < n + 1; i++) {
    newArray.push(meow);
    meow = meow ** 2;
  }
  return newArray;
}
