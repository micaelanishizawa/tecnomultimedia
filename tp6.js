//TP Final — Etapa 1

let a; //declaro un objeto de la clase AVENTURA
let j; //declaro un objeto de la clase JUEGO
let mb = []; //array de IMAGENES
let texto = []; //array de TEXTOS

function setup() {
  createCanvas(600, 600);
  a = new Aventura(mb, texto); //INICIALIZO EL OBJETO
  j = new Juego();
}

function draw() {
  a.dibujar(mb, texto);
}

function mousePressed() {
  a.botonPresionado();
}

function keyPressed() {
  a.pasaje();
}

function preload() {
  for (let i = 0; i < 26; i++) {
    mb[i] = loadImage('assets/mb'+ i +'.png');
    for (let x = 0; x < 18; x++) {
      texto = loadStrings('assets/texto.txt');
    }
  }
}
