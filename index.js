//adding in the required files and dependencies
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const SVG = require("./lib/svg");
const { Circle, Square, Triangle } = require("./lib/shapes");

//initial function to prompt the users with questions on how they wish their logo to look
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

//final function that generates the logo
const newSvg = (shape) => {
  const logo = new SVG();
  logo.setShape(shape);
  logo.setText(shape.text, shape.textColor);
  return logo.render();
};

//using a switch statement that determines what shape the user has chosen and filling in the chosen attributes for text, textColor, and shapeColor
const init = () => {
  generateLogo()
    .then((userData) => {
      switch (userData.shape) {
        case "circle":
          return new Circle(
            userData.text,
            userData.textColor,
            userData.shapeColor
          );
          break;
        case "square":
          return new Square(
            userData.text,
            userData.textColor,
            userData.shapeColor
          );
          break;
        default:
          return new Triangle(
            userData.text,
            userData.textColor,
            userData.shapeColor
          );
      }
    })
    //function to write the userData to a svg file to display the logo, log a message if the file was generated correctly, and an error if one occurs.
    .then((userData) => writeFile("logo.svg", newSvg(userData)))
    .then(() => console.log("Your logo was generated"))
    .catch((error) => console.log(error));
};

//function call to initialize the app
init();
