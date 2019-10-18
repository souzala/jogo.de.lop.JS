var x = 100;
var y = 400;
var ao = 0;
var xo = 0;
var yo = 50;
var zo = 70;
var xd = 0;
var yd = 0;

// Variaveis de Posição //


var estadoDisparo = false

// Variaveis de Posição Importante //


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(20);
 
// Desenho do Plano //  
 
 
  ellipse(x,y,40,40);
 
if(keyIsDown(RIGHT_ARROW)) {
  x=x+5;
}
  if(keyIsDown(LEFT_ARROW)){
    x=x-5
  }
  if(keyIsDown(UP_ARROW)){
    y=y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    y=y+5
  }
  if(keyIsDown(CONTROL) && estadoDisparo ==false ) {
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if (estadoDisparo) {
  ellipse(xd, yd, 4, 25);
    yd = yd - 30;
    if( yd < 0) {
      estadoDisparo = false
  }
}
// Parte de controle do Jogador //
 
 
  rect(xo,400,40,10)
  xo=xo+4;
  if(xo>500){
    xo= -random(1000);
    console.log(xo);
  }
  rect(zo,250,40,10)
  zo=zo+6;
  if(zo>500){
    zo= -random(1000);
  }  
  rect(ao,150,40,10)
  ao=ao+8;
  if(ao>500){
    ao= -random(1000);
  }
  rect(xo,yo,40,10)
  yo=yo+1;
  if(yo>500){
    yo= -random(1000);
  }  
 
}

// Parte de Movimentação de Objetos //
