// Add an item to the list:
// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)
function addExtra(listOfNumbers) {
  const newArray = [];
  for (let i = 0; i < listOfNumbers.length + 1; i++) {
    newArray.push(listOfNumbers[i]);
  }
  return newArray;
}
//? This solution takes the listOfNumbers parameter thats being passed into the function and uses the .concat() method to add a specific number to the end of the array. In this case the number added to the end of the array is 0.
function addExtra(listOfNumbers) {
  console.log(listOfNumbers.concat());
  console.log(listOfNumbers.concat(0));
  return listOfNumbers.concat(0);
}
//TODO This solution uses the spread operator to add a number to the end of the array, and that number is 13.
function addExtra(listOfNumbers) {
  console.log([...listOfNumbers]);
  console.log([...listOfNumbers, 13]);
  return [...listOfNumbers, 13];
}

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// If you need help, here's a reference:
function take(arr, n) {
  return arr.slice(0, n);
}

//? This solution takes a new array and pushes the correct values to the new array and everything passed that is not pushed.
function take(arr, n) {
  let counter = 0;
  let res = [];
  for (let i of arr) {
    counter += 1;
    if (counter <= n && counter <= arr.length) {
      res.push(i);
    }
  }
  return res;
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  console.log(n, x, y);
  return n % x == 0 && n % y == 0 ? true : false;
}
