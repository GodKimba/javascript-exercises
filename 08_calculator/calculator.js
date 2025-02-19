const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i]
  }
  return x
};

const multiply = function(arr) {
  let x = arr[0];
  for (let i = 1; i < arr.length; i++) {
    x *= arr[i]
  }
  return x
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(n) {
  if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1)
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
