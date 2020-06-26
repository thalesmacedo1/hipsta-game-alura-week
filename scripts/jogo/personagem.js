class Personagem extends Animacao {
  constructor(
    matrix,
    imagem,
    x,
    yVariation,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(
      matrix,
      imagem,
      x,
      yVariation,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );

    this.yVariation = yVariation;
    this.baseY = height - this.altura - this.yVariation;
    this.y = this.baseY;

    this.jumpSpeed = 0;
    this.gravity = 2;
    this.jumpRange = -30;
    this.jumps = 0;
    this.invecible = false;
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpSpeed = this.jumpRange;
      this.jumps++;
    }
  }

  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.y > this.baseY) {
      this.y = this.baseY;
      this.jumps = 0;
    }
  }

  getsInvencible() {
    this.invencible = true;
    setTimeout(() => {
      this.invencible = false;
    }, 1000);
  }

  isColliding(inimigo) {
    if (this.invencible) return false;
    const precision = 0.7;
    const collision = collideRectRect(
      this.x,
      this.y,
      this.largura * precision,
      this.altura * precision,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precision,
      inimigo.altura * precision
    );

    return collision;
  }
}
