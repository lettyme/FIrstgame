var x=480,y=180;
var ballImage;
var backgroundImage;
var objectiveReached;
function setup () {
createCanvas (640,480);
console.log("setup...");
ballImage=loadImage("bal.png");
backgroundImage=loadImage("pitch.png");


}


function draw(){


if (KeyIsDown(RIGHT_ARROW))
   x+=5;
if (KeyIsDown(LEFT_ARROW))
    x-=5;

	

if (KeyIsDown(UP_ARROW))
    y-=5;
if (KeyIsDown(DOWN_ARROW))
    y+=5;

  
if (y>400){
x=480
y=180;
}
if (x>570){
  x=480;
  y=180;
}

if (y<0){
x=480
y=200;
}

if (x<0){
x=480
y=180;
}



if (x==230 && y==200){
x=230
y=200;
	
x=480
y=180;
objectiveReached=true;

}



clear();
image(backgroundImage,0,0);

var color=get(x+30,y+30);
console.log(color);
fill(255,0,0);
rect(462,10,100,20);
text(color,462,25);


image(ballImage,x,y);

if (objectiveReached)
text("congratulations" ,250,210); 	
}

var pressedKeys=[];
function keyPressed(){
if(pressedKeys.indexOf(keyCode)<0)
   pressedKeys.push(keyCode);

	
}



function keyReleased(){
pressedKeys=[];
if(pressedKeys.indexOf(keyCode)>=0)
pressedKeys.splice(pressedKeys.indexOf(keyCode),1);

}
text("letty",200,200);

function KeyIsDown(key){
return pressedKeys.indexOf(key)>=0;

}

