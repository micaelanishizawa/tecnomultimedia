//clase cansta (clase hija de juego)

class canasta {

  constructor(imgArray) {
    
    //valores de la canasta
    this.x = 200;
    this.y = 470;
    this.w = 150;
    this.h = 150;
    this.v = 60;
  }

  moverTeclas() {

    //movimiento de canasta
    if (keyIsPressed) {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.v;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.v;
      }
    //constrain para mantener dentro de la pantalla la canasta
      this.x = constrain (this.x, -5, 460);
    }
  }

  dibujar(imgArray) {
    
    //canasta
    image (imgArray[1], this.x, this.y, this.w, this.h);
  }

//devolver valores de X e Y
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
