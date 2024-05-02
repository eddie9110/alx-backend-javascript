const mocha = require("mocha");
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", () => {
    it('checking rounded sum of ints', function() {
      assert.strictEqual(calculateNumber("SUM", 1, 5), 6);
    });

    it('checking rounded float sum', function() {
      assert.strictEqual(calculateNumber("SUM", 1.3, 2.1), 3);
    });

    it('checking rounded subtraction', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 4.7, 2.8), 2);
    });

    it('checking rounded int division', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 2), 3);
    });

    it('checking zero division', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2, 0), "Error");
    });

    it('checking rounded division', () => { 
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });
});
