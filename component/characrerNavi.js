function characrerNavi(character) {
  let map = window.map;

  character.vy = Math.min(12, character.vy + 1);

  if (character.vx > 0) character.vx -= 1;
  if (character.vx < 0) character.vx += 1;
  if (character.vy > 0) {
    // на земле

    for (let i = 0; i < character.vy; i++) {
      let testX1 = character.x + 2;
      let testX2 = character.x + tileSizeScale - 3;
      let testY = character.y + characrerHeight;
      if (
        testY > map.height * tileSizeScale ||
        testCollision(testX1, testY) ||
        testCollision(testX2, testY)
      ) {
        character.vy = 0;
        break;
      }
      character.y += character.speed;
    }
  }
  if (character.vy < 0) {
    let tileSizeScale = character.scale.x == 1 ? 16 : 32;

    // в воздухе
    for (let i = character.vy; i < 0; i++) {
      let testX1 = character.x + 2;
      let testX2 = character.x + tileSizeScale - 3;
      let testY = character.y + 5;

      if (testCollision(testX1, testY) || testCollision(testX2, testY)) {
        character.vy = 0;
        break;
      }
      character.y -= character.speed;
    }
  }

  if (character.vx > 0) {
    let tileSizeScale = character.scale.x == 1 ? 16 : 32;

    // вперёд
    character.direction = 0;
    for (let i = 0; i < character.vx; i++) {
      let testX = character.x + tileSizeScale - 2;
      let testY1 = character.y + 5;
      let testY2 = character.y + tileSizeScale;
      let testY3 = character.y + characrerHeight - 1;
      if (
        testX >= map.width * tileSizeScale ||
        testCollision(testX, testY1) ||
        testCollision(testX, testY2) ||
        testCollision(testX, testY3)
      ) {
        character.vx = 0;
        break;
      }
      character.x += character.speed;
    }
  }
  if (character.vx < 0) {
    let tileSizeScale = character.scale.x == 1 ? 16 : 32;

    // назад
    character.direction = 1;
    for (let i = character.vx; i < 0; i++) {
      let testX = character.x + 1;
      let testY1 = character.y + 5;
      let testY2 = character.y + tileSizeScale;
      let testY3 = character.y + characrerHeight - 1;
      if (
        testX < 0 ||
        testCollision(testX, testY1) ||
        testCollision(testX, testY2) ||
        testCollision(testX, testY3)
      ) {
        character.vx = 0;
        break;
      }
      character.x -= character.speed;
    }
  }
}
