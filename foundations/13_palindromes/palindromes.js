const palindromes = function (string) {
  const cleanStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
