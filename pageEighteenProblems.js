// Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.
// Now imagine there is a sequence which follows these rules:
// None of the people have their arms raised at first
// Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
// Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
// The first 10 steps of the sequence represented as a table are:
// Step   P1   P2   P3
// --------------------
//  0     0    0    0
//  1     1    0    0
//  2     2    0    0
//  3     0    1    0
//  4     1    1    0
//  5     2    1    0
//  6     0    2    0
//  7     1    2    0
//  8     2    2    0
//  9     0    0    1
// Given a number, return an array with the number of hands raised by each person at that step.

const getPositions = (s) => {
  const firstPerson = Math.trunc(s % 3);
  const secondPerson = Math.trunc((s / 3) % 3);
  const thirdPerson = Math.trunc((s / 9) % 3);
  console.log(s, [firstPerson, secondPerson, thirdPerson]);
  return [firstPerson, secondPerson, thirdPerson];
};

//This solution simplifys by doing all of the math within the return and instead of using math.trunc it uses math.floor.
function getPositions(s) {
  return [s % 3, Math.floor(s / 3) % 3, Math.floor(s / 9) % 3];
}

function humanReadable(seconds) {
  let h, rs, m, ss, s;

  rs = seconds % 3600;
  h =
    Math.floor(seconds / 3600) < 10
      ? "0" + Math.floor(seconds / 3600)
      : Math.floor(seconds / 3600);
  m =
    Math.floor(rs / 60) < 10 ? "0" + Math.floor(rs / 60) : Math.floor(rs / 60);
  ss = seconds - (m * 60 + h * 3600);
  s = ss < 10 ? "0" + ss : ss;

  return h + ":" + m + ":" + s;
}
