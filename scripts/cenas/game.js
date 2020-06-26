class Game {
  constructor() {
    this.index = 0;
    this.map = fita.map
  }

  setup() {
    cenario = new Cenario(imagemCenario, 5);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.config.vidaMaxima, fita.config.vidaInicial);

    personagem = new Personagem(
      matrixPersonagem,
      imagemPersonagem,
      0,
      30,
      110,
      135,
      220,
      270
    );

    const inimigo = new Inimigo(
      matrixInimigo,
      imagemInimigo,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10,
    );

    const troll = new Inimigo(
      matrixInimigoTroll,
      imagemInimigoTroll,
      width * 2,
      0,
      200,
      200,
      400,
      400,
      15,
    );

    const inimigoVoador = new Inimigo(
      matrixInimigoVoador,
      imagemInimigoVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10,
    );

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.jump();
      jumpSound.play();
    }
    if (key === "ArrowLeft") {
      personagem.jump();
      jumpSound.play();
    }
    if (key === "ArrowRight") {
      personagem.jump();
      jumpSound.play();
    }
  }

  draw() {
    cenario.render();
    cenario.move();

    vida.draw();
    pontuacao.render();
    pontuacao.addPoint();
    personagem.render();
    personagem.applyGravity();

    const currentLine = this.map[this.index];
    const inimigo = inimigos[currentLine.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = currentLine.velocidade;

    inimigo.render();
    inimigo.move();


    if (inimigoVisivel) {
      this.index++;
      inimigo.appear();
      if (this.index > this.map.length - 1) {
        this.index = 0;
      }
    }

    // inimigo.render();
    // inimigo.move();
    // inimigoVoador.render();
    // inimigoVoador.move();
    // troll.render();
    // troll.move();

    // // Esse forEach substitui todo o código comentado acima.
    // inimigos.forEach(inimigo => {
    //   inimigo.render();
    //   inimigo.move();

    if (personagem.isColliding(inimigo)) {
      vida.perdeVida();
      personagem.getsInvencible();
      if (vida.vidas < 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
      }
    }
    // });
  }
}
