function scroll(character, scrollX, scrollY, scrollObject) {
  if (character.x + scrollX > app.view.width - tileSizeScale * 6) {
    scrollX = Math.max(
      app.view.width - map.width * tileSizeScale,
      app.view.width - character.x - tileSizeScale * 6
    );
  }

  if (character.x + scrollX < tileSizeScale * 5) {
    scrollX = Math.min(0, -character.x + tileSizeScale * 5);
  }
  if (character.y + scrollY > app.view.height - tileSizeScale * 5) {
    scrollY = Math.max(
      app.view.height - map.height * tileSizeScale,
      app.view.height - character.y - tileSizeScale * 5
    );
  }
  if (character.y + scrollY < tileSizeScale * 2) {
    scrollY = Math.min(0, -character.y + tileSizeScale * 2);
  }

  scrollObject.app.stage.x = scrollX;
  scrollObject.app.stage.y = scrollY;

  scrollObject.sky.x = -scrollX * 0.5;
  scrollObject.sky.y = -scrollY * 0.5;
}
