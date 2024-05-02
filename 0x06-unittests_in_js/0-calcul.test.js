const assert = require('assert');
const mocha = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('testing sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('testing sum of -ve and +ve', () => {
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('testing rounding of  floats', () => {
    assert.strictEqual(calculateNumber(1.2, '2.8'), 4);
  });

  it('checking rounding of -ve numbers', () => {
    assert.strictEqual(calculateNumber(-1.3, -1.2), -2);
  });
});
