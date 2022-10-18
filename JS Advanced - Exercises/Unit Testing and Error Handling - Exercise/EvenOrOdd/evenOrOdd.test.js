let { expect } = require("chai");
let { isOddOrEven } = require("../02. Even Or Odd");

describe("test isOddOrEven functionality", () => {
  it("should return undefined with num param", () => {
    expect(isOddOrEven(n)).to.be.undefined;
  });
  it("should return undefined with array param", () => {
    expect(isOddOrEven([])).to.be.undefined;
  });
  if (
    ("should return undefined with obj param",
    () => {
      expect(isOddOrEven({})).to.be.undefined;
    })
  );

  it("should return odd with odd string param", () => {
    expect(isOddOrEven("Pesho")).to.equal("odd");
  });
  it("should return even with even sting param", () => {
    expect(isOddOrEven("Dari")).to.equal("even");
  });
});
