let circleRedX, circleBlueX, circleRedY, circleBlueY;
let circleRedSpeed, circleBlueSpeed, circleRedSpeedY, circleBlueSpeedY;
let circleRedColor, circleBlueColor;
let flag = true;
let occurredCollision = false;
let collisionTime;

function setup() {
  createCanvas(600,600);
  circleRedX = width / 4;
  circleBlueX = 3 * width / 4;
  circleRedY = height / 4; 
  circleBlueY = 3 * height / 4;
  circleRedSpeed = 8;
  circleBlueSpeed = 2;
  circleRedSpeedY = 8;
  circleBlueSpeedY = 5;
  circleRedColor = color(255, 0, 0); //rojo
  circleBlueColor = color(0, 0, 255); //azul
}

function draw() {
  background( 0, 10, 55);
  //circulos
  fill(circleRedColor);
  ellipse(circleRedX, circleRedY, 60, 60);
  fill(circleBlueColor);
  ellipse(circleBlueX, circleBlueY, 60, 60);
  
  //posicion de los círculos
  circleRedX += circleRedSpeed;
  circleBlueX += circleBlueSpeed;
  circleRedY += circleRedSpeedY;
  circleBlueY += circleBlueSpeedY;
  
  //colision con las paredes
  if (circleRedX < 20 || circleRedX > width - 20) {
    circleRedSpeed *= -1;
  } 
  if (circleBlueX < 20 || circleBlueX > width - 20) {
    circleBlueSpeed *= -1;
  }
  
  if (circleRedY < 20 || circleRedY > height - 20) {
    circleRedSpeedY *= -1;
  } 
  if (circleBlueY < 20 || circleBlueY > height - 20) {
    circleBlueSpeedY *= -1;
  }
  
  //colision entre los circulos 
  if (dist(circleRedX, circleRedY, circleBlueX, circleBlueY) < 35) {
    circleRedSpeed *= -1;
    circleBlueSpeed *= -1;
    circleRedColor = color(148, 0, 211); // Violeta
    circleBlueColor = color(148, 0, 211); // Violeta
    occurredCollision = true;
    collisionTime = millis();
  }
  
  // se dispersa el color violeta después de la colision
  if (occurredCollision && millis() - collisionTime > 1500) {
    circleRedColor = color(255, 0, 0); // Rojo
    circleBlueColor = color(0, 0, 255); // Azul
    occurredCollision = false;
  }
}