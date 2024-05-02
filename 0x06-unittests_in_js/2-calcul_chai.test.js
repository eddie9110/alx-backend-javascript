const mocha = require("mocha");
const chai = require('chai');
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("SUM", function() {
    it("checking rounded sum of ints", () => {
      chai.expect(calculateNumber("SUM", 1, 5)).to.equal(6);
    });
    it("Checking rounded float sum", () => {
      chai.expect(calculateNumber("SUM", 1.3, 2.1)).to.equal(3);
    });
  });

  describe("SUBTRACT", () => {
    it("checking if numbers round", () => {
      chai.expect(calculateNumber("SUBTRACT", 4.7, 2.8)).to.equal(2);
    });

    it("checking if numbers round", () => {
      chai.expect(calculateNumber("SUBTRACT", -4.7, -2.8)).to.equal(-2);
    });
  });

  describe("DIVIDE", () => {
    it("checking if numbers round", () => {
	    chai.expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });

    it("checking if numbers round", () => {
	    chai.expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
	  });

    it("checking if numbers round", () => {
      chai.expect(calculateNumber("DIVIDE", 2, 0)).to.equal("Error");
    });
  });
});
