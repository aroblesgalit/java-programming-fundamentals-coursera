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
