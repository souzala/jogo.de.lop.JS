//Variaveis do Inimigo//
var vxo = [  ];
var vyo = [  ];
var vtam = [  ] 
var qtObjetos = 20;

// Variaveis do Jogador //
var raioP = 25;
var raioO = 30;
var y = 400;
var x = 100;
var xd = 0; // in Player //
var yd = 0; // in Player //
var estadoDisparo = false // in Player //

// Variaveis de Exposição //
var vidas = 3;
var pontos = 0;
var nivel = 1;
var barreiraDePontos = 1000;


function setup() {
  createCanvas(620, 500);
  frameRate(30);
  for( var i=0; i < qtObjetos; i ++) {
  vxo[i] = random(0,500);
  vyo[i] = random(0,600);
  vtam[i] = random(10,40);
  }
}

 
function draw() {
    background(0);
  
// Desenho do Objeto e Movimentação//    
  
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
  
//Disparo//   
    
    if (keyIsDown(32) && estadoDisparo ==false ) {
      xd = x;
      yd = y;
      estadoDisparo = true;
    }
    if (estadoDisparo)
    fill('gold');{
    ellipse(xd, yd, 4, 25);
    yd = yd - 30;
    }
    if( yd < 0) {
      estadoDisparo = false
    }  
    for( var i=0; i < qtObjetos; i ++) {
    ellipse( vxo[i] , vyo[i], vtam[i],vtam[i])
      if ( dist(vxo[i], vyo[i], vtam[i], vtam[i]) < raioP + raioO) { 
      x = 100;
      y = 400;
      }
      vxo[i]=vxo[i]+4;
      if(vxo[i]>665){
      vxo[i]= -random(1000);
      }
    }
  
//Parte de Exposição//
  
 fill(0, 100, 100);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+nivel, 288, 30);
  text('Nivel: '+pontos, 500, 30);
  pontos = pontos + 10
  if( pontos > barreiraDePontos ) {
    nivel ++;
    barreiraDePontos = barreiraDePontos + 1000
  }  
}
