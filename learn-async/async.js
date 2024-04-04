console.log('sending request to server');
setTimeout(() => {
  console.log('Here is your data from the server');
}, 3000);

// If javascript is single threaded it should
// not be to run this line until the above line
// is finished
console.log('I am at the end of the file');
