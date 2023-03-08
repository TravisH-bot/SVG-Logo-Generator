const Circle = `<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="${userData.shapeColor}" />
    <text x="45" y="115" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;

const Square = `<svg width="200" height="200">
    <rect width="200" height="200" style="${userData.shapeColor}" />
    <text x="40" y="110" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;

const Triangle = `<svg height="210" width="500">
    <polygon points="100 15, 200 200, 0 200" fill="${userData.textColor}" />
    <text x="45" y="160" style="font-size:50px;" fill="${userData.textColor}">${userData.text}</text>
  </svg>`;

module.exports = { Circle, Square, Triangle };
