class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }
    this.warehouseSpace -= spaceRequired;
    this.products.push({ product, quantity });
    return `The ${product} has been successfully delivered in the warehouse.`;
  }
  quantityCheck(product, minimalQuantity) {
    let searchProduct = this.products.find((x) => x.product == product);
    if (searchProduct === undefined) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minimalQuantity <= searchProduct.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      return `You added ${
        minimalQuantity - searchProduct.quantity
      } more from the ${product} products.`;
    }
  }
  sellProduct(product) {
    let searchProduct = this.products.find((x) => x.product == product);
    if (searchProduct === undefined) {
      throw new Error(`There is no ${product} in the warehouse.`);
    } else {
		searchProduct.quantity -= 1;
      let sellProduct = this.sales.find((x) => x.product === product);
      if (sellProduct === undefined) {
        this.sales.push({ product, quantity: 1 });
      } else {
        sellProduct.quantity++;
      }
      return `The ${product} has been successfully sold.`;
    }
  }

  revision() {
	if(this.sales.length == 0) {
		throw new Error("There are no sales today!")
	} else {
		let result = [];
		this.products.forEach(x => {
			result.push(`${x.product}-${x.quantity} more left`)
		})
		return [`You sold ${this.sales.length} products today!`,
		"Products in the warehouse:"
	].concat(result).join('\n')
	}
  }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



