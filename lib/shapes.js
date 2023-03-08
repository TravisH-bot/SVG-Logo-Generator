// function renderShape() {
//   const shapes = {
//     circle: `<svg width="200" height="200">
//     <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
//     <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,

//     square: `<svg width="200" height="200">
//   <rect width="200" height="200" style="${userData.shapeColor}" />
//   <text x="40" y="110" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,

//     triangle: `<svg height="210" width="500">
//     <polygon points="100 15, 200 200, 0 200" fill="${userData.shapeColor}" />
//     <text x="45" y="160" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,
//   };
//   console.log(shapes.circle);
// }

// const shapes = {
//   circle: `<svg width="200" height="200">
//     <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
//     <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,

//   square: `<svg width="200" height="200">
//   <rect width="200" height="200" style="${userData.shapeColor}" />
//   <text x="40" y="110" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,

//   triangle: `<svg height="210" width="500">
//     <polygon points="100 15, 200 200, 0 200" fill="${userData.textColor}" />
//     <text x="45" y="160" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
//   </svg>`,
// };

const circle = `<svg width="300" height="200">
    <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
    <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;

const square = `<svg width="300" height="200">
  <rect width="200" height="200" style="${userData.shapeColor}" />
  <text x="40" y="110" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;
console.log(square);

const triangle = `<svg height="300" width="200">
    <polygon points="100 15, 200 200, 0 200" fill="${userData.textColor}" />
    <text x="45" y="160" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;

module.exports = { circle, square, triangle };

const setShape = {
  circle: `<svg width="200" height="200">
      <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
    </svg>`,

  square: `<svg width="200" height="200">
  <rect width="200" height="200" fill"${userData.shapeColor}" />
  </svg>`,

  triangle: `<svg height="200" width="200">
    <polygon points="100 15, 200 200, 0 200" fill="${userData.textColor}" />
    </svg>`,
};

const setText = {
  circleText: `<text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>`,

  squareText: `<text x="40" y="110" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>`,

  triangleText: `<text x="45" y="160" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>`,
};

//create a shape class, this will be a parent
//create subclasses that inherit from the parent - circle, triangle, square
