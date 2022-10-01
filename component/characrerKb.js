// keyBare

function keyBareControl(kb, character, touchingGround) {
  if (kb.pressed.ArrowRight) {
    character.direction = 0;
    character.vx = Math.min(8, character.vx + 2);
  }

  if (kb.pressed.ArrowLeft) {
    character.direction = 1;
    character.vx = Math.max(-8, character.vx - 2);
  }
  if (!kb.pressed.ArrowUp && touchingGround && character.jumped) {
    character.jumped = false;
  }
  if (kb.pressed.ArrowUp && touchingGround && !character.jumped) {
    character.vy = -19;
    character.jumped = true;
  }
}
