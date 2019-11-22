// Variaveis do Jogador //
var x = 300,
  y = 400;

// Variaveis para Respostas //
var flag = true;

// Variaveis do Disparo //
var xd = 0,
  yd = 0;
var estadoDisparo = false;

// Variaveis do Inimigo //
var raioP = 25,
  raioO = 5,
  raioT = 30,
  xi = 100,
  yi = 120,
  vxo = [],
  vyo = [],
  vtam = [],
  qtObj = 20;

// Variaveis de Exposição //
var tela = 1,
  vidas = 3,
  pontos = 0,
  nivel = 1,
  barreiraDePontos = 100,
  nome = prompt('Digite seu nome grande guerreiro ou guerreira:'),
  xe = 30,
  ye = 40;

// Imagens do Jogo //
var fundoI, fundo2, img1, disparo, inimigos, balaoN1, prof, balaoN2, balaoN3, profa, GO, PF, imgnivel = [ ];

function preload() {
  fundoI = loadImage('inicio.jpg');
  fundo2 = loadImage('sala de aula.jpg');
  img1 = loadImage('imgN1.1.png');
  inimigos = loadImage('Inimigos.png');
  disparo = loadImage('disparo.png');
  balaoN1 = loadImage('BALÃO N1M.png')
  balaoN2 = loadImage('BALÃO N2.png');
  prof = loadImage('PROFESSOR.png');
  balaoN3 = loadImage('BALÃO N3.png');
  profa = loadImage('PROFESSORA.png');
  GO = loadImage('game over.jpg');
  PF = loadImage('PERSONAGEM FORMADA.png');
 // mySound = loadSound('parabains.mp3');
 // somfinal = loadSound('som-final.mp3');
  for( var i = 0; i < 3; i++){
    imgnivel[i] = loadImage('imgeN_'+i+'.png');
  }
}


function setup() {
  createCanvas(665, 500);
  // textFont(fontJ); 
  frameRate(60);

  // Quantidade de Inimigos do Jogo //
  for (var i = 0; i < qtObj; i++) {
    vxo[i] = random(0, 665);
    vyo[i] = random(-10, -100);
    vtam[i] = random(15, 30);
  }
  
  img1 = imgnivel[1]; 

}

