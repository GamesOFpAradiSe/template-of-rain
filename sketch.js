const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rain = []
var v = 150
var tech = 0
function preload(){
 bg = loadImage("bg.png") 
 mana = loadAnimation("images/Walking Frame/walking_8.png",
                      "images/Walking Frame/walking_7.png",
                      "images/Walking Frame/walking_6.png",
                      "images/Walking Frame/walking_5.png",
                      "images/Walking Frame/walking_4.png",
                      "images/Walking Frame/walking_3.png",
                      "images/Walking Frame/walking_2.png",
                      "images/Walking Frame/walking_1.png") 
bgm = loadSound("rbgm.mp3") 
lbgm = loadSound("lbgm.mp3")
bgb = loadImage("bg.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight) 
  engine = Engine.create();
  world = engine.world;

  bkg = createSprite(width/2,height-950)

  bkg.addImage(bg)
  bkg.scale = 5
  bgm.loop()
  man = createSprite(width/2,height-110)
 man.addAnimation("String",mana)
 man.scale=1.1
 vb = new VB(width/2+20,300,400)
}


function draw(){
    background("skyblue")
    Engine.update(engine);
   
 
bkg.setVelocity(-5,0)
if(bkg.x<0){
  bkg.x=width/1+1000
  
}
tech = tech+1
if(tech%150===0){
  lbgm.play()
  v = v-150
}else{ v = 150}
    if(frameCount%7===0){
    for (var j = 50; j <=width-10; j=j+50) 
    {
      rain.push(new Rain(j,-10));
    } } if(frameCount>=700){
      tech = 1
     rain.pop()
 
     bgm.stop()
     lbgm.stop()
    }

  
  
 
  
    drawSprites()
    if(frameCount<=700){
      for (var i = 0; i < rain.length; i++) {
     rain[i].display();   
    }}
    imageMode(CENTER)
    tint(255,v)
    image(bgb,width/2,height/2,width,height)
    if(tech===1){
      v = v-1
    }
    fill("red")
 //   text(tech,width/2,height/2)
  //  text(v,width/2,height/2+50)
 
}   

