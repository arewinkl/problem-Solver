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
