// Variaveis do Jogador //
var x = 300, y = 400;

// Variaveis do Disparo //
var xd = 0, yd = 0; 
var estadoDisparo = false;

// Variaveis do Inimigo //
var raioP = 25, raioO = 5, raioT = 30, xi = 100, yi = 120, vxo = [  ], 
    vyo = [  ], vtam = [  ], qtObj = 20;

// Variaveis de Exposição //
var tela = 1, vidas = 3, pontos = 0, nivel = 1, barreiraDePontos = 100,       nome = 'Larissa', xe = 30, ye = 40;

// Imagens do Jogo //
var fundoI, fundo2, img1, disparo, inimigos, balaoN1, prof, balaoN2,           balaoN3, profa, GO, PF;

function preload(){
  fundoI = loadImage('inicio.jpg');
  fundo2 = loadImage('sala de aula.jpg');
  img1  = loadImage('imgN1.1.png');
  inimigos = loadImage('Inimigos.png');
  disparo = loadImage('disparo.png');
  balaoN1 = loadImage('BALÃO N1.png')
  balaoN2 = loadImage('BALÃO N2.png');
  prof = loadImage('PROFESSOR.png');
  balaoN3 = loadImage('BALÃO N3.png');
  profa = loadImage('PROFESSORA.png');
  GO = loadImage('game over.jpg');
  PF = loadImage('PERSONAGEM FORMADA.png');
}


function setup() {
  createCanvas(665, 500);
  frameRate(60);
  
  // Quantidade de Inimigos do Jogo //
  for( var i=0; i < qtObj; i ++) {
   vxo[ i ] = random( 0,665);
   vyo[ i ] = random( 0,100);
   vtam[ i ] = random( 15,30);
  }
  
}

function draw() {
  
  if( tela ==1) {
    background(fundoI);
    textSize(20);
    fill(0)
    text('Parabéns, você conseguiu derrotar o ENEM e ingressar em C&T.\n                                  Seja Bem-Vindo, '+nome+'!\n                         Aperte Alt para começar o jogo', xe, ye)
                
      if(keyIsDown(18)){ //tecla alt
        tela = 2
      }
   }

if(tela == 2){  
 background(fundo2); 
 // Apresentação dos Inimigos e Colisao entre o jogador e o inimigo // 
  for( var i=0; i < qtObj; i++) {
  image(inimigos, vxo[i] , vyo[i], vtam[ i ],vtam[ i ]) // inimigo
     if ( dist(vxo[i], vyo[i], x, y) < raioP + raioO) { 
        x = 300;
        y = 400;
        vidas--;
     }
  vyo[i]++
      if(vyo[i]>500){
        vyo[i]= random(10000) ;
      
  }
// OBS: se juntar as chaves o jogador pode empurrar o objeto
//OBS: se botar variável "x" no lugar de "y" ele muda para transversal
  
  
 // Personagem e Movimentação //
    image(img1, x, y);     
  if(keyIsDown(RIGHT_ARROW)) {
  x=x+5;
    if(x > 630){ // evitar da personagem passar do limite 
    x = 630;
    }
 }
  if(keyIsDown(LEFT_ARROW)){
    x=x-5
    if(x < 0){ // evitar da personagem passar do limite 
    x = 0;
    }
  }
  
  // Disparos //
    if (keyIsDown(32) && estadoDisparo ==false ) {
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if (estadoDisparo){
      image(disparo, xd, yd);
      yd = yd - 20;
        if( yd < 0) {
          estadoDisparo = false
        }
    
// Parte dos Inimigos  //  
          for(i=0;i<qtObj;i++) { 
              if ( dist(vxo[i], vyo[i], xd, yd) < raioT + raioO) { 
                 vxo[i] = 700;
                 vyo[i] = 700; 
                 pontos = pontos + 1
              }
          }
  } 
  
  
 // Parte de Exposição //
  fill(0);
  textSize(25);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 288, 30);
  text('Nivel: '+nivel, 500, 30);
  
  if(pontos >= 20 && pontos < 30 ){
    tela = 3; // Nivel de VGA
  }
  if(pontos >= 30 && pontos <= 40 ){
    tela = 4; // Nivel de PC
  }
  if(pontos > 40 && pontos <= 50 ){
    tela = 5; // Nivel de C1
  }
  
  
} 
  
  // Perguntas//
  
  // Tela 3 & Pergunta de VGA //
  if(tela == 3 ){
  background(fundo2);
  image(balaoN1, 100, 30);
  image(profa, 80, 220);
  fill(0);
  textSize(25);
  text('Vidas: '+vidas, 10, 30);
  text('VGA', 180, 30);
  text('Pontos: '+pontos, 325, 30);
  text('Nivel: '+nivel, 560, 30);
    if(keyIsDown(68)){ // resposta certa do jogo que é a "D"
      nivel = 2;
      tela = 2;
      qtObj = qtObj + 10;
      clear();
    }
    
    else if(keyIsDown(65) || keyIsDown(66) || keyIsDown(67) ) { //         respostas erradas
      pontos--
      text("Você errou. Responda novamente", 250,450);
        if(pontos <= 0){
          tela = 6 
        }
    } 
   }
  
  // Tela 4 & Pergunta de PC //
  if(tela==4){
  image(balaoN2, 100, 30);
  image(prof, 80, 220);
  fill(0);
  textSize(25);
  text('Vidas: '+vidas, 10, 30);
  text('PC', 180, 30);
  text('Pontos: '+pontos, 325, 30);
  text('Nivel: '+nivel, 560, 30);
      if(keyIsDown(70)){ // resposta certa do jogo que é a "F"
        nivel = 3;
        tela = 2;
        qtObj = qtObj + 10;
        clear();
      }    
    
      if(keyIsDown(69) || keyIsDown(71) || keyIsDown(72) ) { //respostas erradas
        pontos--
        text("Você errou. Responda novamente", 250,450);
          if(pontos <= 0){
            tela = 6 
        }
      }
       
  }
  
// Tela  & Pergunta de C1 // 
  if( tela == 5 ){
    image(balaoN3, 100, 30);
    image(profa, 80, 220);
    fill(0);
    textSize(25);
    text('Vidas: '+vidas, 10, 30);
    text('C1', 180, 30);
    text('Pontos: '+pontos, 325, 30);
    text('Nivel: '+nivel, 560, 30);
      if(keyIsDown(74)){ // resposta certa do jogo que é a "J"
        nivel = 'Fim de Jogo'
        tela = 7
        clear();
      }
    
      if(keyIsDown(73) || keyIsDown(75) || keyIsDown(76) ) { //         respostas erradas
        pontos--
        text("Você errou. Responda novamente", 250, 450);
          if(vidas <= 0){
            tela = 6;
          }
      }
  }
      
  if(tela == 6){ // Game Over
    image(GO, 0, 0);
  }
  
  if( tela == 7 ){ // Ganhou o jogo e pode comemorar 
    image(PF, 300, 50);
    background(0)
    textSize(25);
    text('Parabéns, você conseguiu vencer as "piores" matérias \ndo primeiro semestre e agora está apto para sofrer com o curso', x,y)
    fill(200);
    y = y + 1
      if(y>400){
        y = 0
      }
  }
}