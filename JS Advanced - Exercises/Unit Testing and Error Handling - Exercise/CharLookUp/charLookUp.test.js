let { expect } = require("chai");
let { lookupChar } = require("../03. Char Lookup");

describe("test lookupChar functionality", () => {
  it("should return undefined with no string first param", () => {
    expect(lookupChar(5, 5)).to.be.undefined;
  });
  it("should return undefined if second param is not intiger", () => {
    expect(lookupChar("Pesho", "hi")).to.be.undefined;
  });
  it("should return undefined if second param is float point", () => {
    expect(lookupChar("Pesho", 0.1)).to.be.undefined;
  });
  it("check value with index bigger from string length", () => {
    expect(lookupChar("Pesho", 10)).to.equal("Incorrect index");
  });
  it("check value with negative index", () => {
    expect(lookupChar("Pesho", -10)).to.equal("Incorrect index");
  });
  it("check value with valid params", () => {
    expect(lookupChar("Pesho", 1)).to.equal("e");
  });
});
