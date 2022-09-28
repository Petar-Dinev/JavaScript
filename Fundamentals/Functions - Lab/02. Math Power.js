function mathPower(num, power) {
    let sum = num;
    for(let i = 1; i < power; i++) {
      sum *= num;
    }
    console.log(sum);
}

mathPower(5, 2)