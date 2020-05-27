const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length)
    return false;
  else {
    for (let value of keys1) {
      if (! eqArrays(object1[value], object2[value]))
        return false;
      if (Array.isArray(object1[value]) !== Array.isArray(object2[value])) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual , expected) {
  const inspect = require('util').inspect;
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqObjects(actual,expected);
  return (equal ? console.log(`${PS1} Assertion Passed! Example label: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`${PS2} Assertion Failed! Example label: ${inspect(actual)} !== ${inspect(expected)}`));
};

const cd = { c: "1", d: ["2", 4] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd,dc);
