//tp 3 aventura gráfica
//cuento elegido: "Cenicienta" - Charles Perrault
//link del video: https://youtu.be/hg2rPbLykGA

int p = 17; //cantidad de pantalla
int t = 16; //cantidad de textos
int estado;
PImage[] imagenes = new PImage [p];
String [] textos = new String [t];

void setup() {
  size (600, 600);

  estado = 0;

  //imagenes
  for (int i = 0; i < p; i++) {
    imagenes [i] = loadImage ("p" + i + ".png");
  }

  //textos escritos con arrays
  textos [0] = "Érase una vez, una joven llamada Cenicienta‚ \nera maltratada por su madrastra y hermanastras, \nquienes la obligaban a hacer tareas domésticas.";
  textos [1] = "Un día el rey organiza un baile al que están invitadas todas las \njóvenes del reino. Cenicienta decide asistir con un vestido \nhecho por sus amigos ratones.";
  textos [2] = "Pero sus hermanastras al ver a Cenicienta sintieron muchos celos, \npor lo que le rompieron todo el vestido.";
  textos [3] = "Cenicienta recibe la ayuda de su hada madrina, quien con magia le \notorga un hermoso vestido, zapatos de cristal y una carroza encantada. \nPero le advierte que el hechizo sólo dura hasta media noche.";
  textos [4] = "Cenicienta asiste al baile y captura la atención de \ntodos con su belleza y elegancia. Ella y el príncipe se \nconocen y pasan un tiempo encantador juntos.";
  textos [5] = "Se hacen las 12 de la noche y comienzan a sonar\n las campanadas, Cenicienta debe tomar una decisión:";
  textos [6] = "Cenicienta debe abandonar el baile antes de la medianoche, \nya que la magia del hada madrina se desvanece. \nHuye bajando rápidamente las escaleras, ¿Qué sucede?:";
  textos [7] = "El príncipe, encantado por la misteriosa joven, inicia una búsqueda \nen todo el reino para encontrarla. Utiliza el zapato de cristal perdido \npara probar su ajuste en los pies de las jóvenes del reino.";
  textos [8] = "Llega el momento de la prueba del zapato \nen la casa de Cenicienta, ¿Quién se lo prueba primero?";
  textos [9] = "El príncipe y Cenicienta se casan y viven felices para siempre.";
  textos [10] = "El hechizo se rompe y Cenicienta vuelve a su apariencia original, \n¿Cómo reacciona el príncipe?";
  textos [11] = "Luego de que el príncipe la rechaza \nCenicienta entra en depresión.";
  textos [12] = "Cenicienta logra escapar antes de medianoche pero \nella y el príncipe no se vuelven a encontrar nunca más.";
  textos [13] = "El príncipe convencido de que Anastasia era la dueña del \nzapato decide casarse con ella y celebrar su boda, \na la cual Cenicienta asiste, ¿Qué hace Cenicienta?:";
  textos [14] = "Anastasia se casa con el príncipe y viven felices para siempre.";
}

