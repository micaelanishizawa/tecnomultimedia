//tp 4 introducción a p5js
//juego elegido: recoletar manzanas con canasta
//link del video: https://youtu.be/KXQjnZ3AHzs


//estados
let estado = 0;

//arreglo de imagenes
let img = [];

//cantidad de imagenes
let c = 6;

//cantidad de imagenes (canasta)
let cant = 2;

//imagenes que se muestran (canasta spriter)
let s = 2 & 3;

//posiciones de canasta
let canastaX;
let canastaY;
let canastaWidth;
let canastaHeight;

//velocidad de canasta
let canastaVel = 5;

//manzana "normal"
let manzana1 = [];
let manzana1Width = 60;
let manzana1Height = 65;

//manzana "mordida"
let manzana2 = [];
let manzana2Width = 50;
let manzana2Height = 55;

//numero de manzanas
let manzanasNum = 1;

//puntaje
let puntaje = 0;


function preload() {
  for ( let i = 0; i < c; i++ ) {
    img[i] = loadImage("assets/img"+i+".png");
  }
}

function setup() {

  createCanvas (800, 725);

  //canasta valores
  canastaX = width/2;
  canastaY = 530;
  canastaWidth = 200;
  canastaHeight = 200;

  for (let i = 0; i < manzanasNum; i++) {
    let x = random(50, 700);
    let y = random(-height, 0);
    let vel = 3;
    manzana1.push( {x, y, vel} ); //push guarda las configuraciones y transformaciones del estilo de dibujo actual
    manzana2.push( {x, y, vel} );
  }
}


