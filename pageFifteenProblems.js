// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
  const newArray = [];
  let meow = x;
  for (let i = 1; i < n + 1; i++) {
    newArray.push(meow);
    meow = meow ** 2;
  }
  return newArray;
}

//?This solution basically uses the same form but instead of adding the exponents, it just does x *= x which does the sane thing.
function squares(x, n) {
  var ret = [];
  for (var i = 0; i < n; i++) {
    ret.push(x);
    x *= x;
  }
  return ret;
}

//!This solution returns a turnery and within the turnery if the number of times to do the function is greater that 0, then it will use the Math.pow() and does it to the second exponent. Then the i represents the index values// so how many times the code should run.
const squares = (x, n) =>
  n <= 0
    ? []
    : Array(n)
        .fill(x)
        .map((m, i) => Math.pow(m, Math.pow(2, i)));

const solution = (start, finish, difference = finish - start) =>
  Math.floor(difference / 3) + (difference % 3);
