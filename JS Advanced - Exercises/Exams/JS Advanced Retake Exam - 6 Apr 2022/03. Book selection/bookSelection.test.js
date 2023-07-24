const { expect } = require("chai");
const bookSelection = require("./bookSelection.js");

describe("bookSelection tests", function () {
  describe("isGenreSuitable tests", function () {
    it("should return correct string with inCorrect age", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
      expect(bookSelection.isGenreSuitable("Thriller", 11)).to.be.equal(
        "Books with Thriller genre are not suitable for kids at 11 age"
      );
      expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.equal(
        "Books with Horror genre are not suitable for kids at 12 age"
      );
      expect(bookSelection.isGenreSuitable("Horror", 11)).to.be.equal(
        "Books with Horror genre are not suitable for kids at 11 age"
      );
    });
    it("should return correct string with correct value", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.be.equal(
        "Those books are suitable"
      );
      expect(bookSelection.isGenreSuitable("Horror", 13)).to.be.equal(
        "Those books are suitable"
      );
    });
  });
  describe("isItAffordable  tests", function () {
    it("should return correct value with correct arguments", () => {
      expect(bookSelection.isItAffordable(2, 1)).to.be.equal(
        "You don't have enough money"
      );
      expect(bookSelection.isItAffordable(1, 1)).to.be.equal(
        `Book bought. You have 0$ left`
      );
      expect(bookSelection.isItAffordable(1, 2)).to.be.equal(
        `Book bought. You have 1$ left`
      );
    });
    it("should throw error with invalid input", () => {
      expect(() => bookSelection.isItAffordable("1", 1)).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.isItAffordable(1, "1")).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.isItAffordable("a", "b")).to.throw(
        "Invalid input"
      );
    });
  });

  describe("suitableTitles tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => bookSelection.suitableTitles("1", "1")).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.suitableTitles([], 1)).to.throw(
        "Invalid input"
      );
      expect(() => bookSelection.suitableTitles(1, 1)).to.throw(
        "Invalid input"
      );
    });
    it('should return correct value with correct input', () => {
        expect(bookSelection.suitableTitles([{title: "a", genre: 'Thriller'}, {title: 'b', genre: 'Horror'}], 'Thriller')).to.deep.equal(["a"])
        expect(bookSelection.suitableTitles([{title: "a", genre: 'Thriller'}, {title: 'b', genre: 'Horror'}], 'Horror')).to.deep.equal(["b"])
    })
  });
});
