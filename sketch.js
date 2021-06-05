let tayinicio;
//nivel 1
let tay1;
let llave;
let cd;
let kanye;
let fondo1;
let barra1;
let inst1;
let levelA;
let enemyK;
let taylor;
//nivel 2
let tay2;
let avion;
let harry;
let fondo2;
let barra2;
let inst2;
let levelB;
let taylor2;
let enemyH;
//nivel 3
let tay3;
//nivel 4
let tay4;
//nivel 5
let tay5;

let pantalla;

function preload() {
  tayinicio = loadImage('recursos/inicio.gif');
  tay1 = loadImage('recursos/tay1.png');
  kanye = loadImage('recursos/kanye.png');
  fondo1 = loadImage('recursos/fondo.png');
  inst1 = loadImage('recursos/inst1.png');
  llave = loadImage('recursos/llave.png');
  cd = loadImage('recursos/cd.png');
  barra1 = loadImage('recursos/barra1.png');

  tay2 = loadImage('recursos/tay2.png');
  harry = loadImage('recursos/harry.png');
  fondo2 = loadImage('recursos/fondo2.png');
  inst2 = loadImage('recursos/inst2.png');
  avion = loadImage('recursos/avion.png');
  barra2 = loadImage('recursos/barra2.png');
}


function setup() {
  createCanvas(1400, 700);
  pantalla = 4;
  levelA = new LevelA();
  taylor = new Tay(levelA.getMapReference());
  enemyK = new Kanye(levelA.getMapReference());
  levelB = new LevelB();
  taylor2 = new Tay2(levelB.getMapReference2());
  enemyH = new Harry(levelB.getMapReference2());
}

function draw() {
  background(220);
  switch (pantalla) {
		case 0:
			// pantalla de inicio
      image(tayinicio, 0, 0);
		break;
		case 1:
			// instrucciones 1
      image(inst1, 0, 0);
		break;
    case 2:
      // nivel 1
      levelA.mostrar();
      taylor.mostrar();
      enemyK.mostrar();
      enemyK.mover();
      verifyEnemy();
    break;
    case 3:
			// instrucciones 2
      image(inst2, 0, 0);
		break;
    case 4:
			// nivel 2
      levelB.mostrar();
      taylor2.mostrar();
      enemyH.mostrar();
      enemyH.mover();
      verifyEnemy();
		break;
  }
}
  function verifyEnemy() {
    switch (pantalla) {
      case 0:
      break;
      case 2:
        if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX(), enemyK.getKPosY()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveCol = 6;
        taylor.llaveFil = 2;
        taylor.llaveX = (taylor.llaveCol * 100) + 10;
        taylor.llaveY = (taylor.llaveFil * 100) + 10;
        taylor.cdAtrapado = false;
        taylor.cdCol = 0;
        taylor.cdFil = 6;
        taylor.cdX = (taylor.cdCol * 100) + 10;
        taylor.cdY = (taylor.cdFil * 100) + 10;
        taylor.pjCol = 0;
        taylor.pjFil = 0;
        taylor.xPos = (taylor.pjCol * 100);
        taylor.yPos = (taylor.pjFil * 100) + 100;
      }
      if (dist(taylor.getXPos(), taylor.getYPos(), enemyK.getKPosX2(), enemyK.getKPosY2()) < 100) {
        taylor.llaveAtrapada = false;
        taylor.llaveCol = 6;
        taylor.llaveFil = 2;
        taylor.llaveX = (taylor.llaveCol * 100) + 10;
        taylor.llaveY = (taylor.llaveFil * 100) + 10;
        taylor.cdAtrapado = false;
        taylor.cdCol = 0;
        taylor.cdFil = 6;
        taylor.cdX = (taylor.cdCol * 100) + 10;
        taylor.cdY = (taylor.cdFil * 100) + 10;
        taylor.pjCol = 0;
        taylor.pjFil = 0;
        taylor.xPos = (taylor.pjCol * 100);
        taylor.yPos = (taylor.pjFil * 100) + 100;
      }
      break;
      case 4:
        //if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX() || enemyH.getHPosX2() || enemyH.getHPosX3(), enemyH.getHPosY() || enemyH.getHPosY2() || enemyH.getHPosY3()) < 100) {
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX(), enemyH.getHPosY()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX2(), enemyH.getHPosY2()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      if (dist(taylor2.getXPos(), taylor2.getYPos(), enemyH.getHPosX3(), enemyH.getHPosY3()) < 100){
        taylor2.llaveAtrapada = false;
        taylor2.llaveCol = 11;
        taylor2.llaveFil = 1;
        taylor2.llaveX = (taylor2.llaveCol * 100);
        taylor2.llaveY = (taylor2.llaveFil * 100);
        taylor2.avionAtrapado = false;
        taylor2.avionCol = 11;
        taylor2.avionFil = 6;
        taylor2.avionX = (taylor2.avionCol * 100);
        taylor2.avionY = (taylor2.avionFil * 100);
        taylor2.pjCol = 0;
        taylor2.pjFil = 1;
        taylor2.xPos = (taylor2.pjCol * 100);
        taylor2.yPos = (taylor2.pjFil * 100);
      }
      break;
      
    
  }
  }

  function mousePressed() {
    //seguir a instrucciones
    switch (pantalla) {
      case 0:
        if (dist(mouseX, mouseY, 1203, 610) < 100) {
          pantalla = 1;
        }
      break;
      // empezar nivel 1
      case 1:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 2;
        }
      break;
      //empezar nivel 2
      case 3:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 4;
        }
      break;
    }
  }

  function keyPressed() {
    
    switch (pantalla) {
      case 0:
        break;
      //nivel 1
      case 2:
        taylor.mover();
        break;
      //nivel 2
      case 4:
        taylor2.mover();
        break;

  }
}
  


