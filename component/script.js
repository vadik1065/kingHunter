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
  let lft = SPRITES_FRAME.landsaft;
  let characterFrames = [];
  window.characterFrames = characterFrames;
  let monsterFrames = [];
  let mstr = SPRITES_FRAME.monster;

  getFrames(
    tileTextures,
    resources.tileset.texture,
    lft.countBitWidth,
    lft.countBitHeight,
    lft.width,
    lft.height
  );

  getFrames(
    monsterFrames,
    resources.monster.texture,
    mstr.countBitWidth,
    mstr.countBitHeight,
    mstr.width,
    mstr.height
  );

  getCharacter(characterFrames, resources.character.texture);
  window.character = CHARACRER;

  const blob = new PIXI.Sprite(characterFrames[0]);
  const potion = new PIXI.Sprite(tileTextures[57]);
  const monster = new PIXI.Sprite(monsterFrames[0]);

  const sky = new PIXI.Container();
  const background = new PIXI.Container();
  const stage = new PIXI.Container();

  let scrollX = 0;
  let scrollY = 0;

  for (let y = 0; y < map.width; y++) {
    for (let x = 0; x < map.width; x++) {
      let pos = y * map.width + x;
      mapAddChild(sky, "sky", tileTextures, pos, x, y);
      mapAddChild(background, "background", tileTextures, pos, x, y);
      mapAddChild(stage, "stage", tileTextures, pos, x, y);
    }
  }

  let framesDScale = [sky, background, stage, potion, blob];
  // default scale

  framesDScale.forEach((fr) => (fr.scale.x = fr.scale.y = SCALE));

  monster.scale.x = -1;
  monster.scale.y = 1.5;

  let dopFeatur = [monster];

  dopFeatur.forEach((dFr) => framesDScale.push(dFr));
  framesDScale.forEach((fr) => app.stage.addChild(fr));

  app.view.focus();

  potion.x = 15;
  potion.y = 927;
  // Listen for frame updates
  app.ticker.add((time) => {
    blob.x = character.x;
    blob.y = character.y;
    blob.scale = character.scale;

    monster.x = MONSTER.x + tileSizeMonsterX;
    monster.y = MONSTER.y - tileSizeMonsterX / 2;

    const characrerPosRight = character.x + tileSizeScale;
    const characrerPosBottom = character.y + characrerHeight;

    let touchingGround =
      testCollision(character.x + 2, characrerPosBottom + 1) ||
      testCollision(characrerPosRight - 3, characrerPosBottom + 1);

    characrerNavi(character);

    let scrollObject = { app, sky };
    scroll(character, scrollX, scrollY, scrollObject);

    keyBareControl(kb, character, touchingGround, blob);
    animations(touchingGround, blob);

    screenConteiner1(potion);
  });
});

app.loader.onError.add((error) => console.error(error));
