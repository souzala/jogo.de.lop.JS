	/* 
    Equipe: 
        Nome Matheus de Lima Araujo- Subturma C (Líder) 
        Nome Nathan Telles Santos Rodrigues - Subturma D 
        Etapa 1, 2, 3 e 4; 
*/
var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    

var qtEstrelas = 50; 


var vidas = 5;
var pontos = 0;
var level = 1;
var x = 250;
var y = 450;


var xd, yd;
var x0 = [];
var y0 = [];
var QtObj=10;

var lixo=[];
let img1;
let lixo1;

tela=1
function preload(){
  enemy=loadImage("lixo1.png")
  nave=loadImage("img1.png")
}
function setup() {
  createCanvas(500, 500);
  for(var i =0; i< QtObj; i++){
   x0[i]=random(0,500)
   y0[i]=random(0,100)
    
  }
  
  for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
	}
  nave=loadImage("img1.png")
   for (i = 1; i < 5; i++) {
    lixo[i] = loadImage("lixo"+i+".png");
  }
}

function draw() {

  //texto inicial
  if(tela==1){
    
    background(0);
    fill(255,255,255)  
    textSize(40);
    text("Space Junk Destroyer", 60, 50)
    textSize(20);
    text("  No ano de 2115 D.C. a humanidade percebe uma"+"\n"+"nova e pequena ameaça, mas que pode ser devasta-"+"\n"+"dora. Conseguimos salvar o planeta das catástrofes"+"\n"+"que causaríamos a ele com nossa falta de consciência"+"\n"+"com lixo e poluição, mas nem tudo são flores."+"\n"+
        "  Após a 3º neo-corrida espacial entre Brasil (como"+"\n"+"principal polo a secular barreira do inferno) e os"+"\n"+"Estados Unidos da América(e a NASA), a humanidade"+"\n"+"percebeu  necessidade de cuidar, também, do lixo"+"\n"+"espacial, já que todas as coisas que lançamos na orbi-"+"\n"+"ta da terra continuam lá depois de centenas de anos."+"\n"+
         "  Uma das maneiras propostas pela Barreira do Inferno"+"\n"+"foi usar um raio encolhedor e deixar todas aquelas"+"\n"+"coisas em um tamanho que não nos atrapalhe."+"\n"+ 
         "  Você é o responsável por essa missão junto com a"+"\n"+"nave Incoliom-5.",10,90)
    textSize(20);
    text("[Pressione ENTER para começar]",195,480)
    
    
    if(keyIsDown(13)){
     tela=2;
     }
     }
  if(tela==2){
  background(0);
  fill(255,255,255)
   for(i = 0; i < qtEstrelas; i++) {
	  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  
  // movimenta objetos 
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = -random(0,height); 		  
	  }
  }
    
  //tiro
  ellipse(xd, yd, 15, 15)
  var efeitoDisparo = false
  if(keyIsDown(CONTROL) && efeitoDisparo == false){
    xd = x+30
    yd = y 
    efeitoDisparo = true
  }
  if(efeitoDisparo = true){
    yd = yd - 7;
    }
  

  //movimento da elipse
  
  if (keyIsDown(RIGHT_ARROW)) {
    x=x+7
  }
  if (keyIsDown(LEFT_ARROW)) {
    x=x-7
  }
  if(keyIsDown(UP_ARROW)) {
    y = y - 7
  }
  if(keyIsDown(DOWN_ARROW)){
    y = y + 7
  }
  if(x > 500){
    x=0
  }
  if(x < 0){
    x=500
  }
  if(y > 500){
    y= 0
  }
  if(y<0){
    y=500
  }
  //fim
  //movimento do inimigo
//NIVEL1
if(pontos>=0 && pontos<15){
  QTObj=4;
   for(var i =-100; i< QtObj; i++){
      y0[i] = y0[i] + 4;
    if(y0>500){
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
      }
  
     if(x0[i] > 500){
    x0[i]=random(0, 500)
    }
    if(x0[i] < 0){
    x0[i]=random(0, 300)
  }
}
}
//NIVEL2
  if(pontos>=15 && pontos<30){
    level=2;
  QTObj=6;
   for(var i =-100; i< QtObj; i++){
      y0[i] = y0[i] + 4;
    if(y0>500){
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
      }
  
     if(x0[i] > 500){
    x0[i]=random(0, 500)
    }
    if(x0[i] < 0){
    x0[i]=random(0, 300)
  }
}
}
//NIVEL3
  if(pontos>=30 && pontos<45){
    level=3;
  QTObj=6;
   for(var i =-100; i< QtObj; i++){
      y0[i] = y0[i] + 5;
    if(y0>500){
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
      }
  
     if(x0[i] > 500){
    x0[i]=random(0, 500)
    }
    if(x0[i] < 0){
    x0[i]=random(0, 300)
  }
}
}
  //NIVEL4
  if(pontos>=45 && pontos<60){
    level=4;
  QTObj=7;
   for(var i =-100; i< QtObj; i++){
      y0[i] = y0[i] + 5;
    if(y0>500){
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
      }
  
     if(x0[i] > 500){
    x0[i]=random(0, 500)
    }
    if(x0[i] < 0){
    x0[i]=random(0, 300)
  }
}
}

    //NIVEL5
  if(pontos>=60 && pontos<65){
    level=5;
    QTObj=10;
   for(var i =-100; i< QtObj; i++){
      y0[i] = y0[i] + 6;
    if(y0>500){
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
      }
  
     if(x0[i] > 500){
    x0[i]=random(0, 500)
    }
    if(x0[i] < 0){
    x0[i]=random(0, 300)
  }
}
  if(pontos==65){
  textSize(40)
  fill(255,255,255)
  text("PARABÉNS", 160, 250)
  textSize(20)
  fill(255,255,255)
  text("Graças a você estamos mais perto de salvar"+"\n"+"                    o nosso planeta.", 80, 280)
    x=250;
    y=450;
    pontos=0
  if(keyIsDown(32)) { 
    vidas=5;
    pontos=0;
  }
}
}
  //fim
//NIVEL1-IMG
   if(pontos>=0 && pontos<15){
     QtObj=4;
   for(var i =0; i< QtObj; i++){
    for (var o = 1; o < 5; o++){ 
      enemy=image(lixo[o],x0[i],y0[i],40, 40 )
    }
      if(y0[i]>500){
       y0[i]=random(0)
     }
   }
  }
//NIVEL2-IMG
   if(pontos>=15 && pontos<30){
     QtObj=6;
   for(var i =0; i< QtObj; i++){
    for (var o = 1; o < 5; o++){ 
      enemy=image(lixo[o],x0[i],y0[i],40, 40 )
    }
      if(y0[i]>500){
       y0[i]=random(0)
     }
   }
  }
//NIVEL3-IMG
   if(pontos>=30 && pontos<45){
     QtObj=6;
   for(var i =0; i< QtObj; i++){
    for (var o = 1; o < 5; o++){ 
      enemy=image(lixo[o],x0[i],y0[i],40, 40 )
    }
      if(y0[i]>500){
       y0[i]=random(0)
     }
   }
  }
//NIVEL4-IMG
   if(pontos>=45 && pontos<60){
     QtObj=7;
   for(var i =0; i< QtObj; i++){
    for (var o = 1; o < 5; o++){ 
      enemy=image(lixo[o],x0[i],y0[i],40, 40 )
    }
      if(y0[i]>500){
       y0[i]=random(0)
     }
   }
  }
  
//NIVEL5-IMG
   if(pontos>=60 && pontos<65){
     QtObj=8;
   for(var i =0; i< QtObj; i++){
    for (var o = 1; o < 5; o++){ 
      enemy=image(lixo[o],x0[i],y0[i],40, 40 )
    }
      if(y0[i]>500){
       y0[i]=random(0)
     }
   }
  }

  
  fill(0, 51, 102 )
  Pers=image (nave,x,y,60,60)
  for(var i =0; i< QtObj; i++){
 
  if(dist(x+30, y, x0[i], y0[i]) <40  ){
    vidas=vidas-1
   
    x0[i]=random(-500,-50);
    y0[i]=random(-500,-50);
  }
  }
for(var i = 0; i< QtObj; i++){
if(dist(xd,yd,x0[i],y0[i])<40){
 pontos=pontos + 1; 
  x0[i]=random(-500,-50);
  y0[i]=random(-500,-50);
  xd = random(-500,-50);
  yd= random(-500,-50);
}
}

  fill(255,255,255);
  textSize(18);
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 200, 30);
  text('Nivel: '+level, 400, 30);

  
}
if(vidas==0){
  tela=3
}
  if(tela==3){
  background(0);
  textSize(40)
  fill(255,255,255)
  text("GAME OVER", 130, 250)
  textSize(20)
  fill(255,255,255)
  text("Para jogar novamente pressione ESPAÇO", 80, 280)
    x=250;
    y=450;
  if(keyIsDown(32)) { 
    tela=2;
    level=0;
    vidas=5;
    pontos=0;
  }
}
  if(pontos==65){
    tela=4;
  }
  if(tela==4){
  background(0);
  textSize(40)
  fill(255,255,255)
  text("PARABÉNS", 150, 250)
  textSize(20)
  fill(255,255,255)
  text("Graças a você estamos mais perto de salvar"+"\n"+"                    o nosso planeta.", 70, 280)
  textSize(20)
  text("Para jogar novamente pressione ESPAÇO",70, 380)
  if(keyIsDown(32)) {
    level=1;
    vidas=5;
    tela=2;
    pontos=0;
  }
  }
}