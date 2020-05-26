const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

const assertArraysEqual = function(a , b) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqArrays(a,b);
  return (equal ? console.log(`${PS1} Assertion Passed!`) : console.log(`${PS2} Assertion Failed!`));
};

const without = function(source , itemsToRemove) {
  let res = [];
  for (let item of source) {
    if (! itemsToRemove.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
