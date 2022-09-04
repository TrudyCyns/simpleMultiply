const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiplication', () => {
  it('Multiplication of 1 test', () => {
    assert.equal(multiply(1, 1), 1);
  });
  it('Multiplication of 2 test', () => {
    assert.equal(multiply(2, 2), 4);
  });
});
