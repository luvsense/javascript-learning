const palindromes = function (str) {
  const strFilter = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const string = strFilter.split('').reverse().join('');
  // console.log(string, strFilter);

  if (string === strFilter) {
    // return console.log(true);
    return true;
  } else {
    // return console.log(false);
    return false;
  }
};

// palindromes('racecar');
palindromes('racecar!');
// Do not edit below this line
module.exports = palindromes;
