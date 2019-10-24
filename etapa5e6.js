var x = 100;
var y = 400;
var raioP = 25;
var xi = 100;
var yi = 120;
var raioO = 30;

var bo = 0; // in rect //
var ao = 0; // in rect //
var xo = 0; // in rect //
var yo = 50; // free //
var zo = 70; // free //
var xd = 0; // in rect //
var yd = 0; // in rect //

// Variaveis de Posição //

var vidas = 3;
var pontos = 0;
dificuldade = 1;

// Variaveis de Exposição //


var estadoDisparo = false

// Variaveis de Posição Importante //


function setup() {
  createCanvas(665, 500);
}

function draw() {
  background(1);
 

 
// Desenho do Plano //  
  fill('mediumaquamarine');
  ellipse(x,y,2*raioP,2*raioP);
 
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
  
//Parte da Colisão dos Objetos// 
  fill(50)
  ellipse(xi,yi,70,70);
  if ( dist(x, y, xi, yi) < raioP + raioO) {
    x = 100;
    y = 400;
   
  }
 
  if (keyIsDown(32) && estadoDisparo ==false ) {
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if (estadoDisparo)
  fill('lime'); {
  ellipse(xd, yd, 4, 25);
    yd = yd - 30;
    if( yd < 0) {
      estadoDisparo = false
  }
}
// Parte de controle do Jogador //
 
  fill('darkcyan');
  rect(xo,400,40,10)
  xo=xo+4;
  if(xo>665){
    xo= -random(1000);
    console.log(xo);
  }
    fill('silver');
  rect(zo,250,40,10)
  zo=zo+6;
  if(zo>665){
    zo= -random(1000);
  }  
  fill('darkred');
  rect(ao,150,40,10)
  ao=ao+8;
  if(ao>665){
    ao= -random(1000);
  }
  fill('gold');
  rect(bo,xo,40,10)
  bo=bo+1
  if(bo>665){
    bo= -random(1000);
  }  
  fill('gold');
  rect(xo,yo,40,10)
  yo=yo+1;
  if(yo>665){
    yo= -random(1000);
  }  
  fill(0, 100, 100);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 288, 30);
  text('Nivel: '+dificuldade, 589, 30);
  
}

// Parte de Movimentação de Objetos //
