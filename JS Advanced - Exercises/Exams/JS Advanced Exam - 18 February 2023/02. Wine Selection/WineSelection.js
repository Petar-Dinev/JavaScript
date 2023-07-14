class WineSelection {
  wines = [];
  bill = 0;

  constructor(space) {
    this.space = space;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error("Not enough space in the cellar.");
    }

    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false,
    });

    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    let wine = this.wines.find((x) => x.wineName === wineName);
    if (!wine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (wine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    } else {
      wine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }
  }

  openBottle(wineName) {
    let wine = this.wines.find((x) => x.wineName === wineName);
    if (!wine) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (!wine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    let index = this.wines.indexOf(wine);
    this.wines.splice(index, 1);
    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    if (!wineType) {
      let result = [
        `You have space for ${this.space - this.wines.length} bottles more.`,
        `You paid ${this.bill}$ for the wine.`,
      ];
      let sortedWines = this.wines.sort((a, b) =>
        a.wineName.localeCompare(b.wineName)
      );
      for (let wine of sortedWines) {
        result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
      }
      return result.join("\n");
    }
    let wine = this.wines.find((x) => (x.wineType = wineType));
    if (!wine) {
      throw new Error(`There is no ${wineType} in the cellar.`);
    }
    return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`;
  }
}

const selection = new WineSelection(2);
selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
selection.payWineBottle("Sauvignon Blanc Marlborough", 50);
console.log(selection.openBottle("Sauvignon Blanc Marlborough"));
console.log(selection.openBottle("Cabernet Sauvignon Napa Valley"));
