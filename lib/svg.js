const shapes = require("./shapes");

// console.log(shapes.square);

// switch (shapes) {
//   case "circle":
//     return newShape.circle;
//     break;
//   case "square":
//     return newShape.square;
//     break;
//   default:
//     return newShape.triangle;
// }

function generateSVG(userData) {
  return `<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
    <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;
}

module.exports = generateSVG;
