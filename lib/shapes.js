const Circle = (
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="yellow" />
  </svg>
);

const Square = (
  <svg width="400" height="110">
    <rect width="300" height="100" style="fill:red" />
  </svg>
);

const Triangle = (
  <svg height="210" width="500">
    <polygon points="50 15, 100 100, 0 100" style="fill:lime" />
  </svg>
);

module.exports = { Circle, Square, Triangle };
