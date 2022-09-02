// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
function arr(N) {
  console.log(N);
  const newArray = [];
  for (let i = 0; i < N; i++) {
    newArray.push(i);
  }
  console.log(newArray);
  return newArray;
}
//This method uses a spread operator and then uses the keys method to create an array full of all of the numbers less than the argument that is passed in.
//! The keys that are returned are the index values of the undefined properties that are pushed into the new array.
const arr = (n = 0) => [...Array(n).keys()];
//or
function arr(n = 0) {
  console.log([...Array(n)]);
  return [...Array(n).keys()];
}
