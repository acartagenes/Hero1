//Creating animations from sprite sheets
var sprite_sheet_image;
var sprite_sheet;
var explode_animation;

function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadSpriteSheet('img/Aliens clone.png', 128, 192, 5);
  explode_animation = loadAnimation(sprite_sheet);

  //now my sprite sheet
  mySpritesheet = loadSpriteSheet('img/Aliens clone.png', 64, 64, 5);
  myAnimation = loadAnimation(mySpritesheet);

  // load the full sprite sheet for example reference only
  sprite_sheet_image = loadImage('img/Alien clone.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  clear();

  // animate the sprite sheet
  animation(explode_animation, 100, 130);
  animation(myAnimation, 100, 250);
  

  // show full sheet for example reference
  image(sprite_sheet_image, 250, 40, 500, 154);
}
