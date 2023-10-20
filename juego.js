//clase juego (clase madre)

//estados
let estado = 0;

//arreglo de imagenes
let img = [];

let canastaropa;

let telaazul;

let telaroja;

//carga de imagenes
function preload () {
  for ( let i = 0; i < 4; i++ ) {
    img[i] = loadImage("assets/img"+i+".png");
  }
}

class juego {

  constructor() {

    canastaropa = new canasta(img);

    telaazul = [];
    for ( let i = 0; i < 2; i++ ) {
      telaazul.push( new tela(img) );
    }

    telaroja = [];
    for ( let i = 0; i < 2; i++ ) {
      telaroja.push( new tela(img) );
    }

    this.tiempos = new tiempo(60);

    this.tiempoIniciado = false;

    this.generarTelaAzul(2);

    this.puntaje = 0;
  }

  actualizar() {

    //pantalla 1 "jugando"
    if (estado == 1) {

      //tela azul
      for ( let i = 0; i < 3; i++ ) {
        telaazul[i].actualizar();
        image (img[2], this.x, this.y, this.w, this.h);
      }

      //tela roja
      for ( let i = 0; i < 2; i++ ) {
        telaroja[i].actualizar();
        image (img[3], this.x, this.y, this.w, this.h);
      }

      //colision de la tela azul + puntaje
      this.colisionTelaAzul()
        if (this.puntaje >= 15) {
        estado = 2;
      }

      //colision tela roja
      this.colisionTelaRoja();

      //tiempo
      if (!this.tiempoIniciado) {
        this.tiempos.inicio = millis(); // Inicia el tiempo
        this.tiempoIniciado = true; // Marca que el juego ha comenzado
      }

      this.tiempos.actualizar()
    }

    if (estado == 1 && this.tiempos.haTerminado()) {
      estado = 3;
    }

    //pantalla 2 "ganaste"
    if (estado == 2) {
      this.reiniciar();
    }

    //pantalla 3 "perdiste"
    if (estado == 3) {
      this.reiniciar();
    }
  }

  dibujar() {

    //pantalla 0 "instrucciones"
    if (estado == 0) {

      background (200, 250, 250);

      push();
      fill (240, 200);
      noStroke();
      rect (70, 80, 450, 350);
      pop();

      //texto instrucciones
      push();
      textSize (25);
      text ("Instrucciones", 220, 140);
      textSize (20);
      text ("El juego consiste en recolectar con una \ncanasta 15 pedazos de tela de color azul \nque caerán del tendero de ropa para crear \nel vestido de Cenicienta, si se llega a \nrecolectar un pedazo de tela de color rojo \nse pierde el juego. Deberás mover la \ncanasta con las flechas del teclado. \nTendras un tiempo limitado para lograrlo. \nQue te diviertas!", 100, 190);
      pop();

      //boton "play"
      push();
      fill (200, 200, 250);
      noStroke();
      rect (215, 460, 130, 60);
      fill (0);
      textSize(30);
      text ("Play", 250, 500);
      pop();
    }

    //pantalla 1 "juego"
    if (estado == 1) {

      //fondo
      image (img[0], 0, 0, 0, 0);

      //canasta
      canastaropa.dibujar(img);

      //tela azul
      for ( let i = 0; i < 3; i++ ) {
        telaazul[i].dibujar(img, 2);
      }

      //tela roja
      for ( let i = 0; i < 2; i++ ) {
        telaroja[i].dibujar(img, 3);
      }

      //texto tiempo
      push();
      textSize (20);
      //toFixed(0) para redondear el tiempo a un número entero
      text("Tiempo: " + this.tiempos.tiempoRestante.toFixed(0), 450, 60);
      pop();

      //texto puntaje
      push();
      textSize (20);
      text("Puntaje: " + this.puntaje, 450, 100);
      pop();

      this.tiempos.actualizar();
    }

    //pantalla 2 "ganaste"
    if (estado == 2) {

      background (200, 250, 200);
      textSize (25);
      text ("¡Ganaste!", 230, 220);
      text ("Cenicienta puede asistir al baile", 110, 280);

      //boton "play again"
      push();
      fill (200, 200, 250);
      noStroke();
      rect (130, 363, 310, 60);
      fill (0);
      textSize(20);
      text ("Presiona R para PLAY AGAIN!", 150, 400);
      pop();

      this.reiniciar();
    }

    //pantalla 3 "perdiste"
    if (estado == 3) {
      background (250, 200, 200);
      textSize (25);
      text ("¡Game Over!", 220, 220);
      text ("Cenicienta no podrá asistir al baile", 100, 280);

      //boton "play again"
      push();
      fill (200, 200, 250);
      noStroke();
      rect (130, 363, 310, 60);
      fill (0);
      textSize(20);
      text ("Presiona R para PLAY AGAIN!", 150, 400);
      pop();

      this.reiniciar();
    }
  }

  teclado() {

    //moviento de canasta
    canastaropa.moverTeclas();

    //pantalla 2 "ganaste" a pantalla 0 "instrucciones"
    if (estado == 2) {
      if (key === 'r') {
        estado = 0;

        this.reiniciar();
      } else if (key === 'r') {
        estado = 2;
      }
    }

    //pantalla 3 "perdiste" a pantalla 0 "instrucciones"
    if (estado == 3) {
      if (key === 'r') {
        estado = 0;

        this.reiniciar();
      } else if (key === 'r') {
        estado = 3;
      }
    }
  }


  mouse() {

    //boton "play", pantalla 0 a pantalla 1
    if (estado == 0 && ((mouseX > 215 && mouseX < 215 + 130 && mouseY > 460 && mouseY < 460 + 60))) {
      estado = 1;
      this.tiempos = new tiempo(60);
    }
  }


  generarTelaAzul(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      telaazul.push(new tela(random(width), -height, 45));
    }
  }

  colisionTelaAzul() {
    for (let i = telaazul.length - 1; i >= 0; i--) {
      let distanciaReal = dist (canastaropa.getX(), canastaropa.getY(), telaazul[i].getX(), telaazul[i].getY());
      let distanciaChoque = 45;

      if (distanciaReal <= distanciaChoque) {
        //dejar de dibujar la manzana para que no se sature el puntaje
        telaazul.splice(i, 1);

        this.puntaje += 1;
        //genera una nueva telaazul en una posición random en el eje X
        telaazul.push(new tela(random(width), -height, 45));
      }
    }
  }


  colisionTelaRoja() {

    for (let i = 0; i < telaroja.length; i++) {
      let distanciaReal = dist (canastaropa.getX(), canastaropa.getY(), telaroja[i].getX(), telaroja[i].getY());
      let distanciaChoque = 45;

      if (distanciaReal <= distanciaChoque) {
        estado = 3;
      }
    }
  }

  reiniciar() {

    //método "reiniciar"
    if (key === "r") {

      estado = 0;

      canastaropa = new canasta();

      this.puntaje = 0;


      this.tiempos = new tiempo(60);

      telaazul = [];
      for ( let i = 0; i < 3; i++ ) {
        telaazul.push( new tela(img) );
      }

      telaroja = [];
      for ( let i = 0; i < 2; i++ ) {
        telaroja.push( new tela(img) );
      }
    }
  }
}
