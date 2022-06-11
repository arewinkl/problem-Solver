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

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 20_year_estimate = one_year_total * 20
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
function stairsIn20(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i].reduce((a, b) => a + b);
  }
  return sum * 20;
}
//? This solution uses two different reducers that are nested to get the values for each array and add them together. After that that number is returned once it has been multiplied by 20.
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}

function stairsIn20(s) {
  var arr = [].concat(...s);
  var newArr = [].concat(...arr);
  return newArr.reduce((a, b) => a + b) * 20;
}
