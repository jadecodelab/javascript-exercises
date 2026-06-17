const findTheOldest = function (people) {
  const currYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const oldestAge = (oldest.yearOfDeath || currYear) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath || currYear) - person.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
