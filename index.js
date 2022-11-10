// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value)=>{if(value){return true} else {return 'Please input a value to continue!'}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (value)=>{if(value){return true} else {return 'Please input a value to continue!'}},
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: (value)=>{if(value){return true} else {return 'Please input a value to continue!'}},
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value)=>{if(value){return true} else {return 'Please input a value to continue!'}},
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used, do you have any examples?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License is your project using?',
        choices: ["mit", "lgpl-3.0", "mpl-2.0", "agpl-3.0", "apache-2.0", "gpl-3.0", "unlicense"],
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;

        console.log('Success!');
    });
};

// TODO: Create a function to initialize app
function init() {
    const userInput = inquirer.prompt(questions);
    userInput
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(Readme => {
        writeToFile('./README.md', Readme);
    })
    .catch(err => {
        console.log(err);
    })

};

// Function call to initialize app
init();
