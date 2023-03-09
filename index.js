const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const SVG = require("./lib/svg");
const { Circle, Square, Triangle } = require("./lib/shapes");

const generateLogo = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter text for the logo. (Must not be more than 3 characters)",
      name: "text",
    },
    {
      type: "input",
      message: "Enter a text color",
      name: "textColor",
    },
    {
      type: "list",
      message: "Enter a shape for the logo",
      choices: ["circle", "square", "triangle"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter a shape color",
      name: "shapeColor",
    },
  ]);
};

const newSvg = (shape) => {
  const logo = new SVG();
  logo.setShape(shape);
  logo.setText(shape.text, shape.textColor);
  return logo.render();
};

const init = () => {
  generateLogo()
    .then((userData) => {
      switch (userData.shape) {
        case "circle":
          return new Circle(
            userData.shapeColor,
            userData.text,
            userData.textColor
          );
          break;
        case "square":
          return new Square(
            userData.shapeColor,
            userData.text,
            userData.textColor
          );
          break;
        default:
          return new Triangle(
            userData.shapeColor,
            userData.text,
            userData.textColor
          );
      }
    })
    .then((userData) => writeFile("logo.svg", newSvg(userData)))
    .then(() => console.log("Your logo was generated"))
    .catch((error) => console.log(error));
};

init();
