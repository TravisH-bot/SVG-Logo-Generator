//create a shape class, this will be a parent
//create subclasses that inherit from the parent - circle, triangle, square

//Parent
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

//Subclasses inheriting from the parent
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg width="300" height="200"><circle cx="100" cy="120" r="80" fill="${this.shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg width="300" height="200"><rect y="50" width="200" height="200" fill="${this.shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<svg width="300" height="200"><polygon points="100 15, 200 200, 0 200" fill="${this.shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

//exporting the classes to be used in the index.js file
module.exports = { Circle, Square, Triangle };
