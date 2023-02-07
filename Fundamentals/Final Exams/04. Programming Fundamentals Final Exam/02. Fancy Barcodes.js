function fancyBarcodes(input) {
  let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
  let counts = Number(input.shift());
  let nums = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  for (let i = 0; i < counts; i++) {
    let match = pattern.exec(input[i]);
    let productGroup = "";
    if (match == null) {
      console.log("Invalid barcode");
    } else {
      for (let char of match[1]) {
        if (nums[char] != undefined) {
          productGroup += char;
        }
      }
      if (productGroup) {
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log(`Product group: 00`);
      }
    }
  }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
