class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  render() {
    return `
    ${this.shape}
    ${this.text}
  `;
  }

  setText(text, textColor) {
    return `<text x="50" y="150" style="font-size:60px;" fill="${this.textColor}">${this.text}</text>`;
  }

  setShape(shape) {
    this.shape = shape.render();
  }
}

module.exports = SVG;
