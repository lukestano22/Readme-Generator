// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your readme?\n'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'No license']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// Function to generate README content
function generateReadmeContent(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usageInfo}

## Contributing
${answers.contributions}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions, please contact [${answers.githubUsername}](https://github.com/${answers.githubUsername}) via email: ${answers.email}.
`;
}

// Function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been generated successfully!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateReadmeContent(answers);
            writeToFile('./readme/README.md', readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
