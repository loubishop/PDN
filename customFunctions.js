let nightScene = false;
let dayScene = false;
let triangleBool = false;
let miniHouse = false 

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}
function draw() {
    if (drawnightScene) {
        nightScene();
    }
    if (drawdayScene) {
        dayScene();
    }
    if (drawtriangleBool) {
        triangletracker();
    }
    if(miniHouse){
    	tinyHouse()
    }

}

// Custom brush function
function drawnightScene() {
    background(0);
    fill(52, 220, 235);
    ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
}

function drawdayScene() {
    background(50, 100, 200);
    fill(235, 168, 52);
    ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
}

function drawtriangletracker() {
    background(138, 39, 30);
    fill(242, 94, 198);
    triangle(mouseX, mouseY, windowWidth / 2, windowHeight / 2, 200, 700);

   function miniHouse(){
   	background (164, 52, 235)
   	fill(183, 84, 196)
   }square(mouseX,mouseY, windowWidth/2 , windowHeight/2, 300, 300, 400, 400)
}

// p5 key pressed function
function keyPressed() {
    if (key === 'q') {
        nightScene = true;
        dayScene = false;
        triangleBool = false;
    }

    if (key === 'w') {
        nightScene = false;
        dayScene = true;
        triangleBool = false;
    }

    if (key === 'e') {
        nightScene = false;
        dayScene = false;
        triangleBool = true;
    }
    if (key=== 'e'){
    	nightScene = false
    	dayScene = false
    	triangleBool = false
    	miniHouse = true 
    }
}









