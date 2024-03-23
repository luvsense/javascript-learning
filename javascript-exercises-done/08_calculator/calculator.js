const add = function (input1, input2) {
  return input1 + input2;
};

const subtract = function (input1, input2) {
  return input1 - input2;
};

const sum = function (input1) {
  let temp = 0;
  for (i of input1) {
    temp = temp + i;
  }
  return temp;
};

const multiply = function (input1) {
  temp = 1;
  for (i of input1) {
    temp = temp * i;
  }
  return temp;
};

const power = function (input1, input2) {
  return (result = input1 ** input2);
};

const factorial = function (input1) {
  if (input1 === 0) {
    return 1;
  } else {
    temp = 1;
    counter = 1;
    while (input1 > 0) {
      temp = temp * counter;
      counter++;
      input1--;
    }
    return temp;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
