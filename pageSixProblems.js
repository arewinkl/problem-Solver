// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers) {
  console.log(numbers);
  let sum = 0;
  numbers.map((n) => ((sum += n ** 2), console.log(n ** 2)));
  console.log(sum);
  return sum;
}
//? This solution uses the reducer method and passes in two different parameters (sum, n) it multiplies the n by itself and adds that number to the overall sum which is initially set at 0.
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// 20_year_estimate = one_year_total * 20
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
function stairsIn20(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i].reduce((a, b) => a + b);
  }
  return sum * 20;
}
//? This solution uses two different reducers that are nested to get the values for each array and add them together. After that that number is returned once it has been multiplied by 20.
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
//? This solution uses the .concat() method that also uses the spread operator to get the values out of each array and them combine them all.
function stairsIn20(s) {
  var arr = [].concat(...s);
  var newArr = [].concat(...arr);
  return newArr.reduce((a, b) => a + b) * 20;
}

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// Example:
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello(name, city, state) {
  const fullName = name.join(" ");
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

// 🚩 What is the flag?
// The flag is hidden in the string variable MESS
// The flag is in the format FLAG{CAPITAL-LETTERS-WITH-HYPHEN}
// The flag couldn't be found from the string literal right away... but You can indeed see it somehow!
// A magic number 16 might help... but how should it be used?
const FLAG =
  "dflaskjf; klcqwjer9qieiqucwepirom9028905839045809ds8gf[90g8sd[fh8f-[gh8-09wer0=t]mxcvnmz.xvchku9erpiot789-348tipahjrgfkhzxvxmb,mncxmh6t3q90485ut9rsqklgfjkj#Q$YTEWOPJGPOEDSJC)$%#@^*@$%690uiodrj;lstj3;wpiot8ujdfpgioja90-8-0cx8v#KL%J,,.345.3.l0-0----0000-00---0-----0..-.-.--.....--.-.-.----5345..9.........4.....3.........456...4.........3.....2.........7.....3424.......................564...544......4...5.8...9.....6...3.7.........79345.9.565.....1...1.3...7.....1...1.33452.......................013..89345......4......9......732......8........6......8........9......9........846..78654......................698............8...3............6.....098345.....73............6...6............186...........................79843..9879878....6.......7.......8.......5.......8.......6.......9.......9.....12387.....7............................786982..........8........45623..77833...........9...............109841....................345.....723....5...1...6...2...6...3....5......78234.....45....1...8...7...8...2...3....873....4...5...........................4.....7..........1...5............9.4...93459......1...............1...............1............................4.....3..345634..3...7...3........7.5....3455......1.....3.........2.....867843....1............................5321452............1...............1...............1....743745.....1...............1............................2345754..5.....44........6.....354335....3.....13........4.....42........7542345................4....2...533....52...3.....6....2.3..9.....98...1..7.6.....6....7...88.....5....6....9...964....................------0--0-=0-=-0-00000000-00-0-0-000000,0,,0000jasdkl;jferiotupvn23c014985901c79840p72x812m598723189057m2190857mx98012479812798m1407395813479857m2149857198x0579814320758937981982347384957983g";
let flag = `FLAG{IS-IT-EASY-YET-FUN}`;
console.log(flag.length);
let res = [];
for (let i = 0; i < FLAG.length; i += 16) {
  console.log(FLAG.slice(i, i + 16));
  res.push(FLAG.slice(i, i + 16));
}

// This kata is the first part of a series: Neighbourhood kata collection. If this one is too easy you can try out the harder katas. ;)
// The neighbourhood of a cell (in a matrix) are cells that are near to it. There are two popular types:
// The Moore neighborhood are eight cells which surround a given cell
// The Von Neumann neighborhood are four cells which share a border with the given cell

const get_neighbourhood = function (type, arr, [y, x]) {
  if (!arr[y] || arr[y][x] === undefined) return [];
  const arrType =
    type === "moore"
      ? [
          [y - 1, x - 1],
          [y - 1, x],
          [y - 1, x + 1],
          [y, x - 1],
          [y, x + 1],
          [y + 1, x - 1],
          [y + 1, x],
          [y + 1, x + 1],
        ]
      : [
          [y, x - 1],
          [y, x + 1],
          [y - 1, x],
          [y + 1, x],
        ];

  return arrType
    .filter(([a, b]) => arr[a] && arr[a][b] !== undefined)
    .map(([e1, e2]) => arr[e1][e2])
    .sort((a, b) => a < b);
};

//? This is another solution that should be studied, it uses if statements to determine what should be returned.
function getNeighbourhood(type, matrix, coordinates) {
  const getCell = (i, j) => {
    try {
      return matrix[i][j];
    } catch {
      return;
    }
  };

  const [i, j] = coordinates;

  if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
    return [];
  }

  if (type === "moore") {
    return [
      getCell(i - 1, j - 1),
      getCell(i - 1, j),
      getCell(i - 1, j + 1),
      getCell(i, j - 1),
      getCell(i, j + 1),
      getCell(i + 1, j - 1),
      getCell(i + 1, j),
      getCell(i + 1, j + 1),
    ].filter((s) => s >= 0);
  } else {
    return [
      getCell(i - 1, j),
      getCell(i, j - 1),
      getCell(i, j + 1),
      getCell(i + 1, j),
    ].filter((s) => s >= 0);
  }
}
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

function sayHello(name) {
  console.log(name);
  return `Hello, ${name}`;
}

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
  console.log(sperm);
  return sperm == "XY"
    ? `Congratulations! You're going to have a son.`
    : `Congratulations! You're going to have a daughter.`;
}
//? This solution takes the peramiter and returns it after destructuring it with a turnary as well.
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

function iceBrickVolume(radius, bottleLength, rimLength) {
  console.log(radius, bottleLength, rimLength);
  const iceHeight = bottleLength - rimLength;
  const width = radius * 2;
  console.log(iceHeight);

  return (iceHeight * width * width) / 2;
}
