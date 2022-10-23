const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, element) => total + element, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, element) => total * element, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(i)
  }
	return multiply(arr)
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
