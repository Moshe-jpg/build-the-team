const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./generateHtml.js');

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team managers name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the team managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the managers employee ID?",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter the managers employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers Email?",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter the managers Email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the managers office number?",
        validate: (officeNumInput) => {
          if (officeNumInput) {
            return true;
          } else {
            console.log("Please enter the managers office number!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "nextOptions",
        message: "Would you like to add an engineer or intern?",
        choices: ["engineer", "intern", "none"],
        validate: (nextOptionsList) => {
          if (nextOptionsList === "engineer") {
            const addEngineer = () => {
              console.log("You chose engineer");
              inquirer.prompt([
                {
                    
                }
              ])
            };
            addEngineer();
          }
          if (nextOptionsList === "intern") {
            const addIntern = () => {
              console.log("You chose intern");
            };
            addIntern();
          } else {
            console.log("No engineer or intern options");
            return;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const indexHtmlPath = path.join(__dirname, '/dist', 'index.html');
        fs.writeFile(indexHtmlPath, generateHtml(answers), (err) => {
            if (err){
                console.log(err);
            }
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

promptUser();
