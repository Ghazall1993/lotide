// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  if (actual === expected)
    console.log(`${PS1} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${PS2} Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("lighthouse", "lighthouse");
assertEqual(10, 1);