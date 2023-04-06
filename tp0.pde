//tp0 animal

PImage cerdo;

void setup() {
  size(800, 400);
  
  cerdo = loadImage("cerdo.jpg");
  
}

void draw () {
    
  background(232, 200, 169);

 image(cerdo,0,0);

  //cuerpo
  fill(255, 225, 225);
  noStroke();
  ellipse(600,350,310,410);

  //brazos
  fill(255, 210, 210);
  rect(510,300,60,250);
  rect(630,300,60,250);


  //cara
  fill(255, 235, 235);
  noStroke();
  ellipse(600,220,240,270);
  
  //orejas
  stroke(255, 235, 235);
  strokeWeight(10);
  fill(255, 220, 220);
  triangle(420, 80, 460, 200, 560, 115);
  triangle(640,115,740,200,780,80);


  //ojos
  noStroke();
  fill(255, 225, 225);
  circle(540, 190, 45);
  circle(660, 190, 45);

  fill(0);
  circle(540, 190, 15);
  circle(660, 190, 15);


  //nariz y boca
  fill(255, 190, 190);
  ellipse(600, 300, 70, 35);

  fill(255, 210, 210);
  ellipse(600, 270, 90, 65);

  fill(0);
  ellipse(580, 270, 10, 20);
  ellipse(620, 270, 10, 20);

  stroke(255, 210, 210);
  strokeWeight(1);
  line(560,235,555,265);
  line(645,265,640,235);

}
