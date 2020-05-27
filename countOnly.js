const assertEqual = function(actual, expected) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  if (actual === expected)
    console.log(`${PS1} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${PS2} Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  let value = 0;
  for (const item in itemsToCount) {
    if (itemsToCount[item] === true) {
      value = howMany(allItems, item);
      if (value > 0)
        result[item] = value;
      else
        result[item] = undefined;
    }
  }
  return result;
};

const howMany = function(list,value) {
  let count = 0;
  for (let i of list) {
    if (i === value)
      count ++;
  }
  return count;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);