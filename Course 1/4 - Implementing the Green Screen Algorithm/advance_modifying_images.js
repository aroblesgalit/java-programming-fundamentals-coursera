// Part 1
var fgImg = new SimpleImage("drewRobert.png");
var bgImg = new SimpleImage("dinos.png");
var newImg = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());

for (var pixel of fgImg.values()) {
  var xPos = pixel.getX();
  var yPos = pixel.getY();

  if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
    newImg.setPixel(xPos, yPos, bgImg.getPixel(xPos, yPos));
  } else {
    newImg.setPixel(xPos, yPos, pixel);
  }
}

print(newImg);

// Part 2
var img = new SimpleImage(200, 200);
for (var px of img.values()) {
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth() / 2) {
    px.setRed(255);
  }
  if (y > img.getHeight() / 2) {
    px.setBlue(255);
  }
  if (x >= img.getWidth() / 2 && y <= img.getHeight() / 2) {
    px.setGreen(255);
  }
}
print(img);
