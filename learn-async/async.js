const sayName = function () {
  console.log("My name is yash");
};

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS Series";
};

setTimeout(changeText, 2000);
setTimeout(sayName, 2000);
