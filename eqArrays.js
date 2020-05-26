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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS