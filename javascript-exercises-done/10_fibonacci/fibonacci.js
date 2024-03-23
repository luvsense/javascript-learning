const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) {
    return 'OOPS';
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num) {
    let a = 0;
    let b = 1;
    let c = '';

    for (let i = num - 2; i >= 0; i--) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};

// Do not edit below this line
module.exports = fibonacci;
