class Juego {
  constructor(aventura) {

    //creo los objetos de mis otras clases
    this.raton =  new Ratoncito();
    this.tacos = [];

    //tacos
    this.maxTacos= 6;
    this.interval= 800; //que aparezcan cada
    this.ultimoTiempoAparicion= 0;

    //tiempo
    this.tiempo=0;
    this.duracion=20;
    this.jugando=true; //time
    this.estado= 0;
    this.puntos= 0;
    this.boton = true;

    //array de tacos
    for (let i=0; i< this.maxTacos; i++) {
      this.tacos.push(new Zapatos());
    }

    //conexión con la la clase aventura
    this.aventura = aventura;
  }

  dibujar(imgArray, textos) { // METODOS!!

    image(imgArray[25], 0, 0);
    image(imgArray[24], 0, 0);

    //dibujo mis objetos con sus métodos
    this.raton.dibujar(imgArray);
    for (let i=0; i< this.tacos.length; i++) {
      this.tacos[i].dibujar(imgArray);

      fill(255);
      text("puntos: "+this.puntos, 440, 45);
    }
  }

  teclado(imgArray) {
    this.raton.flechas(keyCode, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
  }

  actualizar () {

    //tiempo
    let tiempoActual = millis();
    if (tiempoActual - this.ultimoTiempoAparicion > this.interval) {
      if (this.tacos.length === this.maxTacos) {
        this.tacos.splice(0, 1);
        this.tacos.push(new Zapatos());
      }
      this.ultimoTiempoAparicion = tiempoActual;
    }

    //rango de colision
    let distanciaColision = 30;

    for (let i = 0; i < this.tacos.length; i++) {
      let distanciaTacoRaton = dist(this.raton.x, this.raton.y, this.tacos[i].x, this.tacos[i].y);

      //colision
      if (distanciaTacoRaton < distanciaColision && !this.tacos[i].colision) {
        this.puntos++;
        this.tacos[i].colision = true;
        this.reubicarTaco(this.tacos[i]);
      }
    }

    //puntaje
    if (this.puntos >= 5) {
      this.aventura.cambiarEstado (14);
    }
  }

  reubicarTaco(taco) {
    taco.x = random(taco.size, width- taco.size);
    taco.y = random(100, height - taco.size- 80);
    taco.colision= false;
  }

  //tiempo del juego
  time() {
    if (this.jugando) {
      this.tiempo += deltaTime / 1000;
      let tiempoRestante = this.duracion - this.tiempo;
      if (tiempoRestante <= 0) {
        this.jugando = false;
        this.aventura.cambiarEstado (15);
      }
      fill(255);
      textSize(30);
      let tiempoFormateado = nf(tiempoRestante, 1, 1);
      text( "        " + tiempoFormateado, 5, 50);
    }
  }

  //reinicio variables
  reiniciar() {
    this.raton =  new Ratoncito();
    this.tacos = [];
    this.maxTacos= 6;
    this.interval= 800;
    this.ultimoTiempoAparicion= 0;
    this.tiempo=0;
    this.boton = true;
    this.duracion=20;
    this.jugando=true;
    this.puntos= 0;
    for (let i=0; i< this.maxTacos; i++) {
      this.tacos.push(new Zapatos());
    }
  }
}
