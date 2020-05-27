const assertEqual = function(actual, expected) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  if (actual === expected)
    console.log(`${PS1} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${PS2} Assertion Failed: ${actual} !== ${expected}`);
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(assertEqual(eqObjects(ab, ba),true));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc),true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2),false));