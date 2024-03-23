const removeFromArray = function (arr, ...args) {
  const newArray = [];
  arr.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 7, 'tacos'));
// Do not edit below this line
module.exports = removeFromArray;
