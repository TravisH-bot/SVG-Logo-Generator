const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./svg");

const generateLogo = (userData) => {
  return generateSVG();
};

const questions = [
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
];

function init() {
  return inquirer.createPromptModule(questions).then((userData) => {
    const answers = generateSVG(userData);
    fs.writeFile("logo.svg", answers, (error) => {
      error ? console.log(error) : console.log("Your logo was generated");
    });
    console.log(answers);
  });
}

init();
