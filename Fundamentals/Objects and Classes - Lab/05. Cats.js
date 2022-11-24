function cats(array) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let catInfo of array) {
    let [name, age] = catInfo.split(" ");
    cats.push(new Cat(name, age));
  }

  for (let cat of cats) {
    cat.meow(cat);
  }
}
