function fishTank(input) {
    const length = Number(input[0]);
    const width = Number(input[1]);
    const hight = Number(input[2]);
    const precent = Number(input[3]) / 100;
    const aquariamTank = length * width * hight;
    const liters = aquariamTank / 1000;
    const litersNeeded = liters * (1-precent); 

    console.log(litersNeeded);
}
fishTank(["85 ","75 ","47 ","17 "])