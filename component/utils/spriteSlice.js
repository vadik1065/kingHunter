function getCharacter(characterFrames, feature) {
  const COUNT_BIT_HEIGHT = 8;
  for (let i = 0; i < COUNT_BIT_HEIGHT; i++) {
    characterFrames[i] = new PIXI.Texture(
      feature,
      new PIXI.Rectangle(i * tileSize, 0, tileSize, tileSize * 2)
    );
  }
}

function getFrames(charFr, feature, cWidth, cHeight, fWidth, fHeight) {
  for (let i = 0; i < cWidth * cHeight; i++) {
    let x = i % cWidth;
    let y = Math.floor(i / cWidth);
    charFr[i] = new PIXI.Texture(
      feature,
      new PIXI.Rectangle(x * fWidth, y * fHeight, fWidth, fHeight)
    );
  }
}

function featureFillMatrix(featur, matrix, tileTextures) {
  let width = matrix.width;
  let height = matrix.height;
  let tiles = matrix.tiles;

  for (let y = 0; y < width; y++) {
    for (let x = 0; x < height; x++) {
      let tile = tiles[y * width + x];
      let sprite = new PIXI.Sprite(tileTextures[tile]);
      sprite.x = x * tileSize;
      sprite.y = y * tileSize;
      featur.addChild(sprite);
    }
  }
}
