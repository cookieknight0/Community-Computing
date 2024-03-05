var socket;

function setup() {
  createCanvas(600, 1000);
  background(51);

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(data.r,data.g,data.b);
  ellipse(data.x,data.y,random(1,50),random(1,50));
}

function mouseDragged() {
  colorR = random(0,255);
  colorG = random(0,255);
  colorB = random(0,255);
  console.log('Sending: ' + mouseX + ',' + mouseY);
  var data = {
    x: mouseX,
    y: mouseY,
    r: colorR,
    g: colorG,
    b: colorB,
  }
  socket.emit('mouse',data);
  noStroke();
  fill(colorR,colorG,colorB);
  ellipse(mouseX,mouseY,random(1,50),random(1,50));
}
function draw() {


}