function draw() {

  //pantalla 0 (menú)
  if (estado == 0) {

    //imagen
    image (img[0], 0, 0, 0, 0);

    //boton "play"
    if ((mouseX > 325 && mouseX < 325 + 150 && mouseY > 350 && mouseY < 350 + 70) && (estado == 0)) {
      fill (50, 150, 50);
    } else {
      fill (100, 200, 100);
    }
    botonrect (325, 350, 150, 70);
    fill (255);
    textSize (40);
    text ("Play", 360, 400);

    //boton "créditos"
    if ((mouseX > 305 && mouseX < 305 + 190 && mouseY > 520 && mouseY < 520 + 70) && (estado == 0)) {
      fill (50, 150, 50);
    } else {
      fill (100, 200, 100);
    }
    botonrect (305, 520, 190, 70);
    fill(255);
    text ("Créditos", 325, 570);
  }


  //pantalla 1 (instrucciones)
  if (estado == 1) {
    //imagen
    image (img[0], 0, 0, 0, 0);

    //rectangulo de texto
    rectdetexto (100, 130, 610, 400);

    //titulo del juego
    textSize (40);
    fill(255);
    text ("Juego de recolectar manzanas", 130, 200);

    //texto: instrucciones
    textSize (25);
    text ("El juego consiste en recolectar con una \ncanasta manzanas que caeran del árbol, \nal recolectar 10 manzanas ganarás el juego, \nsin embargo, si llegas a recolectar una manzana \nmordida perderás el juego. Debes mover la \ncanasta con las flechas del teclado. \nQue te diviertas!", 130, 270);

    //boton "listo"
    push();
    if ((mouseX > 490 && mouseX < 490 + 150 && mouseY > 600 && mouseY < 600 + 70) && (estado == 1)) {
      fill (50, 150, 50);
    } else {
      fill (100, 200, 100);
    }
    botonrect (490, 600, 150, 70);
    fill (255);
    textSize (40);
    text ("¡Listo!", 510, 648);
    pop();

    //boton "volver"
    push();
    if ((mouseX > 180 && mouseX < 180 + 150 && mouseY > 600 && mouseY < 600 + 70) && (estado == 1)) {
      fill (50, 150, 50);
    } else {
      fill (100, 200, 100);
    }
    botonrect (180, 600, 150, 70);
    fill (255);
    textSize (40);
    text ("Volver", 200, 648);
    pop();
  }


  //pantalla 2 (créditos)
  if (estado == 2) {

    //imagen
    image (img[0], 0, 0, 0, 0);

    //rectangulo de texto
    rectdetexto (130, 220, 550, 300);

    //boton "volver"
    push();
    if ((mouseX > 340 && mouseX < 340 + 150 && mouseY > 600 && mouseY < 600 + 70) && (estado == 2)) {
      fill (50, 150, 50);
    } else {
      fill (100, 200, 100);
    }
    botonrect (340, 600, 150, 70);
    fill (255);
    textSize (40);
    text ("Volver", 360, 648);
    pop();

    //texto "créditos"
    fill (255);
    textSize (36);
    text ("Créditos", 330, 180);
    text ("Juego: Recolectar manzanas", 170, 320);
    text ("Alumna: Micaela Nishizawa", 170, 440);
  }


  //pantalla 3 (juego)
  if (estado == 3) {

    //imagen fondo
    image (img[1], 0, 0, 0, 0);

    //canasta
    //actualizo canasta
    //movimiento con flechas del teclado
    image (img[s], canastaX, canastaY, canastaWidth, canastaHeight);
    if ( keyIsPressed ) {
      if (keyIsDown(LEFT_ARROW)) {
        canastaX -= canastaVel;
      }
      if (frameCount%2 == 0) {
        s++;
      }
      if (s == 3) {
        s = 2;
      } else {
        s = 2;
      }
      canastaX = constrain(canastaX, 0, 290 + img[s].width);

      if (keyIsDown(RIGHT_ARROW)) {
        canastaX += canastaVel;

        if (frameCount%2 == 0) {
          s--;
        }
        if (s == 2) {
          s = 3;
        } else {
          s = 3;
        }
        canastaX = constrain(canastaX, 0, 290 + img[s].width); //constrain: mantener imagen en el lienzo
      }
    }

    //manzanas
    //manzana 1
    //actualizo las manzanas 1
    if (frameCount % 300 === 0) {
      let x = random(width);
      let y = -manzana1Height;
      manzana1.push( { x, y } );
    }

    for (let i = 0; i < manzana1.length; i++) {
      let manzana01 = manzana1[i];
      manzana01.y += 3;

      //reinicio las manzanas en la parte superior cuando llega a la parte inferior
      if (manzana01.y > height) {
        manzana01.x = random(width);
        manzana01.y = random(-height, 0);
        manzana01.vel = 3;
      }

      //condicion para ganar (recolectar 10 manzanas)
      if (
        manzana01.x + manzana1Width/2 > canastaX - canastaWidth/2 &&
        manzana01.x - manzana1Width/2 < canastaX + canastaWidth/2 &&
        manzana01.y + manzana1Height/2 > canastaY + 80
        ) {
        puntaje++;
        
        //dejar de dibujar la manzana para que no se sature el puntaje
        manzana1.splice(i, 1); //splice: inserta un valor o una matriz de valores en una matriz existente
      }

      //imagen manzana "normal"
      image(img[4], manzana01.x, manzana01.y, manzana1Width, manzana1Height);
    }

    //contador de manzanas
    push();
    textSize(30);
    fill(0);
    text(`Manzanas: ${puntaje}`, 570, 70);
    pop();

    //puntaje (si llega a 10 se cambia de estado)
    if (puntaje >= 10) {
      estado = 4;
    }

    //manzana 2
    //actualizo las manzanas 2
    for (let i = 0; i < manzana2.length; i++) {
      let manzana02 = manzana2[i];
      manzana02.y += manzana02.vel;

      //reinicio las manzanas en la parte superior cuando llega a la parte inferior
      if (manzana02.y > height) {
        manzana02.x = random(width);
        manzana02.y = random(-height, 0);
        manzana02.vel = 4;
      }

      //condicion para perder (si una manzana mordida toca la canasta "pierde" y se cambia de estado)
      if (
        manzana02.x + manzana2Width/2 > canastaX - canastaWidth/2 &&
        manzana02.x - manzana2Width/2 < canastaX + canastaWidth/2 &&
        manzana02.y + manzana2Height/2 > canastaY + 100
        ) {
        estado = 5;
      }

      //imagen manzana "mordida"
      image(img[5], manzana02.x, manzana02.y, manzana2Width, manzana2Height);
    }
  }


  //pantalla 4 (ganaste)
  if (estado == 4) {

    //imagen
    image (img[1], 0, 0, 0, 0);

    //rectangulo de texto
    rectdetexto (130, 220, 550, 300);

    //texto "ganaste"
    textSize (40);
    fill (255);
    text ("¡Felicitaciones!", 270, 330);
    fill (150, 255, 150);
    text ("¡GANASTE!", 300, 430);

    //boton "reiniciar"
    push();
    fill (100, 200, 100);
    botonrect (220, 570, 365, 70);
    fill (255);
    textSize (20);
    text ("Presiona espacio para PLAY AGAIN!", 240, 610);
    if (keyIsDown(32)) {
      resetGame();
    }
    pop();
  }
  

  //pantalla 5 (perdiste)
  if (estado == 5) {

    //imagen
    image (img[1], 0, 0, 0, 0);

    //rectangulo de texto
    rectdetexto (130, 220, 550, 300);

    //texto "perdiste"
    textSize (40);
    fill (255);
    text ("¡Game over!", 297, 330);
    fill (255, 100, 100);
    text ("¡PERDISTE!", 295, 430);

    //boton "reiniciar"
    push();
    fill (100, 200, 100);
    botonrect (220, 570, 365, 70);
    fill (255);
    textSize (20);
    text ("Presiona espacio para PLAY AGAIN!", 240, 610);
    if (keyIsDown(32)) {
      resetGame();
    }
    pop();
  }
}

function mousePressed () {

  //pantalla 0 a pantalla de instrucciones y créditos
  if (estado == 0 && ((mouseX > 325 && mouseX < 325 + 150 && mouseY > 350 && mouseY < 350 + 70))) {
    estado = 1;
  } else if    (estado == 0 && ((mouseX > 305 && mouseX < 305 + 190 && mouseY > 520 && mouseY < 520 + 70))) {
    estado = 2;
  } else if (estado == 2 && ((mouseX > 340 && mouseX < 340 + 150 && mouseY > 600 && mouseY < 600 + 70))) {
    estado = 0;
  }

  //pantalla 1 a pantalla 3 o a panatalla 0
  if (estado == 1 && ((mouseX > 490 && mouseX < 490 + 150 && mouseY > 600 && mouseY < 600 + 70))) {
    estado = 3;
  } else if (estado == 1 && ((mouseX > 180 && mouseX < 180 + 150 && mouseY > 600 && mouseY < 600 + 70))) {
    estado = 0
  }
}
