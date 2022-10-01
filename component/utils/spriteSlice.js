function getLandsaft(tileTextures, texture) {
  const COUNT_BIT_WIDTH = 7;
  const COUNT_BIT_HEIGHT = 11;

  for (let i = 0; i < COUNT_BIT_WIDTH * COUNT_BIT_HEIGHT; i++) {
    let x = i % COUNT_BIT_WIDTH;
    let y = Math.floor(i / COUNT_BIT_WIDTH);
    tileTextures[i] = new PIXI.Texture(
      texture,
      new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
    );
  }
}

function getMonsters(tileTextures, texture) {
  const COUNT_BIT_WIDTH = 8;
  const COUNT_BIT_HEIGHT = 10;

  for (let i = 0; i < COUNT_BIT_WIDTH * COUNT_BIT_HEIGHT; i++) {
    let x = i % COUNT_BIT_WIDTH;
    let y = Math.floor(i / COUNT_BIT_WIDTH);
    tileTextures[i] = new PIXI.Texture(
      texture,
      new PIXI.Rectangle(
        x * tileSizeMonster,
        y * tileSizeMonster,
        tileSizeMonster,
        tileSizeMonster
      )
    );
  }
}

function getCharacter(characterFrames, feature) {
  const COUNT_BIT_HEIGHT = 8;
  for (let i = 0; i < COUNT_BIT_HEIGHT; i++) {
    characterFrames[i] = new PIXI.Texture(
      feature,
      new PIXI.Rectangle(i * tileSize, 0, tileSize, tileSize * 2)
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
