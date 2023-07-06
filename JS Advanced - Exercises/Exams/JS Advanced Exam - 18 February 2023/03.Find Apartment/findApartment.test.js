const { expect } = require("chai");
const findNewApartment = require("./findApartment.js");

describe("findNewApartment tests", function () {
  describe("isGoodLocation method tests", function () {
    it("should throw error with invalid arguments", () => {
      expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isGoodLocation("Plovdiv", 1)).to.throw(
        "Invalid input!"
      );
    });

    it("should return correct string with incorect first argument", () => {
      expect(findNewApartment.isGoodLocation("Petrich", true)).to.be.equal(
        "This location is not suitable for you."
      );
    });

    it("should return corect result with corect arguments", () => {
      expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.be.equal(
        "There is no public transport in area."
      );
      expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.be.equal(
        "You can go on home tour!"
      );
    });
  });

  describe("isLargeEnough method tests", function () {
    it("should throw error with invalid arguments", () => {
      expect(() => findNewApartment.isLargeEnough([], 1)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isLargeEnough("a", 1)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isLargeEnough([10, 20, 30], "a")).to.throw(
        "Invalid input!"
      );
    });

    it("should return corect result with valid params", () => {
      expect(findNewApartment.isLargeEnough([10, 20, 30, 40], 20)).to.be.equal(
        "20, 30, 40"
      );
    });
  });

  describe("isItAffordable method tests", function () {
    it("should throw error with invalid params", () => {
      expect(() => findNewApartment.isItAffordable("a", 1)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(1, "a")).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(0, 0)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(1, -1)).to.throw(
        "Invalid input!"
      );
      expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw(
        "Invalid input!"
      );
    });
    it("should return corect string with valid params", () => {
      expect(findNewApartment.isItAffordable(1, 2)).to.be.equal(
        "You can afford this home!" 
      );
      expect(findNewApartment.isItAffordable(2, 1)).to.be.equal(
        "You don't have enough money for this house!"
      );
    });
  });
});
