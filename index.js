const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map   = require('./map');
const without   = require('./without');
const letterPositions   = require('./letterPositions');
const countOnly   = require('./countOnly');
const countLetters   = require('./countLetters');
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const findKeyByValue = require('./findKeyByValue')
const eqObjects = require('./eqObjects')
const takeUntil = require('./takeUntil')
const findKey = require('./findKey')


module.exports = {
  head,
  tail,
  middle,
  map,
  letterPositions,
  countOnly,
  countLetters,
  eqObjects,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  without,
  findKeyByValue,
  findKey,
  takeUntil
};