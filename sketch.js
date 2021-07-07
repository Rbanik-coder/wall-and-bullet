var box,box1,box2,box3;
var wall,wall1,wall2,wall3;
var bullet,bullet1,bullet2,bullet3;
var thickness,speed,weight;
var b,b1,b2,b3,b4,b5,b6;

var cloud,cloud1,cloud2;
var cloud3,cloud4,cloud5;
var cloud6,cloud7,cloud8;
var star,star1,star2,star3;
var star4,star5,star6,star7;
var star8,star9,star10,star11;
var star12,star13,star14,star15;
var star16,star17,star17,star18;
var star19,star20,star21,star22;
var star23,star24,star25,star26;
var star27,star28,star29,star30,star31;
var grass,grass1,grass2,grass3,grass4,grass5,grass6,grass7,grass8,grass9,grass10,grass11,grass12,grass13,grass14,grass15,grass16;
var s,s1,s2,s3,s4,s5;
var a,a1,a2,a3,a4,a5,a6;

function setup() {
  createCanvas(600,852);

  thickness = random(20,30);
  speed = random(200,300);
  weight = random(30,50);
  
  box = createSprite(300,110,600,200);
  box.shapeColor="cyan";
  wall = createSprite(580,110,thickness,200);
  wall.shapeColor="darkblue";
  box1 = createSprite(300,320,600,200);
  box1.shapeColor = "cyan";
  wall1 = createSprite(20,320,20,200);
  wall1.shapeColor="darkblue";
  box2 = createSprite(300,530,600,200);
  box2.shapeColor="cyan";
  wall2 = createSprite(580,530,20,200);
  wall2.shapeColor="darkblue";
  box3 = createSprite(300,740,600,200);
  box3.shapeColor="cyan"
  wall3 = createSprite(20,740,20,200);
  wall3.shapeColor="darkblue";

  bullet = createSprite(50,80,80,15);
  bullet.shapeColor="black";
  bullet.velocityX=7;
  bullet1 = createSprite(550,362,80,15);
  bullet1.shapeColor="black";
  bullet2 = createSprite(50,560,80,15);
  bullet2.shapeColor="black";
  bullet3 = createSprite(550,730,80,15);
  bullet3.shapeColor="black";

  cloud = createSprite(150,280,150,30);
  cloud.shapeColor='white';
  cloud1 = createSprite(149,260,75,30);
  cloud1.shapeColor="white";
  cloud2 = createSprite(150,245,30,40);
  cloud2.shapeColor="white";

  cloud3 = createSprite(310,275,100,20);
  cloud3.shapeColor='white';
  cloud4 = createSprite(310,260,50,20);
  cloud4.shapeColor="white";
  cloud5 = createSprite(310,245,20,20);
  cloud5.shapeColor="white";

  cloud6 = createSprite(470,280,150,30);
  cloud6.shapeColor='white';
  cloud7 = createSprite(469,260,75,30);
  cloud7.shapeColor="white";
  cloud8 = createSprite(470,245,30,40);
  cloud8.shapeColor="white";

  star = createSprite(30,450,15,15);
  star.shapeColor="blue";
  star1 = createSprite(10,470,15,15);
  star1.shapeColor="blue";
  star2 = createSprite(50,470,15,15);
  star2.shapeColor="blue";
  star3 = createSprite(30,490,15,15);
  star3.shapeColor="blue";

  star4 = createSprite(100,450,15,15);
  star4.shapeColor="blue";
  star5 = createSprite(80,470,15,15);
  star5.shapeColor="blue";
  star6 = createSprite(120,470,15,15);
  star6.shapeColor="blue";
  star7 = createSprite(100,490,15,15);
  star7.shapeColor="blue";

  star8 = createSprite(170,450,15,15);
  star8.shapeColor="blue";
  star9 = createSprite(150,470,15,15);
  star9.shapeColor="blue";
  star10 = createSprite(190,470,15,15);
  star10.shapeColor="blue";
  star11 = createSprite(170,490,15,15);
  star11.shapeColor="blue";  

  star12 = createSprite(240,450,15,15);
  star12.shapeColor="blue";
  star13 = createSprite(220,470,15,15);
  star13.shapeColor="blue";
  star14 = createSprite(260,470,15,15);
  star14.shapeColor="blue";
  star15 = createSprite(240,490,15,15);
  star15.shapeColor="blue";

  star16 = createSprite(310,450,15,15);
  star16.shapeColor="blue";
  star17 = createSprite(290,470,15,15);
  star17.shapeColor="blue";
  star18 = createSprite(330,470,15,15);
  star18.shapeColor="blue";
  star19 = createSprite(310,490,15,15);
  star19.shapeColor="blue";

  star20 = createSprite(380,450,15,15);
  star20.shapeColor="blue";
  star21 = createSprite(360,470,15,15);
  star21.shapeColor="blue";
  star22 = createSprite(400,470,15,15);
  star22.shapeColor="blue";
  star23 = createSprite(380,490,15,15);
  star23.shapeColor="blue";

  star24 = createSprite(450,450,15,15);
  star24.shapeColor="blue";
  star25 = createSprite(430,470,15,15);
  star25.shapeColor="blue";
  star26 = createSprite(470,470,15,15);
  star26.shapeColor="blue";
  star27 = createSprite(450,490,15,15);
  star27.shapeColor="blue";

  star28 = createSprite(520,450,15,15);
  star28.shapeColor="blue";
  star29 = createSprite(500,470,15,15);
  star29.shapeColor="blue";
  star30 = createSprite(540,470,15,15);
  star30.shapeColor="blue";
  star31 = createSprite(520,490,15,15);
  star31.shapeColor="blue";

  grass = createSprite(50,170,20,80);
  grass.shapeColor="green";
  grass1 = createSprite(25,185,20,50);
  grass1.shapeColor="green";
  grass2 = createSprite(75,185,20,50);
  grass2.shapeColor="green";

  grass3 = createSprite(150,176,20,70);
  grass3.shapeColor="green";
  grass4 = createSprite(125,190,20,40);
  grass4.shapeColor="green";
  grass5 = createSprite(175,190,20,40);
  grass5.shapeColor="green";

  grass6 = createSprite(250,165,20,90);
  grass6.shapeColor="green";
  grass7 = createSprite(225,180,20,60);
  grass7.shapeColor="green";
  grass8 = createSprite(275,180,20,60);
  grass8.shapeColor="green";

  grass9 = createSprite(350,170,20,80);
  grass9.shapeColor="green";
  grass10 = createSprite(325,185,20,50);
  grass10.shapeColor="green";
  grass11 = createSprite(375,185,20,50);
  grass11.shapeColor="green";

  grass12 = createSprite(450,176,20,70);
  grass12.shapeColor="green";
  grass13 = createSprite(425,190,20,40);
  grass13.shapeColor="green";
  grass14 = createSprite(475,190,20,40);
  grass14.shapeColor="green";

  grass15 = createSprite(550,165,20,90);
  grass15.shapeColor="green";
  grass16 = createSprite(525,180,20,60);
  grass16.shapeColor="green";

  a = createSprite(320,790,580,15);
  a.shapeColor="yellow";
  a1 = createSprite(320,805,580,15);
  a1.shapeColor="magenta";
  a2 = createSprite(320,820,580,15);
  a2.shapeColor="orange";
  a3 = createSprite(320,833,580,15);
  a3.shapeColor="red";


}

