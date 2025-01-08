// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${answers.project}</title>
</head>
<body>
    <h1>${answers.project}</h1>
    <p>${answers.description}</p>
    <p>Created by: ${answers.username}</p>
    <p>Contact: ${answers.email}</p>
</body>
</html>`; 

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'list',
            name: 'choices',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        }
    ])
    .then((answers) => {
        const htmlContent = generateHTML(answers);
        fs.writeFile('index.html', htmlContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();