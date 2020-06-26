class Pontuacao {
  constructor() {
    this.points = 0;
  }

  render() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);
    text(parseInt(this.points), width - 30, 50);
  }

  addPoint() {
      this.points += 0.2;
  }
}
