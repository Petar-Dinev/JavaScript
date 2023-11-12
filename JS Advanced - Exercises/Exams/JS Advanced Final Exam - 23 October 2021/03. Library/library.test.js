const { expect } = require("chai");
const library = require("./library");

describe("Library tests", function () {
  describe("calcPriceOfBook tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => library.calcPriceOfBook(1, "a")).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook(1, 2)).to.throw("Invalid input");
      expect(() => library.calcPriceOfBook("a", "b")).to.throw("Invalid input");
    });
    it("should return correct value with correct input", () => {
      expect(library.calcPriceOfBook("a", 1979)).to.be.equal(
        `Price of a is 10.00`
      );
      expect(library.calcPriceOfBook("a", 1980)).to.be.equal(
        `Price of a is 10.00`
      );
      expect(library.calcPriceOfBook("a", 1981)).to.be.equal(
        `Price of a is 20.00`
      );
    });
  });

  describe("findBook tests", function () {
    it("should throw error with empty array for first param", () => {
      expect(() => library.findBook([], "a")).to.throw(
        "No books currently available"
      );
    });
    it("should return correct string with correct input", () => {
      expect(library.findBook(["a", "b", "c"], "a")).to.be.equal(
        "We found the book you want."
      );
      expect(library.findBook(["a", "b", "c"], "d")).to.be.equal(
        "The book you are looking for is not here!"
      );
    });
  });

  describe("arrangeTheBooks tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => library.arrangeTheBooks("a")).to.throw("Invalid input");
      expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
    });
    it("should return correct string with correct input", () => {
      expect(library.arrangeTheBooks(39)).to.be.equal(
        "Great job, the books are arranged."
      );
      expect(library.arrangeTheBooks(40)).to.be.equal(
        "Great job, the books are arranged."
      );
      expect(library.arrangeTheBooks(41)).to.be.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
