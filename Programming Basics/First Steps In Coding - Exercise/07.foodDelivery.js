function foodDelivery(input) {
    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const vegeterianMenu = 8.15;
    let desert = 0.2;
    const costDelivery = 2.5;

    const numChickenMenu = Number(input[0]);
    const numFishMenu = Number(input[1]);
    const numVegeterianMenu = Number(input[2]);
    let chickenMenuCost = chickenMenu * numChickenMenu;
    let fishMenuCost = fishMenu * numFishMenu;
    let vegeterianMenuCost = vegeterianMenu * numVegeterianMenu;
    let totalCostForMenus = chickenMenuCost + fishMenuCost + vegeterianMenuCost;
    let desertCost = totalCostForMenus * desert;
    let totalCost = totalCostForMenus + desertCost + costDelivery;

    console.log(totalCost);
}

foodDelivery(["9 ","2 ","6 "])