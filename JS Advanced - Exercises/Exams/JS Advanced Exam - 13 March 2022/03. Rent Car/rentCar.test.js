const { expect } = require("chai");
const rentCar = require("./rentCar");

describe("rentCar tests", function () {
  describe("searchCar tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => rentCar.searchCar([], 1)).to.throw("Invalid input!");
        expect(() => rentCar.searchCar('a', 'a')).to.throw("Invalid input!")
        expect(() => rentCar.searchCar('a', 1)).to.throw("Invalid input!")
    });
    it("should return correct string with valid input", () => {
      expect(rentCar.searchCar(['a', 'b', 'b'], 'b')).to.be.equal(`There is 2 car of model b in the catalog!`)
      expect(rentCar.searchCar(["a", "b", "c"], "b")).to.be.equal(
        `There is 1 car of model b in the catalog!`
      );
      expect(() => rentCar.searchCar(["a", "b", "c"], "d")).to.throw(
        "There are no such models in the catalog!"
      );
    });
  });
  describe("calculatePriceOfCar tests", function () {
    it("should throw error wiht invalid inputs",  () =>{
        expect(() => rentCar.calculatePriceOfCar("a", "b")).to.throw("Invalid input!");
        expect(() => rentCar.calculatePriceOfCar(1, "a")).to.throw("Invalid input!");
        expect(() => rentCar.calculatePriceOfCar(1, 2)).to.throw("Invalid input!");
    });
    it('should return correct string with valid inputs', () => {
        expect(rentCar.calculatePriceOfCar('Audi', 1)).to.be.equal(`You choose Audi and it will cost $36!`)
        expect(rentCar.calculatePriceOfCar('Audi', 2)).to.be.equal(`You choose Audi and it will cost $72!`)
        expect(() => rentCar.calculatePriceOfCar('a', 1)).to.throw('No such model in the catalog!')
    })
  });
  describe("checkBudget tests", function () {
    it("should throw error with invalid input", () => {
      expect(() => rentCar.checkBudget("a", "b", "c")).to.throw(
        "Invalid input!"
      );
      expect(() => rentCar.checkBudget("a", "b", 1)).to.throw("Invalid input!");
      expect(() => rentCar.checkBudget("a", 1, 2)).to.throw("Invalid input!");
      expect(() => rentCar.checkBudget(1, 2, "c")).to.throw("Invalid input!");
      expect(() => rentCar.checkBudget(1, "a", 2)).to.throw("Invalid input!");
      expect(() => rentCar.checkBudget(1, "a", "b")).to.throw("Invalid input!");
    });
    it('should return correct string with valid inputs', () => {
        expect(rentCar.checkBudget(1, 2, 3)).to.be.equal(`You rent a car!`)
        expect(rentCar.checkBudget(1, 3, 3)).to.be.equal(`You rent a car!`)
        expect(rentCar.checkBudget(1, 2, 1)).to.be.equal('You need a bigger budget!')
    })
  });
});
