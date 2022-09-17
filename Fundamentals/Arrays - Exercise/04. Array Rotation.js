function arrayRotation(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let curentNum = arr.shift();
    arr.push(curentNum);
  }
  console.log(arr);
}

arrayRotation([51, 47, 32, 61, 21], 2);
