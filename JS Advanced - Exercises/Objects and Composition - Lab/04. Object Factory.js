function factory(library, orders) {
  let res = [];

  for (let order of orders) {
    let { template, parts } = order;
    let obj = {
      name: template.name,
    };
    for (let i = 0; i < parts.length; i++) {
      obj[parts[i]] = library[parts[i]];
    }
    res.push(obj);
  }
  return res;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];
const products = factory(library, orders);
// console.log(products);
