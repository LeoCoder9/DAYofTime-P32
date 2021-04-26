const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg 
var backgIMAGE;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgIMAGE)
    background(backgIMAGE);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London")

    //change the data in JSON format
    var response_JSON = await response.json()

    // write code slice the datetime
    var dt = response_JSON.datetime
    var hour = dt.slice(11,13)
console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if (hour >= 6 && hour <7){
       bg = "sunrise1.png"
    }
    else if (hour >= 7 && hour <8){
        bg = "sunrise2.png"
    }
    else if (hour >= 8 && hour <9){
        bg = "sunrise3.png"
    }
    else if (hour >= 9 && hour <10){
        bg = "sunrise4.png"
    }
    else if (hour >= 10 && hour <11){
        bg = "sunrise5.png"
    }
    else if (hour >= 11 && hour <12){
        bg = "sunrise6.png"
    }
    else if (hour >= 12 && hour <13){
        bg = "sunset7.png"
    }
    else if (hour >= 13 && hour <14){
        bg = "sunset8.png"
    }
    else if (hour >= 14 && hour <15){
        bg = "sunset9.png"
    }
    else if (hour >= 15 && hour <16){
        bg = "sunset10.png"
    }
    else if (hour >= 16 && hour <17){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }
    

    //load the image in backgroundImg variable here
    backgIMAGE = loadImage(bg)

}
