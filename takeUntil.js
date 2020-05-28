const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (callback(element) === false)
      result.push(element);
    else
      return result;
  }
};

const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

const assertArraysEqual = function(a , b) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqArrays(a,b);
  return (equal ? console.log(`${PS1} Assertion Passed!`) : console.log(`${PS2} Assertion Failed!`));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);