const IMAGE_PUTH = getImagesPuth();

const tileSize = 16;
const tileSizeMonsterX = 99;
const tileSizeMonsterY = 99;
const tileSizeMonster = 99;
const SCALE = 2;

var tileSizeScale = tileSize * SCALE;
var characrerHeight = tileSizeScale * 2;

// const PARAM_CANVAS = { width: 400, height: 320 };

const SPRITES_FRAME = {
  landsaft: {
    width: tileSize,
    height: tileSize,
    countBitWidth: 7,
    countBitHeight: 11,
  },
  monster: {
    width: tileSizeMonsterX,
    height: tileSizeMonsterY,
    countBitWidth: 8,
    countBitHeight: 10,
  },
};

const PARAM_CANVAS = { width: 600, height: 480 };
const CHARACRER = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 1,
  direction: 0,
  jumped: false,
  jupmHeight: 19,
  scale: { x: 2, y: 2 },
  cycles: {
    runLeft: [5, 6, 7, 6],
    runRight: [1, 2, 3, 2],
  },
};
const MONSTER = {
  x: 70,
  y: 860,
  vx: 0,
  vy: 0,
  speed: 1,
  health: 150,
  direction: 0,
  jumped: false,
  cycles: {
    runLeft: [5, 6, 7, 6],
    runRight: [1, 2, 3, 2],
  },
};
