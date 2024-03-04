
let fairy;
let sparkle;
let fairykingdom;

let fairyX;
let fairyY;

let sparklex = []
let sparkley = []
let sparkleSpeed = []
let fairySpeed = []

let fairyPlayer
let fairyYpos
let fairyXpos = 0
let fairyXspeed = 5

let xSpeed = 3;
let ySpeed = 3;

let score = 0;

let mouseDist;

let startBool = true;
let winBool = false;

function preload() {
  fairy = loadImage('fairy.png');
  sparkle = loadImage('sparkle2.png')
  fairykingdom = loadImage ('fairykingdom.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  fairyX = windowWidth / 2;
  fairyY = windowHeight / 2; 
  fairyYpos = windowHeight - 40
}

function draw() {
  if (startBool) {
    startGame();
  } else if (winBool) {
    winGame();
  }
}

function startGame() {
  background(250, 235, 250);
  image(fairykingdom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  fill(255);
  textSize(30);
  text('Help the fairy collect her dust! Your score is ' + score + ' points!!!', 20, 50);

  image(fairy, fairyXpos, fairyYpos, 100, 100)

  fairyXpos = fairyXpos + fairyXspeed 

  if(fairyXpos <= 0 || fairyXpos >= windowWidth+5){
    fairyXspeed = fairyXspeed * -1
  }


  for(let i= 0; i < sparklex.length; i++){
    image(sparkle, sparklex[i], sparkley[i], 60, 60)
    sparkley[i] = sparkley[i] + sparkleSpeed[i]

    if(dist(fairyXpos, fairyYpos, sparklex[i], sparkley[i]) <30){
      sparklex.splice(i, 1)
      sparkley.splice(i, 1)
      sparkleSpeed.splice(i, 1)
      score++
      fairyXspeed = fairyXspeed * 1
    }
    if(sparkley[i] > windowHeight){
      sparklex.splice(i,1)
      sparkley.splice(i,1)
      sparkleSpeed.splice(i,1)
    }
  }
    if (mouseIsPressed === true && mouseY > 200) {
    fill(255);
    textSize(30);
    text('Too Low! Try Again :(', windowWidth/2, windowHeight/2)

 }
 if(score == 10){
   startBool = false
   winBool = true
}

}

function winGame() {
  background(250, 235, 250);
  image(fairykingdom, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  fill(255);
  textSize(30);
  text('You Win!!', windowWidth / 2, 50);
  image(fairy, windowWidth / 2, windowHeight / 2, 100, 100);

}

function mousePressed(){
  if(mouseY < 200){
    sparklex.push(mouseX)
    sparkley.push(mouseY)
   sparkleSpeed.push(floor(random(1, 4)));
  }
  
}

