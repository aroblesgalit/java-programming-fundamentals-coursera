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

// Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1, value2, value3) {
  var answer = value1 + " " + value2 + " " + value3;
  return answer;
}

var result1 = phrase3words("smile", "at", "everyone");
var result2 = phrase3words("everyone", "wave", "back");
var result3 = phrase3words("coding", "is", "fun");
console.log(result1, result2, result3);

// Exercise 2 - Format a name
function reformatName(first, last) {
  var answer = last + ", " + first;
  return answer;
}

var result4 = reformatName("Susan", "Rodger");
console.log(result4);
result4 = reformatName("Robert", "Duvall");
console.log(result4);

// Exercise 3 - Number of pixels in an image
function numberPixels(namefile) {
  let image = new Image();
  image.src = namefile;
  let width = parseInt(image.width);
  let height = parseInt(image.height);
  return width * height;
}

console.log(
  numberPixels(
    "https://www.dukelearntoprogram.com/course1/example/eastereggs.jpg"
  )
);

// Exercise 4 - Perimeter of an image
function perimeter(imageName) {
  let image = new Image();
  image.src = imageName;
  let width = parseInt(image.width);
  let height = parseInt(image.height);
  return width * 2 + height * 2;
}

console.log(
  perimeter("https://www.dukelearntoprogram.com/course1/example/roger.png")
);
