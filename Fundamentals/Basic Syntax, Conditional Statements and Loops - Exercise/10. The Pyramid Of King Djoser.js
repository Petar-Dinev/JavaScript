function thePyramidOfKingDjoser(baseWidth, increment) {
  let pyramidWidth = baseWidth;
  let stoneNeeded = 0;
  let marbleNeeded = 0;
  let lapisNeeded = 0;
  let goldNeedded = 0;
  let pyramidHeight = 0;
  let pyramidLevel = 0;

  while (pyramidWidth > 2) {
    pyramidHeight += increment;
    pyramidLevel++;
    let currentLevelMaterials = pyramidWidth * pyramidWidth;
    let outerLayerMaterials = pyramidWidth * 2 + (pyramidWidth - 2) * 2;
    let insideLayer = currentLevelMaterials - outerLayerMaterials;
    stoneNeeded += insideLayer;
    if (pyramidLevel % 5 == 0) {
      lapisNeeded += outerLayerMaterials;
    } else {
      marbleNeeded += outerLayerMaterials;
    }
    pyramidWidth -= 2;
  }
  goldNeedded += pyramidWidth * pyramidWidth;
  pyramidHeight += increment;

  console.log(`Stone required: ${Math.ceil(stoneNeeded * increment)}`);
  console.log(`Marble required: ${Math.ceil(marbleNeeded * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded * increment)}`);
  console.log(`Gold required: ${Math.ceil(goldNeedded * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);

}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1)
