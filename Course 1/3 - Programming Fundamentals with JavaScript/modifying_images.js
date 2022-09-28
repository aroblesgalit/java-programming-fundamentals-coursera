// Programming Exercise: Modifying Images

// Part 1
var image = new SimpleImage("hilton.jpg");
var width = image.getWidth();
for (var pixel of image.values()) {
  if (pixel.getX() < width / 3) {
    pixel.setRed(255);
  } else if (pixel.getX() > width / 3 && pixel.getX() < width * (2 / 3)) {
    pixel.setGreen(255);
  } else {
    pixel.setBlue(255);
  }
}
print(image);

// Part 2
function swapRedGreen(image) {
  for (var pixel of image.values()) {
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setRed(green);
    pixel.setGreen(red);
  }
  return image;
}
var image2 = new SimpleImage("usain.jpg");
print(image2);
print(swapRedGreen(image2));

// Part 3
var image3 = new SimpleImage("duke_blue_devil.png");
for (var pixel of image3.values()) {
  if (pixel.getRed() < 255) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
  }
}
print(image3);
