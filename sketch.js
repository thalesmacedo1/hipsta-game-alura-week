function setup() {
  createCanvas(windowWidth, windowHeight);
  // frames por segundo.
  frameRate(40);
  gameSound.loop();
  game = new Game();
  telaInicial = new TelaInicial();

  game.setup();

  cenas = {
    game,
    telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar Jogo', width / 2, height / 2);
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
