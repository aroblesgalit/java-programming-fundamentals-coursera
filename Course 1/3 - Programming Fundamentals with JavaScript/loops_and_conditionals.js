// Rampup: Programming Exercise - Loops and Conditionals

// 1
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
  pixel.setRed(255);
}

print(image);

// 2
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
  pixel.setRed(0);
}

print(image);

/////////////////////////
// 3
var eggsImg = new SimpleImage("eastereggs.jpg");

for (var pixel of eggsImg.values()) {
  var reds = pixel.getRed();
  if (reds > 70) {
    pixel.setRed(70);
  }
}
print(eggsImg);

/////////////////////////
// 4
var owenImg = new SimpleImage("astrachan.jpg");

for (var pixel of owenImg.values()) {
  var height = owenImg.getHeight();
  if (pixel.getY() >= height - 10) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
}

print(owenImg);

/////////////////////////
// 5
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
  if (pixel.getX() <= 50 && pixel.getY() <= 50) {
    pixel.setRed(0);
    pixel.setGreen(255);
    pixel.setBlue(0);
  }
}

print(image);

/////////////////////////
// 6
function topRightCorner(
  cornerWidth,
  cornerHeight,
  someImage,
  red,
  green,
  blue
) {
  var imageWidth = someImage.getWidth();
  for (var pixel of someImage.values()) {
    if (
      pixel.getY() <= cornerHeight &&
      pixel.getX() >= imageWidth - cornerWidth
    ) {
      pixel.setRed(red);
      pixel.setGreen(green);
      pixel.setBlue(blue);
    }
  }
  return someImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

/////////////////////////
// 7
function changeRed(width, height) {
  var picture = new SimpleImage(width, height);
  var red = 0;

  for (var pixel of picture.values()) {
    pixel.setRed(red);
    if (red < width - 1) {
      red++;
    } else {
      red = 0;
    }
  }

  return picture;
}

var result = changeRed(256, 200);
print(result);

/////////////////////////
// Optional: One Change
function changeColor(width, height, blue, green) {
  var picture = new SimpleImage(width, height);
  var red = 0;

  for (var pixel of picture.values()) {
    pixel.setRed(red);
    if (red < width - 1) {
      red++;
    } else {
      red = 0;
    }
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }

  return picture;
}

var result = changeColor(256, 200, 100, 200);
print(result);
