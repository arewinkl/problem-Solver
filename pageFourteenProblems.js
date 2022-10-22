function howManyGifts(maxBudget, gifts) {
  const newArray = gifts.sort((a, b) => a - b);
  let totalGifts = 0;
  let meow = 0;
  for (let i = 0; i < newArray.length; i++) {
    meow = meow + newArray[i];
    if (meow <= maxBudget) totalGifts++;
  }
  return totalGifts;
}
