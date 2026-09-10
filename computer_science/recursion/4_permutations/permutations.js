const insertIntoArray = function (array, position, value) {
  return [...array.slice(0, position), value, ...array.slice(position)];
};

const permutations = function (array) {
  if (array.length === 0) return [[]];

  const firstElement = array[0];
  const rest = array.slice(1);

  // calculate recursively each permutation of all elements except the first
  const prevPermutations = permutations(rest);
  const newPermutations = [];

  // for each prevPermutations, make newPermutation
  // by inserting first element into every position
  for (const permutation of prevPermutations) {
    for (let i = 0; i <= permutation.length; i++) {
      const newPermutation = insertIntoArray(permutation, i, firstElement);
      newPermutations.push(newPermutation);
    }
  }

  return newPermutations;
};

// Do not edit below this line
module.exports = permutations;

//npm test permutations.spec.js
