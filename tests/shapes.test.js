const { Circle, Square, Triangle } = require("../lib/shapes");

describe("Shape", () => {
  describe("square", () => {
    it("should return a circle with white initials with a blue circle", () => {
      //Arrange
      const text = "TMH";
      const textColor = "white";
      const shapeColor = "blue";

      //Act
      const shape = new Circle(text, textColor, shapeColor);

      //Assert
      expect(shape.render()).toEqual(
        `<svg width="300" height="200"><circle cx="100" cy="120" r="80" fill="${shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${textColor}">${text}</text></svg>`
      );
    });
  });
});

describe("Shape", () => {
  describe("circle", () => {
    it("should return a square with white initials with a blue square", () => {
      //Arrange
      const text = "TMH";
      const textColor = "white";
      const shapeColor = "blue";

      //Act
      const shape = new Square(text, textColor, shapeColor);

      //Assert
      expect(shape.render()).toEqual(
        `<svg width="300" height="200"><rect y="50" width="200" height="200" fill="${shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${textColor}">${text}</text></svg>`
      );
    });
  });
});

describe("Shape", () => {
  describe("triangle", () => {
    it("should return a triangle with white initials with a blue triangle", () => {
      //Arrange
      const text = "TMH";
      const textColor = "white";
      const shapeColor = "blue";

      //Act
      const shape = new Triangle(text, textColor, shapeColor);

      //Assert
      expect(shape.render()).toEqual(
        `<svg width="300" height="200"><polygon points="100 15, 200 200, 0 200" fill="${shapeColor}" /><text x="50" y="150" style="font-size:60px;" fill="${textColor}">${text}</text></svg>`
      );
    });
  });
});
