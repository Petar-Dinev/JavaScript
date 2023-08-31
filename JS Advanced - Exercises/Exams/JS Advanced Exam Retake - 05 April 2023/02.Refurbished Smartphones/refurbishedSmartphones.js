class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (!model || storage < 0 || price < 0 || !condition) {
      throw new Error("Invalid smartphone!");
    }
    this.availableSmartphones.push({ model, storage, price, condition });
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }

  sellSmartphone(model, desiredStorage) {
    const phone = this.availableSmartphones.find((p) => p.model == model);
    if (!phone) {
      throw new Error(`${model} was not found!`);
    }

    let price = 0;
    if (phone.storage >= desiredStorage) {
      price = phone.price;
    } else if (desiredStorage - phone.storage <= 128) {
      price = phone.price * 0.9;
    } else if (desiredStorage - phone.storage > 128) {
      price = phone.price * 0.8;
    }
    const index = this.availableSmartphones.indexOf(phone)
    this.availableSmartphones.splice(index, 1)
    this.soldSmartphones.push({model: phone.model, storage: phone.storage, soldPrice: price})
    this.revenue += price;
    return `${model} was sold for ${price.toFixed(2)}$`
  }

  upgradePhones () {
     if(this.availableSmartphones.length == 0) {
        throw new Error("There are no available smartphones!")
     }
     this.availableSmartphones.map(phone => {
        phone.storage *= 2;
     })
     let result = ['Upgraded Smartphones:']
     this.availableSmartphones.map(x => result.push(`${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`))
     return result.join('\n')
  }

  salesJournal (criteria) {
    let result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:`];
    if(criteria == 'storage') {
      this.soldSmartphones.sort((a, b) => b.storage - a.storage)
    } else if( criteria == 'model') {
      this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model))
    } else {
        throw new Error("Invalid criteria!")
    }
    this.soldSmartphones.map(x => result.push(`${x.model} / ${x.storage} GB / ${x.soldPrice.toFixed(2)}$`))

    return result.join('\n')
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));




// SecondLife Devices has a total income of 1297.00$
// 2 smartphones sold:
// Samsung S20 Ultra / 256 GB / 1000.00$
// Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$

