function createSortedList() {
  function getSize(arr) {
    return arr.length;
  }
  return {
    nums: [],
    size: 0,
    add: function add(num) {
      this.nums.push(num);
      this.size++
      if (this.nums.length > 1) {
        this.nums = this.nums.sort((a, b) => a - b);
      }
    },
    get: function get(index) {
      if (index >= 0 && index < this.nums.length) {
        return this.nums[index];
      }
    },
    remove: function remove(index) {
      if (index >= 0 && index < this.nums.length) {
        this.size--;
        this.nums.splice(index, 1);
      }
    },
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
console.log(list);
list.remove(1);
console.log(list.get(1));
console.log(list);
console.log(list.size);
