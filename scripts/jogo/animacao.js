class Animacao {
    constructor(matrix, imagem, x, yVariation, largura, altura, larguraSprite, alturaSprite){
        this.matrix = matrix;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.yVariation = yVariation;
        this.x = x;
        this.y = height - this.altura - this.yVariation;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        
        this.currentFrame = 0;
    }

    render(){
        // image(img, posX, posY, width, height)
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.larguraSprite, this.alturaSprite) // Ultimos 3 são os parametros da 2° imagem.

        this.animate();
      }
    
    animate(){
        this.currentFrame++;
        
        if(this.currentFrame >= this.matrix.length-1){
          this.currentFrame = 0;
        }
    }
}