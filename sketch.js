const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
let bg;
let ship;
let shipAnim;
let fly;
let ufo; 
let tentacle;


function preload() {
  const shipSpritesheet = loadSpriteSheet("img/SpaceShip.png", 32, 32, 12);
  shipAnim = loadAnimation(shipSpritesheet);
  ship = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 32, 32);
  ship.moveSpeed = 5;
  ship.scale = (2.0)

  const AlienSpritesheet = loadSpriteSheet("img/Aliens Fly.png", 64, 64, 2);
  fly = loadAnimation(AlienSpritesheet)
  

  const UfoSpritesheet = loadSpriteSheet("img/Aliens clone.png", 64, 64, 5);
  ufo = loadAnimation(UfoSpritesheet)

  const tenSpritesheet = loadSpriteSheet("img/Tentacle.png", 128, 128, 5);
  tentacle = loadAnimation(tenSpritesheet)

  bg = loadImage('img/space.jpg')
  

}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  ship.addAnimation("move", shipAnim);
  ship.addImage("still", loadImage("img/ship_still.png"));
  ship.setDefaultCollider();
  
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  ship.limitSpeed(ship.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(bg);
  update(ship);
  animation(fly, 300, 100);
  animation(ufo, 400,250);
  animation(tentacle, 150,300)

}
