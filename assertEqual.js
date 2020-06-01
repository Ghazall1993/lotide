// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const assertionPassedMessage = `✅ Assertion Passed: ${actual} === ${expected}`;
  const assertionFailedMessage = `🛑 Assertion Failed: ${actual} !== ${expected}`;

  console.log(actual === expected ? assertionPassedMessage : assertionFailedMessage);
};

module.exports = assertEqual;
