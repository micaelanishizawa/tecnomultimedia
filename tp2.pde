// tp2 funciones y ciclos FOR
//enlace del video: https://youtu.be/E8RDnNZbxG4

PImage foto;
int cantidad;
int tamanio;
color bg;




void setup() {
  size(800, 400);
  cantidad = 9;
  tamanio = 45;
  bg = color (200);
 

  foto = loadImage("foto.JPEG");
}


void draw () {

  background (bg);

  //foto de ilusión optica
  image(foto, 0, 0);

  println (mouseX, mouseY);

  //cuadricula de circulos
  translate (423, 23);
  noStroke();
  for (int x=0; x<cantidad; x++) {
    for (int y=0; y<cantidad; y++) {
      if ((x+y)%2==0) {
        fill (0);
      } else {
        fill (255);
      }
      circle (x*tamanio, y*tamanio, tamanio);
      
//funcion que no retorna valor      
      funcion (x,y,tamanio);
      
      
//funcion que retorna valor       
      boolean in = mouseEnCirculo (600,200,40);
      push();
      if( mouseEnCirculo(600,200,40)){
      fill(255);
      }else{
      fill(0);
      }
      circle (180,180,45);
      pop();

    }
  }


//circulos dobles de arriba a la izquierda
  translate(23, 23);
  for (int x=-1; x<3; x++) {
    for (int y=-1; y<3; y++) {
      
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/5.7, 11);
      circle (x*tamanio+tamanio/5.7, y*tamanio+tamanio/1.2, 11);
    }
  }


  //circulos dobles de abajo a la derecha
  for (int x=4; x<9; x++) {
    for (int y=4; y<9; y++) {
     
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/5.7, 11);
      circle (x*tamanio+tamanio/5.7, y*tamanio+tamanio/1.2, 11);
    }
  }


  //circulos dobles de arriba a la derecha
  for (int x=4; x<8; x++) {
    for (int y=-1; y<3; y++) {
     
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/5.8, y*tamanio+tamanio/5.8, 11);
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/1.2, 11);
    }
  }

  //circulos dobles de abajo a la izquierda
  for (int x=-1; x<3; x++) {
    for (int y=4; y<8; y++) {
      
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/5.8, y*tamanio+tamanio/5.8, 11);
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/1.2, 11);
    }
  }

//circulos dobles linea izquierda
  for (int x=-1; x<3; x++) {
    for (int y=3; y<4; y++) {
     
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/6, 11);
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/1.2, 11);
    }
  }

//circulos dobles linea derecha
  for (int x=4; x<8; x++) {
    for (int y=3; y<4; y++) {
      
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/5, y*tamanio+tamanio/5, 11);
      circle (x*tamanio+tamanio/5, y*tamanio+tamanio/1.2, 11);
    }
  }

//circulos dobles linea del medio superior
  for (int x=3; x<4; x++) {
    for (int y=-1; y<3; y++) {
     
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);
      
      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/1.2, 11);
      circle (x*tamanio+tamanio/5, y*tamanio+tamanio/1.2, 11);
    }
  }

//circulos dobles linea del medio inferior
  for (int x=3; x<4; x++) {
    for (int y=4; y<8; y++) {
          
      float mx = map(mouseX, 0, width, 0, 255);
      float my = map(mouseY, 0, height, 0, 255);

      if ((x+y)%2==0) {
        noStroke();
        fill (mx);
      } else {
        fill (my);
      }
      circle (x*tamanio+tamanio/1.2, y*tamanio+tamanio/5, 11);
      circle (x*tamanio+tamanio/5, y*tamanio+tamanio/5, 11);
    }
  }
 
  

  
  
  
}

//cambiar color del background y volver variables a estado inicial

void keyPressed () {
  if (key == 'b') {
    bg = color (random(100, 200), random (100, 200), random (100, 200));
  }


  if (key == 'r') {
    bg = color (200);
  }
}


//mis funciones propias
//funcion que no retorna valor
void funcion (int x, int y, int tamanio){
noFill();
stroke (150);
strokeWeight(2);
circle (x*tamanio, y*tamanio, tamanio);



}

//funcion que retorna valor
boolean mouseEnCirculo (float x, float y, float r){
float distancia = dist (mouseX, mouseY, x, y);
if(distancia < r){
return true;
}else{
  return false;
}

}