function draw() {
  background("black");  

  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    bullet1.velocityX=-5;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor="red";
    }

    if(damage<10)
    {
      wall.shapeColor="blue";
    }
  }

  if(bullet1.isTouching(wall1)){
    bullet1.velocityX=0;
    bullet2.velocityX=3;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>20)
    {
      wall1.shapeColor="orange";
    }

    if(damage<20)
    {
      wall1.shapeColor="blue";
    }

  }
  
  if(bullet2.isTouching(wall2)){
    bullet2.velocityX=0;
    bullet3.velocityX=-7;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>30)
    {
      wall2.shapeColor="red";
    }

    if(damage<30)
    {
      wall2.shapeColor="blue";
    }
  }

  if(bullet3.isTouching(wall3)){
    bullet3.velocityX=0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>40)
    {
      wall3.shapeColor="orange";
    }

    if(damage<40)
    {
      wall3.shapeColor="blue";
    }

    if(frameCount%40===0)
    {
      b = createSprite(10,0,20,20);
      b.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b1 = createSprite(60,0,20,20);
      b1.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b2 = createSprite(110,0,20,20);
      b2.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b3 = createSprite(150,0,20,20);
      b3.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b4 = createSprite(200,0,20,20);
      b4.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b5 = createSprite(250,0,20,20);
      b5.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b6 = createSprite(300,0,20,20);
      b6.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b7 = createSprite(350,0,20,20);
      b7.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b8 = createSprite(400,0,20,20);
      b8.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b9 = createSprite(450,0,20,20);
      b9.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b10 = createSprite(500,0,20,20);
      b10.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b11 = createSprite(550,0,20,20);
      b11.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b12 = createSprite(600,0,20,20);
      b12.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);
      b13 = createSprite(650,0,20,20);
      b13.shapeColor=random(["red","yellow","orange","magenta","blue","lime"]);

      b.velocityY=random(2,5);
      b1.velocityY=random(2,5);
      b2.velocityY=random(2,5);
      b3.velocityY=random(2,5);
      b4.velocityY=random(2,5);
      b5.velocityY=random(2,5);
      b6.velocityY=random(2,5);
      b7.velocityY=random(2,5);
      b8.velocityY=random(2,5);
      b9.velocityY=random(2,5);
      b10.velocityY=random(2,5);
      b11.velocityY=random(2,5);
      b12.velocityY=random(2,5);
      b13.velocityY=random(2,5);
    }
  }

  drawSprites();
}