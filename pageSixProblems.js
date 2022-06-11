// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
  console.log(numbers);
  let sum = 0;
  numbers.map((n) => ((sum += n ** 2), console.log(n ** 2)));
  console.log(sum);
  return sum;
}
//? This solution uses the reducer method and passes in two different parameters (sum, n) it multiplies the n by itself and adds that number to the overall sum which is initially set at 0.
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

function stairsIn20(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i].reduce((a, b) => a + b);
  }
  return sum * 20;
}
