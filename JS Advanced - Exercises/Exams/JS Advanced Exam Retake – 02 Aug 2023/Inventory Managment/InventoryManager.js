class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    if (this.capacity <= 0) {
      throw new Error("The inventory is already full.");
    }
    const item = this.items.find((i) => i.itemName == itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
      this.capacity -= 1;
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    const item = this.items.find((i) => i.itemName == itemName);
    if (!item) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }
    if (quantity > item.quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }
    item.quantity -= quantity;
    if (item.quantity == 0) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      this.outOfStock.push(itemName);
      this.capacity += 1;
    }
    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
    const item = this.items.find((i) => i.itemName == itemName);
    if (item) {
      item.quantity += quantity;
      // } else if (!item && this.capacity > 0) {
    } else {
      this.items.push({ itemName, quantity });
      this.capacity -= 1;
      if (this.outOfStock.includes(itemName)) {
        const index = this.outOfStock.indexOf(itemName);
        this.outOfStock.splice(index, 1);
      }
    }
    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    const result = ["Current Inventory:"];
    this.items.forEach(({ itemName, quantity }) =>
      result.push(`${itemName}: ${quantity}`)
    );
    if (this.outOfStock.length > 0) {
      result.push(`Out of Stock: ${this.outOfStock.join(", ")}`);
    }
    return result.join("\n");
  }
}
