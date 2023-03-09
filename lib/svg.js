// const shapes = require("./shapes");

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

// function generateSVG(userData) {
//   return `<svg width="200" height="200">
//     <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
//     <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`;
// }

// module.exports = generateSVG;

//create a class for SVG - two keys, text and shape
//3 methods, render, setText, setShape
// const { Circle, Square, Triangle } = require("./lib/shapes");

class SVG {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }

  render() {
    return `<svg width="300" height="200">
    ${this.shape}
    ${this.text}
    </svg>`;
  }

  setText(text, textColor) {
    return `<text x="50" y="150" style="font-size:60px;" fill="${this.textColor}">${this.text}</text>`;
  }

  setShape(shape) {
    this.shape = shape.render();
  }
}

module.exports = SVG;
