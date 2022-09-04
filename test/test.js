const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiplication', () => {
  it('Multiplication of 1 test', () => {
    assert.equal(multiply(2, 2), 4);
  });
});
