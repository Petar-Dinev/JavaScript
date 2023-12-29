class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(input) {
    const [type, price] = input;
    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.budget -= price;
      this.products.push(type);
      return `You have successfully bought ${type}!`;
    }
  }

  recipes(recipe) {
    const { recipeName, productsList } = recipe;

    for (let product of productsList) {
      if (!this.products.includes(product)) {
        throw new Error("We do not have this product");
      }
    }
    this.dishes.push(recipe);
    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    if (!this.dishes.some((x) => x.recipeName == dish)) {
      throw new Error("We do not have this dish");
    }
    if (this.guests[name] != undefined) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    const result = [];
    for (let [name, dish] of Object.entries(this.guests)) {
      const recipe = this.dishes.find((x) => x.recipeName == dish);
      result.push(
        `${name} will eat ${dish}, which consists of ${recipe.productsList.join(
          ", "
        )}`
      );
    }
    return result.join("\n");
  }
}
