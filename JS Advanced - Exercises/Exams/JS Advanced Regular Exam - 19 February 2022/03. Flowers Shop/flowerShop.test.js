const flowerShop = require("./flowerShop");
const { expect } = require("chai");

describe("FlowerShop tests", function () {
  describe("calcPriceOfFlowers tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => flowerShop.calcPriceOfFlowers(0, 1, 2)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers("a", "1", 2)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers("a", 1, "2")).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(0, "1", "2")).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(0, "1", 2)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(0, 1, "2")).to.Throw(
        "Invalid input!"
      );
    });
    it("should return correct result with correct input", () => {
      expect(flowerShop.calcPriceOfFlowers("a", 1, 2)).to.be.equal(
        "You need $2.00 to buy a!"
      );
    });
  });
  describe("checkFlowersAvailable tests", function () {
    it("Return correct string if flower is in stock", () => {
      expect(
        flowerShop.checkFlowersAvailable("a", ["a", "b", "c"])
      ).to.be.equal(`The a are available!`);
    });
    it("Return correct string if flower is not in stock", () => {
      expect(flowerShop.checkFlowersAvailable("c", ["a", "b"])).to.be.equal(
        `The c are sold! You need to purchase more!`
      );
    });
  });

  describe("sellFlowers tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => flowerShop.calcPriceOfFlowers("a", 0)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(0, 1)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(["a", "b"], -1)).to.Throw(
        "Invalid input!"
      );
      expect(() => flowerShop.calcPriceOfFlowers(["a", "b"], 2)).to.Throw(
        "Invalid input!"
      );
    });
    it("should return correct array woth valids params", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.be.equal(
        "Rose / Lily"
      );
    });
  });
});
