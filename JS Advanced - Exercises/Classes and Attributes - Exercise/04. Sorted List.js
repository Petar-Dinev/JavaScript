class List {
  constructor() {
    this.arr = [];
    this.size = this.arr.length;
  }

  add(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index >= 0 && index < this.arr.length) {
      this.arr.splice(index, 1);
      this.size--;
    } else {
      throw new Error("Invalid index");
    }
  }

  get(index) {
    if (index >= 0 && index < this.arr.length) {
      return this.arr[index];
    } else {
      throw new Error("Invalid index");
    }
  }
}
let myList = new List();

myList.add(5);
// expect(myList.get(0)).to.equal(5, "Element wasn't added");
console.log(myList.arr);

myList.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
console.log(myList.arr);

myList.remove(0);
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");
console.log(myList.arr);
console.log(myList.size);
