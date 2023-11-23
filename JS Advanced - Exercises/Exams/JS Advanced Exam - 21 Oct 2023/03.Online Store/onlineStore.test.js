const { expect } = require("chai");
const onlineStore = require("./onlineStore");

describe("onlineStore tests", function () {
  describe("isProductAvailable tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => onlineStore.isProductAvailable(1, "a")).to.throw(
        "Invalid input."
      );
    });
    it("should return correct string with valid input", function () {
      expect(onlineStore.isProductAvailable("a", 0)).to.be.equal(
        `Sorry, a is currently out of stock.`
      );
      expect(onlineStore.isProductAvailable("a", -1)).to.be.equal(
        `Sorry, a is currently out of stock.`
      );
      expect(onlineStore.isProductAvailable("a", 1)).to.be.equal(
        `Great! a is available for purchase.`
      );
    });
  });
  describe("canAffordProduct tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => onlineStore.canAffordProduct("a", "b")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct("a", 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct(1, "a")).to.throw(
        "Invalid input."
      );
    });
    it("should return correct string with valid input", function () {
      expect(onlineStore.canAffordProduct(2, 1)).to.be.equal(
        "You don't have sufficient funds to buy this product."
      );
      expect(onlineStore.canAffordProduct(1, 2)).to.be.equal(
        `Product purchased. Your remaining balance is $1.`
      );
      expect(onlineStore.canAffordProduct(1, 1)).to.be.equal(
        `Product purchased. Your remaining balance is $0.`
      );
    });
  });
  describe("getRecommendedProducts tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => onlineStore.getRecommendedProducts("a", "b")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts("a", 1)).to.throw(
        "Invalid input."
      );
      expect(() =>
        onlineStore.getRecommendedProducts([{ name: "a", category: "b" }], 1)
      ).to.throw("Invalid input.");
    });
    it("should return correct string with valid input", function () {
      expect(
        onlineStore.getRecommendedProducts(
          [
            { name: "a", category: "d" },
            { name: "b", category: "e" },
            { name: "c", category: "e" },
          ],
          "f"
        )
      ).to.be.equal(
        `Sorry, we currently have no recommended products in the d category.`
      );
      expect(
        onlineStore.getRecommendedProducts(
          [
            { name: "a", category: "f" },
            { name: "b", category: "f" },
            { name: "c", category: "d" },
          ],
          "f"
        )
      ).to.be.equal(`Recommended products in the f category: a, b`);
      expect(
        onlineStore.getRecommendedProducts(
          [
            { name: "a", category: "f" },
            { name: "b", category: "d" },
            { name: "c", category: "e" },
          ],
          "f"
        )
      ).to.be.equal(`Recommended products in the f category: a`);
    });
  });
});
