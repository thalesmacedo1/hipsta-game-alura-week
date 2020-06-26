class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;

    this.baseX = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margin = i * 10;
      const position = this.baseX * (i + 1);
      image(imagemVida, position + margin, this.y, this.altura, this.largura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) this.vidas++;
  }
  perdeVida() {
    this.vidas--;
  }
}
