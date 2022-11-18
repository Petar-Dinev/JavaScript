function harvest(input) {
    
    let vineYardSize = Number(input[0]);
    let grapesFromSquareMeter = Number(input[1]);
    let wineLitresNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapesColect = grapesFromSquareMeter * vineYardSize;
    let grapesForWine = totalGrapesColect * 0.4;
    let totalWineMade = grapesForWine / 2.5;

    if(totalWineMade < wineLitresNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(wineLitresNeeded - totalWineMade)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineMade)} liters.`);
        let wineLeft = Math.ceil(totalWineMade - wineLitresNeeded);
        let winePerWorker = Math.ceil(wineLeft / workersCount);
        console.log(`${wineLeft} liters left -> ${winePerWorker} liters per person.`);
    }
 
}

harvest(["650", "2", "175", "3"])