const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

const assertArraysEqual = function(a , b) {
  const PS1 = "✅ ";
  const PS2 = "🛑 ";
  const equal = eqArrays(a,b);
  return (equal ? console.log(`${PS1} Assertion Passed!`) : console.log(`${PS2} Assertion Failed!`));
};

const letterPositions = function(sentence) {
  let res = {};
  for (let letter of sentence) {
    if (letter !== ' ')
      res[letter] = positions(sentence,letter);
  }
  return res;
};

const positions  = function(sentence,letter) {
  let res = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter)
      res.push(i);
  }
  return res;
};

console.log(assertArraysEqual(letterPositions("hello").l, [2,3]));