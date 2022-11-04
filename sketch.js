const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var jogador, jogadorBase;
var computador, computadorBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  jogadorBase = new JogadorBase(300, random(450, height - 300), 180, 150);
  

 jogador = new Jogador(285, jogadorBase.body.position.y - 153, 50, 180);
 
  computadorBase = new ComputadorBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computador = new Computador(
    width - 280,
    computadorBase.body.position.y - 153,
    50,
    180
  );

  
}

function draw() {
  background(189);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(60);
  text("ARQUEIRO ÉPICO", width / 2, 100);

 
  jogadorBase.display();
  
 
  jogador.display();
  

  computadorBase.display();
  computador.display();
  
}
