function animations(touchingGround, blob) {
  let characterFrame = 0;
  if (!touchingGround) {
    characterFrame = character.direction * 4 + 1;
  } else {
    if (character.vx > 0) {
      characterFrame =
        character.cycles.runRight[Math.floor(Date.now() / 100) % 4];
    } else if (character.vx < 0) {
      characterFrame =
        character.cycles.runLeft[Math.floor(Date.now() / 100) % 4];
    } else {
      characterFrame = character.direction * 4;
    }
  }
  blob.texture = window.characterFrames[characterFrame];
}
