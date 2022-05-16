// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

const cannonsReady = (gunners) => {
  let bang = 0;
  Object.keys(gunners).forEach(function (key) {
    if (gunners[key] == "nay") {
      bang++;
    } else {
      bang + 0;
    }
  });
  return bang > 0 ? "Shiver me timbers!" : "Fire!";
};
