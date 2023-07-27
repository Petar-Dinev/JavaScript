const { expect } = require("chai");
const carService = require("./03. Car Service_Resources.js");

describe("carService tests", function () {
  describe("isItExpensive tests", function () {
    it("should return correct string with correct arg", () => {
      expect(carService.isItExpensive("Engine")).to.be.equal(
        `The issue with the car is more severe and it will cost more money`
      );
      expect(carService.isItExpensive("Transmission")).to.be.equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it("should return correct string with invalid arg", () => {
      expect(carService.isItExpensive("a")).to.be.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });
  describe("discount tests", function () {
    it("should throw error with no number args", () => {
      expect(() => carService.discount("a", 1)).to.throw("Invalid input");
      expect(() => carService.discount(1, "a")).to.throw("Invalid input");
      expect(() => carService.discount("a", "b")).to.throw("Invalid input");
    });
    it("should return correct string with correct first arg", () => {
      expect(carService.discount(1, 1)).to.be.equal(
        "You cannot apply a discount"
      );
      expect(carService.discount(2, 1)).to.be.equal(
        "You cannot apply a discount"
      );
    });
    it("should return correct string with correct first arg", () => {
      expect(carService.discount(3, 10)).to.be.equal(
        `Discount applied! You saved 1.5$`
      );
      expect(carService.discount(7, 10)).to.be.equal(
        `Discount applied! You saved 1.5$`
      );
      expect(carService.discount(8, 10)).to.be.equal(
        `Discount applied! You saved 3$`
      );
    });
  });
  describe("partsToBuy tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => carService.partsToBuy("a", [])).to.throw("Invalid input");
      expect(() => carService.partsToBuy([], "a")).to.throw("Invalid input");
      expect(() => carService.partsToBuy("a", "b")).to.throw("Invalid input");
    });
    it('should return zero with empty string first arg', () => {
        expect(carService.partsToBuy([], ['a', 'b', 'c'])).to.be.equal(0)
    })
    it('should return correct value with valid input', () => {
        let partsCatalog = [{part: 'a', price: 1}, {part: 'b', price: 2}, {part: 'c', price: 3}]
        expect(carService.partsToBuy(partsCatalog, ['a', 'b'])).to.be.equal(3)
        expect(carService.partsToBuy(partsCatalog, ['a', 'c'])).to.be.equal(4)
    })
  });
});
