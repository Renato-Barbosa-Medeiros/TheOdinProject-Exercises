const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num1) {
  let factorial = 1;
	for (i = num1; i > 0; i--) {
    factorial = factorial * [i];
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
