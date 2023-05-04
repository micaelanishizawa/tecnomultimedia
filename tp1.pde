// tp1 variables y condicionales

//variables
int estado;
int marcaEnElTiempo;

//imagenes
PImage pandarojo1menu;
PImage pandarojo2;
PImage pandarojo3;
PImage pandarojo4;
PImage pandarojo5;
PImage pandarojo6;
PImage pandarojo7;

//texto
int x = 100; 
boolean izquierda;
int vel = 1;
float posX, posY, opacidad;

//fuente
PFont miFuente;

void setup() {
  
  size (640, 480);
 
  estado = 0;
  
  izquierda = true;
  
  posX = 0;
  
  opacidad = 255;

  miFuente = loadFont ("BodoniSvtyTwoITCTT-Bold-48.vlw");

//imagenes
  pandarojo1menu = loadImage("pandarojo1.jpeg");
  pandarojo2 = loadImage("pandarojo2.jpeg");
  pandarojo3 = loadImage("pandarojo3.jpeg");
  pandarojo4 = loadImage("pandarojo4.jpeg");
  pandarojo5 = loadImage("pandarojo5.jpeg");
  pandarojo6 = loadImage("pandarojo6.jpeg");
  pandarojo7 = loadImage("pandarojo7.jpeg");

}


void draw() {

int diferenciaTemporal = millis() - marcaEnElTiempo;

textFont(miFuente);
  
//pantallas

//menu
if (estado == 0){
  image (pandarojo1menu,0,0);
  textAlign( CENTER, CENTER );
  textSize( 40 );
  text ("Iniciar", 320, 420);
  strokeWeight(3);
  stroke(0);
  fill(190,250,255);

//boton  
  circle( width/2, height/4*3, 60 );
  fill(255,190,250);
  triangle( 330,360,315,370,315,350);
  
//titulo  
textAlign (CENTER,CENTER);
textSize (40);
text("PANDA ROJO",x,100);

if( x >= 538 ){  
  izquierda = true;
}
  
if( x <= 100 ){  
  izquierda = false;
  
}
 
if( izquierda ){
    x -= vel;
  }else{
    x += vel;
}
 }

  
//pantalla 1
if (estado == 1){
  image (pandarojo2,0,0);
  fill(255);
  textSize(30);
  text("Los pandas rojos tienen el cuerpo cubierto \nde un pelaje denso de color castaño rojizo. \nLa parte frontal de las orejas, \nmejillas y hocico son blancas. ",320,posY); 
  posY = posY + 0.5;

  
  
if (diferenciaTemporal>= 12000){
  estado = 2;
  marcaEnElTiempo = millis();
    
}

//pantalla 2
}else if (estado == 2){
  image (pandarojo3,0,0);
  fill(255);
  textAlign (CENTER,CENTER);
  textSize(30);
  posX = posX + 0.7;
  text("La parte de las patas esta repleta \ncon pelaje de color negro. \nTienen una cola larga y peluda con \nbandas rojas alternadas con amarillas.",posX,200); 
  
  if(diferenciaTemporal >= 10000){
    estado = 3;
    marcaEnElTiempo = millis();
  }
  
//pantalla 3
}else if (estado == 3){
  image (pandarojo4,0,0);
  textAlign (CENTER,CENTER);
  textSize(frameCount/60);
  posX = posX + 0.1;
  text("Su alimentación es sobre todo bambú \ny ocasionalmente pequeños mamíferos, \naves, huevos, bayas y otros vegetales.",320,200); 
   
  if (diferenciaTemporal >= 8000){
    estado = 4;
    marcaEnElTiempo = millis();
    
    opacidad = opacidad -0.2;
    fill(255, opacidad);
  }
  
//pantalla 4
}else if (estado == 4){

  image (pandarojo5,0,0);
  textSize(frameCount/70);
  posX = posX + 0.1;
  text ("El panda rojo vive entre \nlos 2.000 y 5.000 metros de altura \nen las selvas del Himalaya, en las \nmontañas de Hunan, Schuan (China), \nnorte de Birmania y Nepal.", width/2,height/2);
  
  if (diferenciaTemporal >= 10000){
    estado = 5;
    marcaEnElTiempo = millis();
  }
  
//pantalla 5
}else if (estado == 5){
  image (pandarojo6,0,0);
  
  if(diferenciaTemporal >= 5000){
   estado = 6;
   marcaEnElTiempo = millis();
  }
  
//pantalla 6
  image (pandarojo7,0,0);
  text ("Reiniciar", 320, 420);
  fill(190,250,255);
  circle( width/2, height/4*3, 60 );
  fill(255,190,250);
  triangle( 330,360,315,370,315,350);
  
  if(diferenciaTemporal >= 10000){
    marcaEnElTiempo = millis();
  }
  
  textAlign (CENTER,CENTER);
  textSize (40);
  text("FIN",x,100);

  if( x >= 538 ){  
  izquierda = true;
}
  
  if( x <= 100 ){  
  izquierda = false;
  
}
 
  if( izquierda ){
    x -= vel;
  }else{
    x += vel;
}
 }
  
//corchete final del void draw 
}


void mousePressed() {
//boton
  if( estado == 0 ){
    if( dist(width/2, height/4*3, mouseX, mouseY) < 60/2 ){
      estado = 1;
    }
  }
  if( estado == 6 ){
     estado = 0 ;
  }
}
