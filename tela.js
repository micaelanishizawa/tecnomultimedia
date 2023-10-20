//clase tela (clase hija de juego)

class tela {

  constructor(imgArray) {
    
    //valores de la tela
    this.x = random (width);
    this.y = random (-height, 0);
    this.w = 90;
    this.h = 90;
    this.v = random (1, 3);
  }

  actualizar() {

    //actualizar tela para que se genere en posiciones random
    this.y += this.v;
    if (this.y > height) {
      this.y = -height;
      this.x = random(width);
    }
    //constrain para mantener dentro de la pantalla la tela
    this.x = constrain (this.x, -5, 460);
  }


  dibujar(imgArray, a) {

    //tela
    image (imgArray[a], this.x, this.y, this.w, this.h);
  }

//devolver valores de X e Y
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}