void draw() {

  //pantalla 0: menú
  if (estado == 0) {

    //imagen
    image (imagenes[0], 0, 0);

    //botones
    if (mouseEnCirculo(310, 325, 40)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    stroke (0, 0, 200);
    strokeWeight(2);
    circle (310, 325, 80);
    if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 430 && mouseY < 430 + 50) && (estado == 0)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    rect (250, 430, 120, 50);
    fill(0);
    textSize (30);
    text ("Play", 285, 335);
    text ("Créditos", 258, 465);
  }

  //pantalla 1
  if (estado == 1) {

    //imagen
    image (imagenes[1], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (0);
  }

  //pantalla 2
  if (estado == 2) {

    //imagen
    image (imagenes[2], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (1);
  }

  //pantalla 3
  if (estado == 3) {

    //imagen
    image (imagenes[3], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (2);
  }

  //pantalla 4
  if (estado == 4) {

    //imagen
    image (imagenes[4], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (3);
  }

  //pantalla 5
  if (estado == 5) {

    //imagen
    image (imagenes[5], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (4);
  }

  //pantalla 6
  if (estado == 6) {

    //imagen
    image (imagenes[6], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (5);

    //opciones
    rectangulodetexto (0, 450, 600, 150);
    fill(255);
    textSize(20);
    text ("A)    Cenicienta se queda bailando con el príncipe", 50, 500);
    text ("B)    Cenicienta huye", 50, 550);
    circulodeopcionA (58, 494, 35);
    circulodeopcionB (58, 544, 35);
  }

  //pantalla 7
  if (estado == 7) {

    //imagen
    image (imagenes[7], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (6);

    //opciones
    rectangulodetexto (0, 450, 600, 150);
    fill(255);
    textSize(20);
    text ("A)    A Cenicienta no se le cae el zapato de cristal", 50, 500);
    text ("B)    A Cenicienta se le cae el zapato de cristal", 50, 550);
    circulodeopcionA (58, 494, 35);
    circulodeopcionB (58, 544, 35);
  }

  //pantalla 8
  if (estado == 8) {

    //imagen
    image (imagenes[8], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //circulo de continuar
    circulodecontinuar (550, 110, 40);

    //textos
    textosdelcuento (7);
  }

  //pantalla 9
  if (estado == 9) {

    //imagen
    image (imagenes[9], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (8);

    //opciones
    rectangulodetexto (0, 450, 600, 150);
    fill(255);
    textSize(20);
    text ("A)    Se lo prueba Anastasia", 50, 500);
    text ("B)    Se lo prueba Cenicienta", 50, 550);
    circulodeopcionA (58, 494, 35);
    circulodeopcionB (58, 544, 35);
  }

  //pantalla 10 final 1
  if (estado == 10) {

    //imagen
    image (imagenes[10], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (9);

    //boton play again
    if (mouseEnCirculo(310, 460, 25)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    circulofinal (310, 460, 50);
    textoPlayAgain (250, 420);
  }

  //pantalla 11
  if (estado == 11) {

    //imagen
    image (imagenes[11], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (10);

    //opciones
    rectangulodetexto (0, 450, 600, 150);
    fill(255);
    textSize(20);
    text ("A)    El príncipe la rechaza", 50, 500);
    text ("B)    El príncipe la acepta tal como es", 50, 550);
    circulodeopcionA (58, 494, 35);
    circulodeopcionB (58, 544, 35);
  }

  //pantalla 12 final 2
  if (estado == 12) {

    //imagen
    image (imagenes[12], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (11);

    //boton play again
    if (mouseEnCirculo(310, 460, 25)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    circulofinal (310, 460, 50);
    textoPlayAgain (250, 420);
  }

  //pantalla 13 final 3
  if (estado == 13) {

    //imagen
    image (imagenes[13], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (12);

    //boton play again
    if (mouseEnCirculo(310, 460, 25)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    circulofinal (310, 460, 50);
    textoPlayAgain (250, 420);
  }

  //pantalla 14
  if (estado == 14) {

    //imagen
    image (imagenes[14], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (13);

    //opciones
    rectangulodetexto (0, 450, 600, 150);
    fill(255);
    textSize(20);
    text ("A)    Cenicienta no dice nada", 50, 500);
    text ("B)    Cenicienta se opone a la boda y el príncipe la recuerda", 50, 550);
    circulodeopcionA (58, 494, 35);
    circulodeopcionB (58, 544, 35);
  }

  //pantalla 15 final 4
  if (estado == 15) {

    //imagen
    image (imagenes[15], 0, 0);

    //rectangulo de texto
    rectangulodetexto (0, 0, 600, 150);

    //textos
    textosdelcuento (14);

    //boton play again
    if (mouseEnCirculo(310, 460, 25)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    circulofinal (310, 460, 50);
    textoPlayAgain (250, 420);
  }

  //pantalla creditos
  if (estado == 16) {

    //imagen
    image (imagenes[16], 0, 0);

    //boton de back
    if (mouseEnCirculo(300, 450, 20)) {
      fill(0, 0, 200);
    } else {
      fill (0, 200, 250);
    }
    circulofinal (300, 450, 80);
    fill(0);
    textSize (30);
    text ("Back", 270, 460);
  }
}

void mousePressed() {

  if (estado == 0 && mouseEnCirculo(310, 325, 25)) {
    estado = 1;
  } else if (estado == 1 && mouseEnCirculo(550, 110, 20)) {
    estado = 2;
  } else if (estado == 2 && mouseEnCirculo(550, 110, 20)) {
    estado = 3;
  } else if (estado == 3 && mouseEnCirculo(550, 110, 20)) {
    estado = 4;
  } else if (estado == 4 && mouseEnCirculo(550, 110, 20)) {
    estado = 5;
  } else if (estado == 5 && mouseEnCirculo(550, 110, 20)) {
    estado = 6;
  } else if (estado == 8 && mouseEnCirculo(550, 110, 20)) {
    estado = 9;
  }

  //volver a menu
  if (estado == 10 && mouseEnCirculo(310, 460, 25)) {
    estado = 0;
  } else if (estado == 12 && mouseEnCirculo(310, 460, 25)) {
    estado = 0;
  } else if (estado == 13 && mouseEnCirculo(310, 460, 25)) {
    estado = 0;
  } else if (estado == 15 && mouseEnCirculo(310, 460, 25)) {
    estado = 0;
  }

  //creditos
  if ((mouseX > 250 && mouseX < 250 + 120 && mouseY > 430 && mouseY < 430 + 50) && (estado == 0)) {
    estado = 16;
  } else if (estado == 16 && mouseEnCirculo(300, 450, 40)) {
    estado = 0;
  }

  //opciones
  if (estado == 6 && mouseEnCirculo(58, 494, 18)) {
    estado = 11;
  } else if (estado == 6 && mouseEnCirculo(58, 544, 18)) {
    estado = 7;
  } else if (estado == 11 && mouseEnCirculo(58, 494, 18)) {
    estado = 12;
  } else if (estado == 11 && mouseEnCirculo(58, 544, 18)) {
    estado = 10;
  } else if (estado == 7 && mouseEnCirculo(58, 494, 18)) {
    estado = 13;
  } else if (estado == 7 && mouseEnCirculo(58, 544, 18)) {
    estado = 8;
  } else if (estado == 9 && mouseEnCirculo(58, 494, 18)) {
    estado = 14;
  } else if (estado == 9 && mouseEnCirculo(58, 544, 18)) {
    estado = 10;
  } else if (estado == 14 && mouseEnCirculo(58, 494, 18)) {
    estado = 15;
  } else if (estado == 14 && mouseEnCirculo(58, 544, 18)) {
    estado = 10;
  }
}
