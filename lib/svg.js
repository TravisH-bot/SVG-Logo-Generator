const shapes = require("./shapes");

const shape = { Circle, Square, Triangle };

switch (shape) {
  case "Circle":
    return `<svg width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="${userData.shapeColor}"
  />
</svg>`;
    break;
  case "Square":
    return `<svg width="400" height="110">
   <rect
     width="300"
     height="100"
     style="fill="${userData.shapeColor}"
   />
 </svg>;`;
    break;
  default:
    return `<svg height="210" width="500">
   <polygon
     points="50 15, 100 100, 0 100" fill="${userData.shapeColor}
   />
 </svg>;`;
}

function generateSVG(userData) {
  return `<svg width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    fill="${userData.shapeColor}"
  />
</svg>`;
}

module.exports = generateSVG;
