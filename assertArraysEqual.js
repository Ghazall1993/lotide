const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual , expected) {
  const successMsg = `✅ Assertion Passed! ${actual}  ===  ${expected}`;
  const errorMsg = `🛑 Assertion Failed! ${actual}  !==  ${expected}`
  console.log(eqArrays(actual,expected) ? successMsg : errorMsg)
};

module.exports = assertArraysEqual;