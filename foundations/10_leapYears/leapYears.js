const leapYears = function (year) {
  const divisbleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  const divisbleBy400 = year % 400 === 0;

  return divisbleBy4 && (!divisibleBy100 || divisbleBy400);
};

// Do not edit below this line
module.exports = leapYears;
