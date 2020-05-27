const assertEqual = function(actual, expected) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  if (actual === expected)
    console.log(`${PS1} Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`${PS2} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let res = {};
  for (let letter of sentence) {
    if (letter !== ' ')
      res[letter] = count(sentence,letter);
  }
  return res;
};

const count  = function(sentence,letter) {
  let res = 0;
  for (let i of sentence) {
    if (i === letter)
      res ++;
  }
  return res;
};