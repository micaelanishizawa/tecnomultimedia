class Aventura {
  constructor(estado) {
    this.botoncito1 = new Boton(500, 300, 20);//OBJETOS INSTANCIAS DE CLASES
    this.botoncito2 = new Boton(20, 305, 40);
    this.botoncito3 = new Boton(510, 305, 40);
    this.estado = 0;
    this.juegop = new Juego(this); //creo un objeto de la clase juego, hacemos la conexion
  }

  dibujar(imgArray, textos, m, b, estado) { //imgArray = imagenes / textos = array de textos / m,b = posición de imágenes (x,y) de los botones

    //PANTALLA INICIO
    if (this.estado == 0) {
      image(imgArray[0], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b); //dibujo la imagen llamando el metodo y le agrego el indice del array
      fill(255);
      textSize(40);
      fill(68, 132, 240);
      text(textos[15], 255, 100);

      //CREDITOS BOTÓN
      if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 460 && mouseY < 460 + 50) && (this.estado == 0)) {
        fill(0, 0, 200);
      } else {
        fill (0, 200, 250);
      }
      rect (250, 460, 120, 50);
      fill(0);
      noStroke();
      textSize (28);
      text ("Créditos", 258, 495);

      //PANTALLA 1
    } else if (this.estado == 1 ) {
      image(imgArray[1], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b);
      this.visual(20, 0, 490, 600, 100);
      text(textos[0], 10, 500, 600);

      //PANTALLA 2
    } else if (this.estado == 2 ) {
      image(imgArray[2], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b);
      this.visual(20, 0, 490, 600, 100);
      text(textos[1], 10, 500, 600);

      //PANTALLA 3
    } else if (this.estado == 3 ) {
      image(imgArray[3], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b);
      this.visual(20, 0, 490, 600, 80);
      text(textos[2], 5, 500, 600);

      //PANTALLA 4
    } else if (this.estado == 4 ) {
      image(imgArray[4], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b);
      this.visual(20, 0, 495, 600, 100);
      text(textos[3], 10, 500, 600);

      //PANTALLA 5
    } else if (this.estado == 5 ) {
      image(imgArray[5], 0, 0);
      this.botoncito1.dibujar(imgArray[16], m, b);
      this.visual(20, 0, 490, 600, 100);
      text(textos[4], 10, 500, 600);

      //PANTALLA 6 (decisión)
    } else if (this.estado == 6 ) {
      image(imgArray[6], 0, 0);
      this.botoncito2.dibujar(imgArray[17], 20, 305, this.estado);
      this.botoncito3.dibujar(imgArray[18], 510, 305, this.estado);
      this.visual(20, 0, 490, 590, 70);
      text(textos[5], 10, 500, 600);

      //PANTALLA 7
    } else if (this.estado == 7 ) {
      image(imgArray[7], 0, 0);
      this.visual(20, 0, 490, 600, 100);
      text(textos[6], 10, 500, 600);
      this.botoncito1.dibujar(imgArray[16], m, b);

      //PANTALLA 8
    } else if (this.estado == 8 ) {
      image(imgArray[11], 0, 0);
      this.visual(20, 0, 490, 598, 60);
      text(textos[10], 5, 500, 600);
      this.botoncito1.dibujar(imgArray[16], m, b);

      //PANTALLA 9
    } else if (this.estado ==9 ) {
      image(imgArray[8], 0, 0);
      this.visual(20, 0, 490, 598, 80);
      text(textos[7], 5, 500, 600);
      this.botoncito1.dibujar(imgArray[16], m, b);

      //PANTALLA 10
    } else if (this.estado ==10 ) {
      image(imgArray[9], 0, 0);
      this.visual(20, 0, 500, 610, 90);
      text(textos[8], 5, 510, 600);
      this.botoncito1.dibujar(imgArray[16], m, b);

      //PANTALLA 11 FINAL (cenicienta depresión)
    } else if (this.estado ==11 ) {
      image(imgArray[12], 0, 0);
      this.visual(20, 0, 490, 598, 80);
      text(textos[11], 3, 500, 600);
      push();
      fill(0);
      textSize(40);
      text (textos[17], 270, 470);
      pop();
      textSize(15);
      fill(0);
      text (textos[16], 150, 590);

      //JUEGO
    } else if (this.estado == 12) {
      background(200, 0, 250);
      this.juegop.actualizar();
      this.juegop.dibujar(imgArray, textos);
      this.juegop.teclado(imgArray);
      this.juegop.time();

      //PANTALLA CRÉDITOS
    } else if (this.estado == 13) {
      background(0, 250, 250);

      if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 460 && mouseY < 460 + 50) && (this.estado == 13)) {
        fill(0, 0, 200);
      } else {
        fill (0, 200, 250);
      }
      rect (250, 460, 120, 50);
      fill(0);
      noStroke();
      textSize (28);
      text ("Volver", 270, 495);

      fill (0, 0, 200);
      textSize (25);
      text ("Alumnas: Bianca Marino y Micaela Nishizawa", 50, 170);
      text ("Cuento: La Cenicienta", 160, 270);
      text ("Juego: Recolectar Zapatos", 140, 370);

      //PANTALLA FINAL CENICIENTA CON EL PRINCIPE
    } else if (this.estado == 14) {
      image(imgArray[10], 0, 0);
      push();
      fill(0);
      textSize(40);
      text (textos[17], 270, 470);
      this.visual(20, 0, 490, 600, 80);
      text(textos[9], 5, 495, 600);
      pop();
      textSize(15);
      fill(0);
      text (textos[16], 150, 590);

      //PANTALLA FINAL ANASTASIA CON EL PRINCIPE
    } else if (this.estado == 15) {
      image(imgArray[15], 0, 0);
      push();
      fill(0);
      textSize(40);
      text (textos[17], 270, 470);
      this.visual(20, 0, 490, 600, 80);
      text(textos[13], 10, 500, 600);
      pop();
      textSize(15);
      fill(0);
      text (textos[16], 150, 590);
    }
  }

  //MÉTODO DE CAMBIO DE ESTADO CON BOTONES
  botonPresionado() {
    if (this.botoncito1.inicio (530, 340, 20) && (this.estado==0)) {
      this.botoninicio= true;
      this.estado = 1;
    } else if (this.botoncito1.inicio (530, 340, 20) && (this.estado ==1)) {
      this.botoninicio = true;
      this.estado= 2;
    } else if (this.botoncito1.inicio (530, 340, 20) &&(this.estado ==2)) {
      this.botoninicio = true;
      this.estado= 3;
    } else if (this.botoncito1.inicio (530, 340, 20)&&(this.estado ==3)) {
      this.botoninicio = true;
      this.estado= 4;
    } else if (this.botoncito1.inicio (530, 340, 20) && (this.estado ==4)) {
      this.botoninicio = true;
      this.estado= 5;
    } else if (this.botoncito1.inicio (530, 340, 20) && (this.estado ==5)) {
      this.botoninicio = true;
      this.estado= 6;
    } else if (this.botoncito2.inicio(550, 340, 40) && (this.estado ==6)) {//opcion
      this.botoninicio=true;
      this.estado=7;
    } else if (this.botoncito3.inicio(50, 340, 40) && (this.estado ==6)) {//opcion
      this.botoninicio=true;
      this.estado=8;
    } else if (this.botoncito1.inicio (530, 340, 20)&&(this.estado ==7)) {
      this.botoninicio = true;
      this.estado= 9;
    } else if (this.botoncito1.inicio (530, 340, 20)&&(this.estado ==9)) {
      this.botoninicio = true;
      this.estado= 10;
    } else if (this.botoncito1.inicio (530, 340, 20)&&(this.estado ==8)) {
      this.botoninicio = true;
      this.estado= 11;
    } else if (this.botoncito1.inicio (530, 340, 20)&&(this.estado ==10)) {
      this.botoninicio = true;
      this.estado= 12;
    } else if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 460 && mouseY < 460 + 50) && (this.estado == 0)) {
      this.estado = 13;
    } else if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 460 && mouseY < 460 + 50) && (this.estado == 13)) {
      this.estado = 0;
    }
  }

  //MÉTODO DE CAMBIO DE ESTADO CON ESCAPE
  pasaje() {
    if (keyCode=== ESCAPE ) {
      if (this.estado=== 14) {
        this.estado = 0;
        this.juegop.reiniciar();
      } else if (this.estado===15) {
        this.estado = 0;
        this.juegop.reiniciar();
      } else if (this.estado===11) {
        this.estado = 0;
        this.juegop.reiniciar();
      }
    }
  }

  //MÉTODO PARA CAMBIAR DE ESTADO
  cambiarEstado(id) {
    this.estado = id;
  }

  //TAMAÑO DE LETRA Y FONDO DE TEXTO
  visual(t, a, b, c, d) {
    stroke(156, 222, 252);
    fill (0, 128, 255, 150);
    rect (a, b, c, d);
    noStroke();
    fill(0);
    textSize(t);
  }
}
