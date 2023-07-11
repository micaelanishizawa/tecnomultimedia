//funciones propias

//funcion con parametros que retorna valor
boolean mouseEnCirculo (int x, int y, int r) {
  return dist (mouseX, mouseY, x, y) <= r;
}

//funciones con parametros que no retornan valor
void circulodecontinuar (int h, int i, int j) {
  stroke(255);
  fill(0, 200, 200);
  circle(h, i, j);
}

void rectangulodetexto (int d, int e, int f, int g) {
  noStroke();
  fill (200, 100);
  rect (d, e, f, g);
}

void circulodeopcionA (int o, int p, int q) {
  fill(0, 200, 255, 100);
  circle (o, p, q);
}

void circulodeopcionB (int r, int s, int t) {
  fill(250, 100, 255, 100);
  circle (r, s, t);
}

void textosdelcuento (int index) {
  fill(255);
  textSize(20);
  text (textos [index], 15, 50);
}

void circulofinal (int a, int b, int c) {
  stroke (0, 0, 200);
  strokeWeight(2);
  circle (a, b, c);
}

void textoPlayAgain (int m, int l) {
  fill(0);
  textSize (30);
  text ("Play Again!", m, l);
}
