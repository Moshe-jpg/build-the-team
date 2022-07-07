// We need to connect to each of these methods/functions in order for the system to work properly
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./generateHtml.js");

// This function will prompt the user for the Managers information and will either run another function based on the answers, or it'll send the answers to be generated into an html page
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team managers name?",
        validate: (managerNameInput) => {
          if (managerNameInput) {
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
          if (nextOptionsList) {
            return true;
          } else {
            console.log("Please Choose An Option!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      nextOptions(answers);
      return answers;
    })
    .then((answers) => {
      console.log(answers);
      const indexHtmlPath = path.join(__dirname, "index.html");
      fs.writeFileSync(indexHtmlPath, generateHtml(answers),  "utf-8", (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};


// This function will either add an engineer or intern, or neither into the generated html
const nextOptions = (answers) => {
  if (answers.choices === "engineer"){
    return inquirer
    .prompt([// name id email gthub
      {
        type: "input",
        name: 'engineerName',
        message: 'What is the engineers name?',
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter the engineers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'engineerId',
        message: 'What is the engineers ID?',
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter the engineers ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'engineerEmail',
        message: 'What is the engineers Email?',
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter the engineers email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'engineerGithub',
        message: 'What is the engineers GitHub?',
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter the engineers Github!");
            return false;
          }
        },
      }
    ])
  };

  if (answers.choices === "intern"){
    return inquirer
    .prompt([
      {
        type: "input",
        name: 'internName',
        message: 'What is the interns name?',
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter the interns name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'internId',
        message: 'What is the interns ID?',
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter the interns ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'internEmail',
        message: 'What is the interns email?',
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter the interns email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: 'internSchool',
        message: 'What school does the intern go to?',
        validate: (internSchoolInput) => {
          if (internSchoolInput) {
            return true;
          } else {
            console.log("Please enter the interns school!");
            return false;
          }
        },
      }
    ])
  }
  else {
    
  }
}



promptUser()
.then()