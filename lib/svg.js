//SVG class that constructs the overall svg file.
class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  //returning a template literal for the shape and text
  render() {
    return `
    ${this.shape}
    ${this.text}
  `;
  }
  //setting text and textColor
  setText(text, textColor) {
    return `<text x="50" y="150" style="font-size:60px;" fill="${textColor}">${text}</text>`;
  }
  //setting the shape to render
  setShape(shape) {
    this.shape = shape.render();
  }
}

//exporting the SVG to be used in the newSvg function in the index.js file
module.exports = SVG;
