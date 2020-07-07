let player;
const ROTATE_AMOUNT = 0.1;

function setup() {
  createCanvas(400, 400);
  player = new Player();
}

function draw() {
  background(0);
  player.update();
  player.draw();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode == RIGHT_ARROW) {
    player.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode == UP_ARROW && player.gear < 4) {
    player.gear++;
  } else if (keyCode == DOWN_ARROW && player.gear > 1) {
    player.gear--;
  } 
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    player.rotateAmount = 0;
  }
}