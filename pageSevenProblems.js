// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
function xor(a, b) {
  console.log(a, b);
  return a == b ? false : true;
}
//? This solution returns a binary answer of true or false if the parameters don't match.
function xor(a, b) {
  return a != b;
}
// Now you have to write a function that takes an argument and returns the square of it.
function square(a) {
  // Write the "square"-function here
  console.log(a * a);
  return a * a;
}
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT" => "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
function DNAtoRNA(dna) {
  const data = dna.split("");
  const newArray = [];
  for (let i = 0; i < dna.split("").length; i++) {
    if (data[i] == "T") {
      newArray.push("U");
    } else {
      newArray.push(data[i]);
    }
  }
  return newArray.join("");
}
