const sumAll = function (min, max) {
  // Find range
  let maxRange;
  let minRange;

  if (
    min < 0 ||
    max < 0 ||
    typeof min !== typeof 1 ||
    typeof max !== typeof 1
  ) {
    return 'ERROR';
  }

  if (min > 0 && min >= max) {
    maxRange = min;
    minRange = max;
  } else if (max > 0 && min < max) {
    maxRange = max;
    minRange = min;
  } else {
    console.log('Not a proper value');
  }
  let temp = 0;
  console.log(maxRange, minRange);
  while (maxRange > 0) {
    temp = temp + minRange;
    minRange++;
    maxRange--;
  }
  console.log(temp);
  return temp;
};
// sumAll(10, [90, 1]);
// console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
