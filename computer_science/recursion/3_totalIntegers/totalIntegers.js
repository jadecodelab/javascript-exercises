const isObject = (value) => typeof value === "object" && value != null;

const totalIntegers = function (obj) {
  let count = 0;

  if (!isObject(obj)) {
    return;
  }

  const elements = Object.values(obj);

  for (const element of elements) {
    if (Number.isInteger(element)) {
      count++;
    } else if (isObject(element)) {
      count += totalIntegers(element);
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;

//npm test totalIntegers.spec.js
