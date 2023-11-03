const {expect} = require('chai')
const weddingDay = require('./weddingDay.js')

describe("weddingDate tests", function () {
  describe("pickVenue method tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => weddingDay.pickVenue("a", 1, "c")).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.pickVenue("a", "b", 1)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.pickVenue(1, "b", "c")).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.pickVenue(1, 2, 3)).to.throw(
        "Invalid Information!"
      );
    });
    it("should throw error with wrong location", () => {
      expect(() => weddingDay.pickVenue(1, 2, "a")).to.throw(
        "The location of this venue is not in the correct area!"
      );
    });
    it("should return correct string with correct inputs", () => {
      expect(weddingDay.pickVenue(150, 120, "Varna")).to.be.equal(
        "This venue meets the requirements, with capacity of 150 guests and 120$ cover."
      );
      expect(weddingDay.pickVenue(150, 119, "Varna")).to.be.equal(
        "This venue meets the requirements, with capacity of 150 guests and 119$ cover."
      );
      expect(weddingDay.pickVenue(151, 120, "Varna")).to.be.equal(
        "This venue meets the requirements, with capacity of 151 guests and 120$ cover."
      );
      expect(weddingDay.pickVenue(151, 119, "Varna")).to.be.equal(
        "This venue meets the requirements, with capacity of 151 guests and 119$ cover."
      );
      expect(weddingDay.pickVenue(150, 121, "Varna")).to.be.equal(
        `This venue does not meet your requirements!`
      );
      expect(weddingDay.pickVenue(149, 120, "Varna")).to.be.equal(
        `This venue does not meet your requirements!`
      );
    });
  });

  describe("otherSpendings method tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => weddingDay.otherSpendings("a", "b", "c")).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.otherSpendings("a", "b", true)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.otherSpendings("a", [], true)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.otherSpendings([], "b", true)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.otherSpendings([], [], "c")).to.throw(
        "Invalid Information!"
      );
    });
    it("should return correct string with valid input", () => {
      expect(
        weddingDay.otherSpendings(["flowers"], ["pictures"], true)
      ).to.be.equal(
        "You spend 1020$ for wedding decoration and photography with 15% discount!"
      );
      expect(weddingDay.otherSpendings(["flowers"], ["video"], true)).to.be.equal(
        "You spend 1530$ for wedding decoration and photography with 15% discount!"
      );
      expect(weddingDay.otherSpendings(["Fabric drapes and curtains"], ["pictures"], true)
      ).to.be.equal(
        "You spend 935$ for wedding decoration and photography with 15% discount!"
      );
      expect(
        weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], true)
      ).to.be.equal(
        "You spend 1445$ for wedding decoration and photography with 15% discount!"
      );
      expect(
        weddingDay.otherSpendings(["flowers"], ["pictures"], false)
      ).to.be.equal("You spend 1200$ for wedding decoration and photography!");
      expect(weddingDay.otherSpendings(["flowers"], ["video"], false)).to.be.equal(
        "You spend 1800$ for wedding decoration and photography!"
      );
      expect(
        weddingDay.otherSpendings(
          ["Fabric drapes and curtains"],
          ["pictures"],
          false
        )
      ).to.be.equal("You spend 1100$ for wedding decoration and photography!");
      expect(
        weddingDay.otherSpendings(["Fabric drapes and curtains"], ["video"], false)
      ).to.be.equal("You spend 1700$ for wedding decoration and photography!");
    });
  });

  describe("tableDistribution method tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => weddingDay.tableDistribution("a", "b")).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.tableDistribution(1, "b")).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.tableDistribution("a", 1)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.tableDistribution(-1, 1)).to.throw(
        "Invalid Information!"
      );
      expect(() => weddingDay.tableDistribution(1, -1)).to.throw(
        "Invalid Information!"
      );
    });
    it("should return correct string with correct input", () => {
      expect(weddingDay.tableDistribution(10, 2)).to.be.equal(
        "There is only 5 people on every table, you can join some tables."
      );
      expect(weddingDay.tableDistribution(9, 2)).to.be.equal(
        "There is only 5 people on every table, you can join some tables."
      );
      expect(weddingDay.tableDistribution(6, 1)).to.be.equal(
        "You have 1 tables with 6 guests on table."
      );
      expect(weddingDay.tableDistribution(7, 1)).to.be.equal(
        "You have 1 tables with 7 guests on table."
      );
      expect(weddingDay.tableDistribution(15, 2)).to.be.equal(
        "You have 2 tables with 8 guests on table."
      );
    });
  });
});
