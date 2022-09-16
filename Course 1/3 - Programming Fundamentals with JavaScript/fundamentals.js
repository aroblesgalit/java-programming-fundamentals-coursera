// Write a function that prints the width and height of an image
function getImageDims(url) {
  let image = new Image();
  image.src = url;
  let width = image.width;
  let height = image.height;
  return width + "w, " + height + "h";
}

console.log(
  getImageDims(
    "https://www.dukelearntoprogram.com/course1/example/eastereggs.jpg"
  )
);
