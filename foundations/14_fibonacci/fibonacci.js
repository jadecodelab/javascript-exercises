const fibonacci = function (n) {
  n = Number(n);

  if (!Number.isInteger(n) || n < 0) {
    return "OOPS";
  }

  if (n === 1 || n === 2) return 1;
  else if (n === 0) return 0;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
