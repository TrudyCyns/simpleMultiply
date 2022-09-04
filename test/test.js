const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiplication', () => {
  it('Multiplication of 1 test', () => {
    assert.equal(multiply(1, 1), 1);
  });
  it('Multiplication of 2 test', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('Multiplication of 3 test', () => {
    assert.equal(multiply(3, 3), 9);
  });
  it('Multiplication of 4 test', () => {
    assert.equal(multiply(4, 4), 16);
  });
  it('Multiplication of 23 and 45 test', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
