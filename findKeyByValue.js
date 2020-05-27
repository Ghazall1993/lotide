const assertEqual = function(actual, expected) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  if (actual === expected)
    console.log(`${PS1} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${PS2} Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj , value) {
  for (let item of Object.keys(obj)) {
    if (obj[item] === value)
      return item;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);