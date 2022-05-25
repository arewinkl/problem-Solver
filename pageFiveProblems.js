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
