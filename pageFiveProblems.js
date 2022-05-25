// For every good kata idea there seem to be quite a few bad ones!
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x) {
  let good = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] == "good") {
      good++;
    }
  }
  if (good === 0) {
    return "Fail!";
  } else if (good > 0 && good < 3) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
//? this creates a variable that counts the number of good in the array. After that it check to return different answers based of the number of goods.
const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  console.log(good_count);
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}
