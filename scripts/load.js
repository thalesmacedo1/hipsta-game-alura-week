function preload() {
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemInimigoTroll = loadImage("imagens/inimigos/troll.png");
  imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemVida = loadImage("imagens/assets/coracao.png");
  imagemTelaInicial = loadImage("imagens/assets/telaInicial.png");
  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");
  fita = loadJSON("cartridge/fita.json");

  gameSound = loadSound("sons/trilha_jogo.mp3");
  jumpSound = loadSound("sons/somPulo.mp3");
}
