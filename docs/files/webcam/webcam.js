let video;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent("webcam");
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
}

function draw() {
  background(220);
  image(video, 0, 0);
}