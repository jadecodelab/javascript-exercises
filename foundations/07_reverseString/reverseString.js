const reverseString = function (string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString.concat(string[i]);
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
