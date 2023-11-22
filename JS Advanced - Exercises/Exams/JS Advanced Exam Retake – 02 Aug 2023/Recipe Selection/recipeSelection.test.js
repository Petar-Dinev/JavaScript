const { expect } = require("chai");
const recipeSelection = require("./recipeSelection");


describe("recipeSelection tests", function () {
  describe("isTypeSuitable tests", function () {
    it("throw error with invalid input", () => {
      expect(() => recipeSelection.isTypeSuitable(1, "a")).to.throw(
        "Invalid input"
      );

      expect(() => recipeSelection.isTypeSuitable(1, 2)).to.throw(
        "Invalid input"
      );

      expect(() => recipeSelection.isTypeSuitable("a", 1)).to.throw(
        "Invalid input"
      );
    });
    it("should return correct value with correct input", () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.be.equal(
        "This recipe is not suitable for vegetarians"
      );
      expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.be.equal(
        "This recipe is not suitable for vegans"
      );

      expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.be.equal(
        "This recipe is not suitable for vegans"
      );

      expect(recipeSelection.isTypeSuitable("a", "b")).to.be.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });
  });

  describe("isItAffordable tests", function () {
    it("should throw error with ivalid input", () => {
      expect(() => recipeSelection.isItAffordable("a", 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable("a", "b")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable(1, "a")).to.throw(
        "Invalid input"
      );
    });
    it("should return correct result with correct input", () => {
      expect(recipeSelection.isItAffordable(2, 1)).to.be.equal(
        "You don't have enough budget to afford this recipe"
      );
      expect(recipeSelection.isItAffordable(1, 1)).to.be.equal(
        "Recipe ingredients bought. You have 0$ left"
      );
      expect(recipeSelection.isItAffordable(1, 2)).to.be.equal(
        "Recipe ingredients bought. You have 1$ left"
      );
    });
  });

  describe("getRecipesByCategory tests", function () {
    let recipes = [
      { title: "a", category: "d" },
      { title: "b", category: "d" },
      { title: "c", category: "e" },
    ];
    it("should throw error with invalid input", () => {
      expect(() => recipeSelection.getRecipesByCategory("a", 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory([], 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory("a", "b")).to.throw(
        "Invalid input"
      );
    });
    it("should return correct result with valid input", () => {
      expect(
        recipeSelection.getRecipesByCategory(recipes, "d")
      ).to.be.deep.equal(["a", "b"]);
    });
  });
});
