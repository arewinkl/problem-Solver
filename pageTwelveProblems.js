function nameThatNumber(num) {
  let double = Math.floor(num / 10);
  let doubleDown = num - double * 10;
  let nums = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num == 0) {
    return "zero";
  } else if (num < 20 && num > 0) {
    return nums[num];
  } else if (num >= 20) {
    return num % 10 == 0
      ? tens[double - 1]
      : tens[double - 1] + " " + nums[doubleDown];
  }
}
