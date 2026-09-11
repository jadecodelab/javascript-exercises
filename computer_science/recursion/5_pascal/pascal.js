const pascal = function (n) {
  if (n === 1) return [1];

  const previousRow = pascal(n - 1);

  // add imaginary 0 to the start and end
  const previousRowWithZeros = [0, ...previousRow, 0];

  const newRow = [];

  for (let i = 0; i < previousRowWithZeros.length - 1; i++) {
    const leftNumber = previousRowWithZeros[i];
    const rightNumber = previousRowWithZeros[i + 1];
    newRow.push(leftNumber + rightNumber);
  }

  return newRow;
};

// Do not edit below this line
module.exports = pascal;

// npm test pascal.spec.js
