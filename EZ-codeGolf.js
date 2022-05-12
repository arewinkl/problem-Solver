//TODO The problem was to take the input and change the octal number to a decimal. then that number needed to be sliced so that it has no more than 15 characters. To do this I had to make it in a string to slice it to the appropriate length. Then after that I used the parseFloat() to change the string to the number that is a decimal.
function f() {
  //   console.log(arguments)
  //   console.log(parseInt(arguments[0],8))
  //  console.log(this.parseFloat(arguments[0]))
  //   console.log(parseInt(arguments[0],8).toString().split('').length)
  const string = parseInt(arguments[0], 8).toString().slice(0, 14);
  console.log(string);
  console.log(parseFloat(string));
  //   console.log(parseFloat(parseInt(arguments[0],8).toString().substring(0,15)))
  //   console.log(parseInt(arguments[0], 8).toFixed(15))
  if (parseInt(arguments[0], 8).toString().split("").length > 14) {
    //      return parseInt(arguments[0],8).toString().slice(0,14)
    return parseFloat(string);
  } else {
    return parseInt(arguments[0], 8);
  }
}
//Below is a very simply code explanation that does virtually the same thing.
f = (x) => eval(0 + x);
