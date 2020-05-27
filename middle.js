const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

const assertArraysEqual = function(a , b) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqArrays(a,b);
  return (equal ? console.log(`${PS1} Assertion Passed!`) : console.log(`${PS2} Assertion Failed!`));
};

// ACTUAL FUNCTION
const middle = function(array) {
  const len = array.length;
  const middleLen = len / 2;
  if (len === 0 || len === 1)
    return [];
  else {
    if (len % 2 === 0)
      return ([array[middleLen - 1],array[middleLen]]);
    else
      return ([array[Math.floor(middleLen)]]);
  }
};

// test
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);