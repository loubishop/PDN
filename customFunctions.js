
let squareBrushBool = false
let ellipseBrushBool = false
let triangleBool = false

function setup(){

	createCanvas(windowWidth, windowHeight)
	//background(200, 50, 100)
	rectMode(CENTER)
}

function draw(){

	if(squareBrushBool == true){
		nightScene()
	}
	if(ellipseBrushBool == true){
		ellipseBrush()
	}
	if(triangleBool== true){
		triangletracker()
	}
}


//custom brush function
function nightScene(){
	// if(mouseIsPressed){
	// 	fill(100, 250, 80)
	// 	rect(mouseX, mouseY, 30, 30)
	// }
	background(0)
	fill(52, 220, 235)
	ellipse(windowWidth/2, windowHeight/2, 100, 100)
}


function ellipseBrush(){

	background(50, 100, 200)
	fill(235, 168, 52)
	ellipse(windowWidth/2, windowHeight/2, 100, 100)
	// if(mouseIsPressed){
	// 	fill(80, 100, 200) 
	// 	ellipse(mouseX, mouseY, 50, 50)
	// }
}

function triangletracker (){
	background(138, 39, 30)
	fill(242, 94, 198)
	triangle(mouseX,mouseY,windowWidth/2,windowHeight/2,200,700)
}


//p5 key pressed function

function keyPressed(){
	if(key === 'q'){
		squareBrushBool = true
		ellipseBrushBool = false
		triangleBool= false
	}

	if(key === 'w'){
		squareBrushBool = false
		ellipseBrushBool = true
		triangleBool= false
	}
	if (key==='e'){
		squareBrushBool = false
		ellipseBrushBool = false
		triangleBool= true

	}


}








