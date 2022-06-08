// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
  console.log(numbers);
  let sum = 0;
  numbers.map((n) => ((sum += n ** 2), console.log(n ** 2)));
  console.log(sum);
  return sum;
}
