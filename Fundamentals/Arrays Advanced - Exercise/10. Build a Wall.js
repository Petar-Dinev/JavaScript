function buildAWall(nums) {
   let readyWall = nums.filter(x => x == 30);
   let res = [];
   let sum = 0;

   while(readyWall.length != nums.length) {
    let currentUnDoneWalls = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 30) {
            nums[i]++;
            currentUnDoneWalls++;
        }
    }
    res.push(currentUnDoneWalls * 195);
    sum += currentUnDoneWalls * 195
    readyWall = nums.filter(x => x == 30);
   }

   console.log(res.join(", "));
   console.log(sum * 1900 + ' pesos');
}

buildAWall([21, 25, 28])
