function housePainting(input) {
    const heightOnHouse = Number(input[0]);
    const sideWallLenght = Number(input[1]);
    const heightTriangleSideOnRoof = Number(input[2]);
    let areaOfWindowsOnSideWalls = 1.5 * 1.5;
    let areaOfSideWalls = 2 * (heightOnHouse * sideWallLenght) - 2 * areaOfWindowsOnSideWalls;
    let areaOfDoor = 1.2 * 2;
    let areaOfFrontAndBacksideWall = 2 * (heightOnHouse * heightOnHouse) - areaOfDoor;
    let areaOfRoof = 2 * (heightOnHouse * sideWallLenght) + 2 * (heightOnHouse * heightTriangleSideOnRoof / 2);
    let areaOfHouseWalls = areaOfSideWalls + areaOfFrontAndBacksideWall;
    let greenPaint = areaOfHouseWalls / 3.4;
    let redPaint = areaOfRoof / 4.3;
    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))
}

housePainting(["6", "10", "5.2"])