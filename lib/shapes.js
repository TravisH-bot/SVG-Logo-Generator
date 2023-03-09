//create a shape class, this will be a parent
//create subclasses that inherit from the parent - circle, triangle, square

//Parent
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(color) {
    this.color = color;
  }
}

//Subclasses inheriting from the parent
class Circle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<circle cx="100" cy="120" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<rect y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<polygon points="100 15, 200 200, 0 200" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
