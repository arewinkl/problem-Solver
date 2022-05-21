function addExtra(listOfNumbers) {
  const newArray = [];
  for (let i = 0; i < listOfNumbers.length + 1; i++) {
    newArray.push(listOfNumbers[i]);
  }
  return newArray;
}
