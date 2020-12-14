const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var thunder1, thunder2, thunder3,thunder4;
var walkingImg;
var boy;
var boy1;
var light;
var maxDrops = 150;
var drops=[];

var engine, world;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

    walkingImg = loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
    var canvas = createCanvas(450, 750);
    engine = Engine.create();
    world = engine.world;
   
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0, 400), random(0,750)));
    }

    boy = new Umbrella(225,450);

    boyB = createSprite(225, 580, 100, 400);
    boyB.addImage(walkingImg);
    boyB.scale = 0.5;
}

function draw(){
    background(0);
   
    Engine.update(engine);

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        drops[i].updatePos();
    }

    var t = Math.round(random(1, 4));

    if(frameCount % 150 === 0){

        light = createSprite(225, 150, 100, 50);
        light.lifetime = 19;
        light.scale = 0.5;
        
        switch(t){
            case 1:
                light.addImage(thunder1);
                break;
            case 2:
                light.addImage(thunder2);
                break;
            case 3:
                light.addImage(thunder3);
                break;
            case 4:
                light.addImage(thunder4);
                break;
            default : break;
        }
    }
    drawSprites();
}   