let video;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent("webcam");
  video = createCapture(VIDEO);
}

function draw() {
  background(220);
  image(video, 0, 0);
}