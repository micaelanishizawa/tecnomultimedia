//funciones

//boton rectangular
function botonrect (x, y, w, h) {
  noStroke();
  rect (x, y, w, h);
}


//rectangulo de texto
function rectdetexto (x, y, w, h) {
  fill (200, 200);
  rect (x, y, w, h);
}

//resetear juego
function resetGame(){
  estado = 0;
  puntaje = 0;
  canastaX = width/2;
  canastaY = 530;
  canastaWidth = 200;
  canastaHeight = 200;
  manzana1 = [];
  manzana1Width = 60;
  manzana1Height = 65;
  manzana2 = [];
  manzana2Width = 50;
  manzana2Height = 55;
  manzanasNum = 1;
  
    for (let i = 0; i < manzanasNum; i++) {
    let x = random(50, 700);
    let y = random(-height, 0);
    let vel = 3;
    manzana1.push( {x, y, vel } );
    manzana2.push( { x, y, vel } );
  }
}
