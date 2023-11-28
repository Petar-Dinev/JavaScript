const { expect } = require("chai");
const lottery = require("./Lottery");

describe("lottery tests", function () {
  describe("buyLotteryTicket tests", function () {
    it("Should throw error with invalid input", () => {
      expect(() => lottery.buyLotteryTicket("a", "b", "c")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, "b", "c")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket("a", 1, "c")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, 2, "c")).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket("a", "b", true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, "b", true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket("a", 1, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw(
        "Invalid input!"
      );
      expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw(
        "Invalid input!"
      );
    });

    it("Should throw error with false value at 3rd param", () => {
      expect(() => lottery.buyLotteryTicket(1, 2, false)).to.throw(
        "Unable to buy lottery ticket!"
      );
    });
    it("Should return profit of tickets sell with valid input", () => {
      expect(lottery.buyLotteryTicket(1, 1, true)).to.be.equal(
        "You bought 1 tickets for 1$."
      );
      expect(lottery.buyLotteryTicket(1, 2, true)).to.be.equal(
        "You bought 2 tickets for 2$."
      );
    });
  });

  describe("checkTicket tests", function () {
    it("Should throw error with invalid input", () => {
      expect(() => lottery.checkTicket("a", "b")).to.throw("Invalid input!");
      expect(() => lottery.checkTicket(1, 2)).to.throw("Invalid input!");
      expect(() => lottery.checkTicket("a", 1)).to.throw("Invalid input!");
      expect(() => lottery.checkTicket(1, "a")).to.throw("Invalid input!");
      expect(() => lottery.checkTicket([1], [1, 2])).to.throw("Invalid input!");
      expect(() => lottery.checkTicket([1, 2, 3], [1, 2])).to.throw(
        "Invalid input!"
      );
    });

    it("Should return correct result with correct input", () => {
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])
      ).to.be.equal("Congratulations you win, check your reward!");
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 8])
      ).to.be.equal("Congratulations you win, check your reward!");
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])
      ).to.be.equal("Congratulations you win, check your reward!");
      expect(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
      ).to.be.equal("You win the JACKPOT!!!");
    });
  });

  describe("secondChance tests", function () {
    it("Should throw error with invalid input", () => {
      expect(() => lottery.secondChance(1, 2)).to.throw("Invalid input!");
      expect(() => lottery.secondChance("1", 2)).to.throw("Invalid input!");
      expect(() => lottery.secondChance("1", [])).to.throw("Invalid input!");
    });
    it("Should throw error with invalid input", () => {
      expect(lottery.secondChance(1, [1, 2, 3])).to.be.equal(
        "You win our second chance prize!"
      );
      expect(lottery.secondChance(4, [1, 2, 3])).to.be.equal(
        "Sorry, your ticket didn't win!"
      );
    });
  });
});
