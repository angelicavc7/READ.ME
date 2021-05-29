//TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is your GitHub username?',
        name:'github'
    },
    {
        type:'input',
        message:'What is your email?',
        name:'email'
    },
    {
        type:'input',
        message:'What is the title of your application?',
        name:'title'
    }, 
    {
        type: 'input',
        message: 'What is the description of your application?',
        name: 'description'
    },
    {
        type: 'input', 
        message: 'What are the steps required to install your application?',
        name: 'installation'
       
    },
    {
        type: 'input',
        message: 'How would someone use your application?',
        name: 'usage'
       
    },
    {
        type: 'input',
        message: 'How would you like others to contribute to your application',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'if you provided tests, how do they run?',
        name: 'testing'
    },
    {
        type: 'type',
        message: 'Choose the type of license that you are going to use?',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GNU", "BSD3", "None"],
    }

];

//Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`${data.title}-README.md`, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log('README generated successfully!')
  );
}

// initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((answers) => {
    
        writeToFile(answers);

    });
}

init();

