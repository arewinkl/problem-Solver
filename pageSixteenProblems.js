// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number)
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  console.log(operation, value1 + value2);
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else return value1 / value2;
}
//?This solution uses a switch case instead of a else if statement like the solution above. Not the best answer to the problem, but another way to solve it.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

// The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
  return Math.floor(time * 0.5);
}
