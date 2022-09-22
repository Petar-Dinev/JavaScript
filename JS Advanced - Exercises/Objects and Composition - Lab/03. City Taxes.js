function cityTaxes(name, population, treasury) {
  let result = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function collectTaxes() {
      return (this.treasury += this.population * this.taxRate);
    },
    applyGrowth: function applyGrowth(percent) {
      return (this.population += (this.population * percent) / 100);
    },
    applyRecession: function applyRecession(percent) {
      return (this.treasury -= (this.treasury * percent) / 100);
    },
  };

  return result;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
