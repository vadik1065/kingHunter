class Keyboard {
  constructor() {
    this.pressed = {};
  }

  watch(el) {
    el.addEventListener("keydown", (e) => {
      this.pressed[e.key] = true;
    });
    el.addEventListener("keyup", (e) => {
      this.pressed[e.key] = false;
    });
  }
}
function testCollision(worldX, worldY) {
  let mapX = Math.floor(worldX / tileSize / SCALE);
  let mapY = Math.floor(worldY / tileSize / SCALE);
  let map = window.map;
  return map.collision[mapY * map.width + mapX];
}

function mapAddChild(featur, name, tileTextures, pos, x, y) {
  let map = window.map;
  if (map[name][pos] != 12) {
    let sprite = new PIXI.Sprite(tileTextures[map[name][pos]]);
    sprite.x = x * tileSize;
    sprite.y = y * tileSize;
    featur.addChild(sprite);
  }
}