function draw() {

  if (tela == 1) {
    background(fundoI);
    textSize(20);
    fill(0);
    text('Parabéns, você conseguiu derrotar o ENEM e ingressar em C&T.\n                                  Seja Bem-Vindo, ' + nome + '!\n                         Aperte Alt para começar o jogo', xe, ye);

    if (keyIsDown(18)) { //tecla alt
      tela = 2
    }
  }

  if (tela == 2) {
    background(fundo2);
    // Apresentação dos Inimigos e Colisao entre o jogador e o inimigo // 
    for (var i = 0; i < qtObj; i++) {
      image(inimigos, vxo[i], vyo[i], vtam[i], vtam[i]) // inimigo
      if (dist(vxo[i], vyo[i], x, y) < raioP + raioO) {
        x = 300;
        y = 400;
        vidas--;
      }
      vyo[i]++
      if (vyo[i] > 500) {
        vxo[i] = random(25, 640)
        vyo[i] = random(0, -100);
      }
      // OBS: se juntar as chaves o jogador pode empurrar o objeto
      //OBS: se botar variável "x" no lugar de "y" ele muda para transversal
    }
    // Personagem e Movimentação //
    image(img1, x, y);
    if (keyIsDown(RIGHT_ARROW)) {
      x = x + 5;
      if (x > 630) { // evitar da personagem passar do limite 
        x = 630;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      x = x - 5;
      if (x < 0) { // evitar da personagem passar do limite 
        x = 0;
      }
    }

    // Disparos //
    if (keyIsDown(32) && estadoDisparo == false) {
      xd = x;
      yd = y;
      estadoDisparo = true;
    }
    if (estadoDisparo) {
      image(disparo, xd, yd);
      yd = yd - 20;
      if (yd < 0) {
        estadoDisparo = false
      }

      // Parte dos Inimigos  //  
      for (i = 0; i < qtObj; i++) {
        if (dist(vxo[i], vyo[i], xd, yd) < raioT + raioO) {
          vxo[i] = 700;
          vyo[i] = 700;
          pontos = pontos + 1
        }
      }
    }


    // Parte de Exposição //
    fill(0);
    textSize(25);
    text('Vidas: ' + vidas, 10, 30);
    text('Pontos: ' + pontos, 288, 30);
    text('Nivel: ' + nivel, 500, 30);

    if (pontos == 20) {
      tela = 3; // Nivel de VGA
      estadoDisparo = false
      flag = true;
    }
    if (pontos == 70) {
      tela = 4; // Nivel de PC
      estadoDisparo = false
      flag = true;
    }
    if (pontos >= 100) {
      tela = 5; // Nivel de C1
      estadoDisparo = false
      flag = true;
    }
    if (vidas <= 0) {
      tela = 6;
      estadoDisparo = false
      flag = true;
    }

  }

  // Perguntas//

  // Tela 3 & Pergunta de VGA //
  if (tela == 3) {
    background(fundo2);
    image(balaoN1, 100, 30);
    image(profa, 80, 220);
    fill(0);
    textSize(25);
    text('Vidas: ' + vidas, 10, 30);
    text('Pontos: ' + pontos, 288, 30);
    text('Nivel: ' + nivel, 500, 30);
    text('VGA', 180, 30);
    if (keyIsDown(68)) { // resposta certa do jogo que é a "D"
      nivel = 2;
      tela = 2;
      qtObj = qtObj + 10;
      pontos++;
      img1 = imgnivel[0]; 
      for (i = 0; i < 10; i++) {
        vxo.push(random(0, 665));
        vyo.push(random(0, 100));
        vtam.push(random(15, 30));
      }
      clear();
    }
    if ((keyIsDown(65) || keyIsDown(66) || keyIsDown(67)) && flag == true) { //         respostas erradas
      vidas--
      if (vidas <= 0) {
        tela = 6
      }
      flag = false
    }
    if (flag == false) {
      text("Você errou. Responda novamente\nPressione ENTER", 250, 450);
      if (keyIsDown(ENTER)) {
        flag = true
      }
    }
  }

  // Tela 4 & Pergunta de PC //
  if (tela == 4) {
    background(fundo2);
    image(balaoN2, 100, 30);
    image(prof, 80, 220);
    fill(0);
    text('Vidas: ' + vidas, 10, 30);
    text('Pontos: ' + pontos, 288, 30);
    text('Nivel: ' + nivel, 500, 30);
    text('PC', 180, 30);
    
    if (keyIsDown(70)) { // resposta certa do jogo que é a "F"
      nivel = 3;
      tela = 2;
      qtObj = qtObj + 10;
      pontos++;
      img1 = imgnivel[2]; 
      for (i = 0; i < 10; i++) {
        vxo.push(random(0, 665));
        vyo.push(random(0, 100));
        vtam.push(random(15, 30));
      }
      clear();
    }

    if ((keyIsDown(69) || keyIsDown(71) || keyIsDown(72)) && flag == true) { //respostas erradas
      vidas--;
      if (vidas <= 0) {
        tela = 6
      }
      flag = false
    }
    if (flag == false) {
      text("Você errou. Responda novamente\nPressione ENTER", 250, 450);
      if (keyIsDown(ENTER)) {
        flag = true
      }

    }
  }

  // Tela  & Pergunta de C1 // 
  if (tela == 5) {
    background(fundo2);
    image(balaoN3, 100, 30);
    image(profa, 80, 220);
    fill(0);
    textSize(25);
    text('C1', 180, 30);
    text('Vidas: ' + vidas, 10, 30);
    text('Pontos: ' + pontos, 288, 30);
    text('Nivel: ' + nivel, 500, 30);
    
    if (keyIsDown(74)) { // resposta certa do jogo que é a "J"
      nivel = 'Fim de Jogo';
      tela = 7;
      for (i = 0; i < 10; i++) {
        vxo.push(random(0, 665));
        vyo.push(random(0, 100));
        vtam.push(random(15, 30));
      }
      clear();
    }

    if ((keyIsDown(73) || keyIsDown(75) || keyIsDown(76)) && flag == true) { //         respostas erradas
      vidas--;
      if (vidas <= 0) {
        tela = 6;
      }
      flag = false;
      if (flag == false) {
        text("Você errou. Responda novamente\nPressione ENTER", 250, 450); 
        if (keyIsDown(ENTER)) {
          flag = true
        }
      }
    }
  }

  if (tela == 6) { // Game Over
   // somfinal.setVolume(0.5);
   // somfinal.play();
    image(GO, 0, 0);
    textSize(25);
    fill(200);
    text('Pressione CONTROL para reiniciar o jogo', 80, 70);
    if (keyIsDown(CONTROL)) {
      tela = 1;
      vidas = 3;
      pontos = 0;
      qtObj = 20;
      for (var i = 0; i < qtObj; i++) {
        vxo[i] = random(0, 665);
        vyo[i] = random(-10, -100);
        vtam[i] = random(15, 30);
      }
    }
  }

  if (tela == 7) { // Ganhou o jogo e pode comemorar 
   // mySound.play();
    background(0);
    image(PF, 230, 200);
    textSize(25);
    fill(200);
    text('Parabéns, você conseguiu vencer as "piores" matérias\ndo primeiro semestre e agora está apto para continuar\n             sofrendo cada vez mais com o curso.', xe, ye);
    ye = ye + 1;
    if (ye > 150) {
      ye = 40;
    }
  }

}