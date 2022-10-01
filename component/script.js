PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const app = new PIXI.Application(PARAM_CANVAS);
window.app = app;

document.body.appendChild(app.view);
app.view.setAttribute("tabindex", 0);

app.loader.add("map", IMAGE_PUTH.mapJSON);
app.loader.add("tileset", IMAGE_PUTH.landsafts);
app.loader.add("character", IMAGE_PUTH.mans);
app.loader.add("monster", IMAGE_PUTH.monsters);

app.loader.load((loader, resources) => {
  let map = resources.map.data;
  window.map = map;

  let kb = new Keyboard();
  kb.watch(app.view);

  let tileTextures = [];
  getLandsaft(tileTextures, resources.tileset.texture);

  let characterFrames = [];
  window.characterFrames = characterFrames;
  getCharacter(characterFrames, resources.character.texture);

  let monsterFrames = [];
  getMonsters(monsterFrames, resources.monster.texture);

  const blob = new PIXI.Sprite(characterFrames[0]);
  const monster = new PIXI.Sprite(monsterFrames[0]);
  blob.scale.x = SCALE;
  blob.scale.y = SCALE;

  const sky = new PIXI.Container();
  const background = new PIXI.Container();
  const stage = new PIXI.Container();

  for (let y = 0; y < map.width; y++) {
    for (let x = 0; x < map.width; x++) {
      let pos = y * map.width + x;

      mapAddChild(sky, "sky", tileTextures, pos, x, y);
      mapAddChild(background, "background", tileTextures, pos, x, y);
      mapAddChild(stage, "stage", tileTextures, pos, x, y);
    }
  }

  sky.scale.x = sky.scale.y = SCALE;
  background.scale.x = background.scale.y = SCALE;
  stage.scale.x = stage.scale.y = SCALE;

  // Add the bunny to the scene we are building
  app.stage.addChild(sky);
  app.stage.addChild(background);
  app.stage.addChild(stage);
  app.stage.addChild(monster);
  app.stage.addChild(blob);

  window.character = CHARACRER;

  let scrollX = 0;
  let scrollY = 0;

  app.view.focus();

  // Listen for frame updates
  app.ticker.add((time) => {
    blob.x = character.x;
    blob.y = character.y;
    monster.x = MONSTER.x;
    monster.y = MONSTER.y;
    monster.mirrow = 1;

    const characrerPosRight = character.x + tileSizeScale;
    const characrerPosBottom = character.y + characrerHeight;

    character.vy = Math.min(12, character.vy + 1);

    if (character.vx > 0) character.vx -= 1;
    if (character.vx < 0) character.vx += 1;

    let touchingGround =
      testCollision(character.x + 2, characrerPosBottom + 1) ||
      testCollision(characrerPosRight - 3, characrerPosBottom + 1);

    characrerNavi(character);

    let scrollObject = { app, sky };
    scroll(character, scrollX, scrollY, scrollObject);

    keyBareControl(kb, character, touchingGround, blob);
    animations(touchingGround, blob);
  });
});

app.loader.onError.add((error) => console.error(error));
