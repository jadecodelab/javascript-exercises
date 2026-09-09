const contains = function (obj, target) {
  for (const value of Object.values(obj)) {
    if (value === target) {
      return true;
    }

    if (typeof value === "object") {
      if (contains(value, target)) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;

// npm test contains.spec.js
