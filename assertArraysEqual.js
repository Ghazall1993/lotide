const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

const assertArraysEqual = function (a , b) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqArrays(a,b);
  return (equal ? console.log(`${PS1} Assertion Passed!`) : console.log(`${PS2} Assertion Failed!`));
};

assertArraysEqual ([2, 1, 3], [1, 2, 3]);