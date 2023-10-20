//TP#5 - Programando con Objetos, una aproximación
//Cuento elegido: Cenicienta
//Juego elegido: Recoletar
//link del video: https://youtu.be/xulRdohBFcM

let j;

function setup() {
  createCanvas(600, 600);

  j = new juego();
}

function draw() {

  background (200, 200, 250);

  j.actualizar();
  j.dibujar();
}

function keyPressed() {
  j.teclado();
}

function mousePressed() {
  j.mouse();
}
