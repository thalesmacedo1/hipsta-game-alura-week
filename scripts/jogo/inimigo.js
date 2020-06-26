class Inimigo extends Animacao {
  constructor(matrix, imagem, x, yVariation, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matrix, imagem, x, yVariation, largura, altura, larguraSprite, alturaSprite);

    this.velocidade = velocidade;
    this.x = width;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  appear() {
    this.x = width;
  }
}
