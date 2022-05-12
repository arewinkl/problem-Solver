//This solution uses a turnery to decide what to return based on the placement of 'wolf' in the array. A variable position helps to determine where the wolf is located.
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  console.log(position);
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
