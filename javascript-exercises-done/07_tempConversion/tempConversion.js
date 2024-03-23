const convertToCelsius = function (fah) {
  const result = +(((fah - 32) * 5) / 9).toFixed(1);
  return result;
};

const convertToFahrenheit = function (cel) {
  const result = +((cel * 9) / 5 + 32).toFixed(1);
  return result;
};

// convertToCelsius(-100);
// convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
