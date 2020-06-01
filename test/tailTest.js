const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [0,3] for [10, 0, 3]", () => {
    assert.deepEqual(tail([10, 0, 3]), [0, 3]);
  });
});