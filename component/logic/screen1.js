function potionFind(potion) {
  let character = window.character;
  if (character.x < 60 && character.y > 860 && character.scale.x == 2) {
    console.log(character);
    characrerHeight = 32;
    character.scale = { x: 1, y: 1 };
    character.jupmHeight = 17;
    window.app.stage.removeChild(potion);
  }
}

function checkWin() {
  let character = window.character;
  if (character.y > 860 && character.x > 945 && character.x < 995) {
    console.log("wins");
  }
}

function screenConteiner1(potion) {
  potionFind(potion);
  checkWin();
}
