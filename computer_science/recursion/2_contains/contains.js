const contains = function (obj, target) {
  for (const value of Object.values(obj)) {
    if (Object.is(value, target)) {
      return true;
    }

    if (typeof value === "object" && value != null) {
      if (contains(value, target)) return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;

// npm test contains.spec.js
